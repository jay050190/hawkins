import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticateService } from '../../@core/services/authenticate.service';
import { first } from 'rxjs/operators';
import { LocationData } from '../../@core/data/location-entity';
import { CartData } from '../../@core/data/cart';
import { User } from '../../@core/data/users';
@Component({
  selector: 'ngx-customer-address',
  templateUrl: './customer-address.component.html',
  styleUrls: ['./customer-address.component.scss']
})
export class CustomerAddressComponent implements OnInit {
  addressForm: FormGroup;
  submitted:boolean = false;
  countryList = [];
  stateList = [];
  loggedUser:User;
  operation = "I";
  addId = 0;

  constructor(private fb: FormBuilder
    ,private authService:AuthenticateService
    ,private router:Router
    ,private locationService:LocationData
    ,private cartService:CartData
    ,private route: ActivatedRoute,
    ) { 

      this.loggedUser = this.authService.currentUserValue;
      if(this.loggedUser==null)
      {
        this.router.navigate(['./user-login']);
      }

      this.addressForm = this.fb.group({
        countryId: ["", [Validators.required]],
        stateProvinceId: ["", [Validators.required]],
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required,Validators.pattern("[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}")]],
        city: ['', [Validators.required]],
        address1: ['', [Validators.required]],
        address2: ['', [Validators.required]],
        zipPostalCode: ['', [Validators.required]],
        phoneNumber: ['', [Validators.required]]
      });
  }

  onSave()
  {
    this.submitted=true;
    if (!this.addressForm.valid) {
      return;
    }
    const req = this.addressForm.value;
    req.operation = this.operation;
    req.customerId = this.loggedUser.id;
    req.countryId = parseInt(this.f.countryId.value)
    req.stateProvinceId = parseInt(this.f.stateProvinceId.value)
    req.id = this.addId;

    this.cartService.customerAddress(req)
    .pipe(first())
    .subscribe(
      data => {
          if(data.success == true)
          {
          this.router.navigate(['/checkout']);
        }
      },
      error => {
      });

   

  }
  get f()
  {
    return this.addressForm.controls;
  }

  async ngOnInit() {
    await this.loadCountry();
    await this.loadStateByCountry();
    await this.readQueryParam();
    
  }

  goBack()
  {
    this.router.navigate(['./checkout']);
  }
  async loadCountry()
  {
    this.locationService.getCountry().subscribe(
      (res)=>{
        if(res.success === true)
        {
          this.countryList = res.data;

        }
      }
    );
  }
 async loadStateByCountry()
  {
    this.locationService.getState().subscribe(
      (res)=>{
        if(res.success === true)
        {
          this.stateList = res.data;
        }
      }
    );
  }
  loadAddressById(id)
  {
    const req = {Id:id,operation:"GID"}
    this.cartService.customerAddress(req)
    .pipe(first())
    .subscribe(
      res => {
          if(res.success == true)
          {
            const addData = res.data[0];
            this.f.firstName.setValue(addData.FirstName);
            this.f.lastName.setValue(addData.LastName);
            this.f.email.setValue(addData.Email);
            this.f.phoneNumber.setValue(addData.PhoneNumber);
            this.f.address1.setValue(addData.Address1);
            this.f.address2.setValue(addData.Address2);
            this.f.city.setValue(addData.City);
            this.f.zipPostalCode.setValue(addData.ZipPostalCode);
            this.f.countryId.setValue(addData.CountryId);
            this.f.stateProvinceId.setValue(addData.StateProvinceId);

          }
      },
      error => {
      });

  }
  async readQueryParam()
  {
    this.route.queryParams.subscribe(params => {
      console.log(params); // { order: "popular" }
      this.addId = params.add;
      this.operation = params.operation;
      this.loadAddressById(this.addId);
    }
  );
  }
}
