import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AuthenticateService } from '../../@core/services/authenticate.service';


@Component({
  selector: 'ngx-web-register',
  templateUrl: './web-register.component.html',
  styleUrls: ['./web-register.component.scss']
})
export class WebRegisterComponent implements OnInit {

  loginForm: FormGroup;
  submitted:boolean = false;
  
  constructor(private fb: FormBuilder,private autheticateService:AuthenticateService,private toastrService: NbToastrService,private router:Router) { 
    this.loginForm = this.fb.group({
      Email: ['', [Validators.required,Validators.pattern("[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}")]],
      Password: ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]]
    });
  }

  onLogin()
  {
    this.submitted=true;
    if (!this.loginForm.valid) {
      return;
    }
    const req = this.loginForm.value;
    req.Id = 0;
    req.Operation = "I";
    this.autheticateService.register(req).subscribe(res => {
      this.router.navigate(['./user-login']);
    })
  }
  get f()
  {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
  }


}
