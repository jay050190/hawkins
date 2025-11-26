import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbComponentStatus, NbGlobalLogicalPosition, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { Country, CountryData } from '../../@core/data/country';

@Component({
  selector: 'ngx-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  countryList:Country[];
  countryMstForm: FormGroup;
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
        title: 'Country',
        type: 'string',
      },
      twoLetterIsoCode: {
        title: 'Two Letter ISO Code',
        type: 'string',
      },
      currency: {
        title: 'Currency',
        type: 'string',
      },
      symbol: {
        title: 'Symbol',
        type: 'string',
      },
      displayOrder: {
        title: 'Display Order',
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
 
  constructor(private fb: FormBuilder, private countryService: CountryData,private toastrService: NbToastrService) {
    this.countryMstForm = this.fb.group({
      id: this.fb.control(0),
      name: this.fb.control("", [Validators.required]),
      twoLetterIsoCode: this.fb.control("", [Validators.required]),
      currency: this.fb.control("", [Validators.required]),
      symbol: this.fb.control("", [Validators.required]),
      displayOrder: this.fb.control(""),
    });
    this.loadCountry();
  }

  ngOnInit()
  {

  }
  get f()
  {
    return this.countryMstForm.controls;
  }
  loadCountry()
  {
    this.countryList=[];
    let req:Country = {operation: "GA",name:"load",twoLetterIsoCode:"load",currency:"load",symbol:"load",id:0};
    this.countryService.getCountry(req).subscribe(
      (res)=>{
        if(res.success===true)
        {
          this.countryList = res.data;
          this.cussource.load(this.countryList);
        }
      }
    );
  }
  onClear()
  {
    this.countryMstForm.reset();
    this.f.id.setValue(0);
    this.buttontext = "Save";
    this.submitted = false;
  }
  onSave()
  {
    this.submitted=true;
    if (!this.countryMstForm.valid) {
      return;
    }
    let req:Country = this.countryMstForm.value;
    if(this.buttontext === "Save")
      req.operation = "I";
    else
      req.operation = "U";

    req.deleted = false;

    this.countryService.dmlCountry(req).subscribe(
      (res)=>{
        if(res.success===true)
        {
          this.showToast(this.types[1],"Success","country Inserted Successfully!")
          
          this.loadCountry();
          this.onClear();
        }
        else
        {
          this.showToast(this.types[4],"Error","country Insertion Failed!")
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
    this.f.twoLetterIsoCode.setValue(event.data.twoLetterIsoCode);
    this.f.currency.setValue(event.data.currency);
    this.f.symbol.setValue(event.data.symbol);
    this.f.displayOrder.setValue(event.data.displayOrder);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      let req:Country = event.data;
      req.operation = "D";
      req.name="";
      req.twoLetterIsoCode="load";
      req.currency="load";
      req.symbol="load";
      req.id=event.data.id;

      this.countryService.dmlCountry(req).subscribe(
        (res)=>{
          if(res.success===true)
          {
            this.showToast(this.types[1],"Success","country Deleted Successfully!")
            this.loadCountry();
          }
          else
          {
            this.showToast(this.types[4],"Error","country Deletion Failed!")
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
