import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbComponentStatus, NbGlobalLogicalPosition, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { BrandEntity, BrandData } from '../../@core/data/brand-entity';

@Component({
  selector: 'ngx-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent implements OnInit {

  brandList:BrandEntity[];
  brandMstForm: FormGroup;
  submitted:boolean = false;
  buttontext:string = "Save";

  types: NbComponentStatus[] = [
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ];

  cussettings = {
    hideSubHeader: true,
    columns: {   
      name: {
        title: 'Attribute',
        type: 'string',
      },
      controlType: {
        title: 'Control Type',
        type: 'string',
      },
      attributeFor: {
        title: 'Attribute For',
        type: 'string',
      },
      shape: {
        title: 'Shape',
        type: 'string',
      }
    },
    actions: {
    add: false,
    edit: false,
    delete: false,
    custom: [{ name: 'onCustomEdit', title: '<i class="nb-edit"></i>' },{ name: 'OnCustomDelete', title: '<i class="nb-trash"></i>' }],
    position: 'left'
    }
  };

  cussource: LocalDataSource = new LocalDataSource();
 
  constructor(private fb: FormBuilder, private brandService: BrandData,private toastrService: NbToastrService) {
    this.brandMstForm = this.fb.group({
      id: this.fb.control(0),
      name: this.fb.control("", [Validators.required]),
      description: this.fb.control("", [Validators.required]),
      attributeFor: this.fb.control("", [Validators.required]),
      shape: this.fb.control("", [Validators.required]),
      controlType: this.fb.control("",[Validators.required]),
    });

    this.loadBrand();
  }
  ngOnInit()
  {

  }
  get f()
  {
    return this.brandMstForm.controls;
  }
  loadBrand()
  {
    this.brandList=[];
    let req:BrandEntity = {operation: "GA",createdBy:"",name:"load",description:"load",attributeFor:"",shape:"",controlType:""};
    this.brandService.getAttribute(req).subscribe(
      (res)=>{
        if(res.success===true)
        {
          this.brandList = res.data;
          this.cussource.load(this.brandList);
        }
      }
    );
  }
  onClear()
  {
    this.brandMstForm.reset();
    this.f.id.setValue(0);
    this.buttontext = "Save";
    this.submitted = false;
  }
  onSave()
  {
    this.submitted=true;
    if (!this.brandMstForm.valid) {
      return;
    }
    let req:BrandEntity = this.brandMstForm.value;
    if(this.buttontext === "Save")
      req.operation = "I";
    else
      req.operation = "U";
    req.createdBy = "16";
    req.deleted = false;


    this.brandService.dmlAttribute(req).subscribe(
      (res)=>{
        if(res.success===true)
        {
          this.showToast(this.types[1],"Success","Attribute Action Executed Successfully!")
          this.onClear();
          this.loadBrand();
        }
        else
        {
          this.showToast(this.types[4],"Error","Attribute Insertion Failed!")
        }
      }
    );
  }

  onCustomAction(event) {
    switch ( event.action) {
      case 'onCustomEdit':
        this.onEditClick(event);
        break;
     case 'OnCustomDelete':
        this.onDeleteConfirm(event);
    }
  }

  onEditClick(event): void {
    this.buttontext = "Update";
    this.f.id.setValue(event.data.id);
    this.f.name.setValue(event.data.name);
    this.f.description.setValue(event.data.description);
    this.f.attributeFor.setValue(event.data.attributeFor );
    this.f.shape.setValue(event.data.shape);
    this.f.controlType.setValue(event.data.controlType);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      let req:BrandEntity = event.data;
      req.operation = "D";
      req.name="delete";
      req.description="delete";
      req.createdBy="16";
      this.brandService.dmlAttribute(req).subscribe(
        (res)=>{
          if(res.success===true)
          {
            this.showToast(this.types[1],"Success","Attribute Deleted Successfully!")
            this.loadBrand();
          }
          else
          {
            this.showToast(this.types[4],"Error","Attribute Deletion Failed!")
          }
        }
      );
    } 
  }

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: true,
      duration: 2000,
      hasIcon: true,
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
      preventDuplicates: false,
    };
    const titleContent = title ? `. ${title}` : '';

    this.toastrService.show(
      body,
      `Toast ${titleContent}`,
      config);
  }
}
