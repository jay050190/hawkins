import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbComponentStatus, NbGlobalLogicalPosition, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { AttributeValue, AttributeValueData } from '../../@core/data/attribute-value';
import { BrandData, BrandEntity } from '../../@core/data/brand-entity';

@Component({
  selector: 'ngx-attribute-value',
  templateUrl: './attribute-value.component.html',
  styleUrls: ['./attribute-value.component.scss']
})
export class AttributeValueComponent implements OnInit {

  attrValueList:AttributeValue[];
  attrList:BrandEntity[];
  attrValueMstForm: FormGroup;
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
      ControlValue: {
        title: 'Value',
        type: 'string',
      },
      AttributeName: {
        title: 'Attribute Option',
        type: 'string',
      },
      ColorCode: {
        title: 'Color',
        type: 'string',
      }
    },
    actions: {
    add: false,
    edit: false,
    delete: false,
    custom: [{ name: 'onCustomEdit', title: '<i class="nb-edit"></i>'},{ name: 'OnCustomDelete', title: '<i class="nb-trash"></i>' }],
    position: 'left',
    }
  };

  cussource: LocalDataSource = new LocalDataSource();
 
  constructor(private fb: FormBuilder, private valueService: AttributeValueData,private brandService: BrandData,private toastrService: NbToastrService) {
    this.attrValueMstForm = this.fb.group({
      id: this.fb.control(0),
      controlValue: this.fb.control("", [Validators.required]),
      attributeId: this.fb.control("", [Validators.required]),
      colorCode: this.fb.control(""),
      pictureId: this.fb.control(0),
    });

    this.loadBrand();
  }
  ngOnInit()
  {

  }
  get f()
  {
    return this.attrValueMstForm.controls;
  }
  loadBrand()
  {
    this.attrValueList=[];
    let reqattr = {operation: "GA",createdBy:"",name:"load",description:"load",attributeFor:"",shape:"",controlType:""};
    this.brandService.getAttribute(reqattr).subscribe(
      (res)=>{
        if(res.success===true)
        {
          this.attrList = res.data;
        }
      }
    );

    let req:AttributeValue = {operation: "GA",id:0,attributeId:0,createdBy:"",controlValue:"load",pictureId:0};
    this.valueService.getAttributeValue(req).subscribe(
      (res)=>{
        if(res.success===true)
        {
          this.attrValueList = res.data;
          this.cussource.load(this.attrValueList);
        }
      }
    );
  }
  onClear()
  {
    this.attrValueMstForm.reset();
    this.f.id.setValue(0);
    this.f.pictureId.setValue(0);
    this.buttontext = "Save";
    this.submitted = false;
  }
  onSave()
  {
    this.submitted=true;
    if (!this.attrValueMstForm.valid) {
      return;
    }
    let req:AttributeValue = this.attrValueMstForm.value;
    if(this.buttontext === "Save")
      req.operation = "I";
    else
    req.operation = "U";
    req.createdBy = "16";
    req.deleted = false;


    this.valueService.dmlAttributeValue(req).subscribe(
      (res)=>{
        if(res.success===true)
        {
          this.showToast(this.types[1],"Success","Attribute Value Inserted Successfully!")
          this.onClear();
          this.loadBrand();
        }
        else
        {
          this.showToast(this.types[4],"Error","Attribute Value Insertion Failed!")
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
    this.f.id.setValue(event.data.Id);
    this.f.controlValue.setValue(event.data.ControlValue);
    this.f.colorCode.setValue(event.data.ColorCode);
    this.f.attributeId.setValue(event.data.AttributeId );
    this.f.pictureId.setValue(0);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      let req:AttributeValue = event.data;
      req.operation = "D";
      req.controlValue="delete";
      req.createdBy="16";
      this.valueService.dmlAttributeValue(req).subscribe(
        (res)=>{
          if(res.success===true)
          {
            this.showToast(this.types[1],"Success","Attribute Value Deleted Successfully!")
            this.loadBrand();
          }
          else
          {
            this.showToast(this.types[4],"Error","Attribute Value Deletion Failed!")
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
