import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AuthenticateService } from '../../@core/services/authenticate.service';

@Component({
  selector: 'ngx-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.scss']
})

// export class PasswordValidation {

//   static MatchOtp(AC: FormControl) {
//      return new Promise( resolve => {
//        let password = AC.parent.controls['otpText'].value; // to get value in input tag
//        let confirmPassword = AC.value; // to get value in input tag
//        if(password === confirmPassword) {
//          return resolve(null); // All ok, passwords match!!!
//        } else {
//           return resolve({"not_match": true})
//        }
//     });

//   }
// }
export class ProductRegistrationComponent implements OnInit {

  
  prdRegisterForm: FormGroup;
  otpForm: FormGroup;
  finalForm: FormGroup;
  submitted:boolean = false;
  otpText = "123456";
  steps:any = {one:true,two:false,three:false};
  maxDate = undefined;
showConfirm = false;
  constructor(private fb: FormBuilder,private autheticateService:AuthenticateService,private toastrService: NbToastrService,private router:Router) { 
    const current = new Date();
  this.maxDate = {
    year: current.getFullYear(),
    month: current.getMonth() + 1,
    day: current.getDate()
  };


    this.prdRegisterForm = this.fb.group({
      guranteeCard: ['', [Validators.required]],
      dop: ['', [Validators.required]],
      upload: ['']
    });

    this.otpForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['',[Validators.required]],
      pincode:[''],
      mobile:['',[Validators.required]]
    });

    this.finalForm = this.fb.group({
      otpText: [this.otpText],
      otpEntered: ['', [Validators.required]],
      accept: ['']
    });
  }

  ngOnInit(): void {

  }
  onCheckQuarantee()
  {
    this.submitted=true;
    if (!this.prdRegisterForm.valid) {
      return;
    }
    else
    {
      this.submitted=false;
      this.steps.one = false;
      this.steps.two = true;
      this.steps.three = false;
    }
  }
  getOtp()
  {
    this.submitted=true;
    if (!this.otpForm.valid) {
      return;
    }
    else
    {
      this.submitted=false;
      this.steps.one = false;
      this.steps.two = false;
      this.steps.three = true;
    }
  }
  onVerify()
  {
    this.submitted=true;
    if (!this.finalForm.valid) {
      return;
    }
    else
    {
      if(this.otpText == this.fin.otpEntered.value)
      {
          this.showConfirm = true;
      }

    }
  }
  onSubmit()
  {
    alert("The registration of the guarantee card has been completed successfully")
  }
  get f()
  {
    return this.prdRegisterForm.controls;
  }
  get t()
  {
    return this.otpForm.controls;
  }
  get fin()
  {
    return this.finalForm.controls;
  }

}
