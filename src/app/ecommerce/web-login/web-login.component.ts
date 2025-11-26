import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from '../../@core/services/authenticate.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'ngx-web-login',
  templateUrl: './web-login.component.html',
  styleUrls: ['./web-login.component.scss']
})
export class WebLoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted:boolean = false;
  msgClass = "";
  message = "";

  constructor(private fb: FormBuilder,private autheticateService:AuthenticateService,private router:Router) { 
    this.loginForm = this.fb.group({
      Email: ['', [Validators.required,Validators.pattern("[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}")]],
      Password: ['', [Validators.required]]
    });
  }

  onLogin()
  {
    this.submitted=true;
    if (!this.loginForm.valid) {
      return;
    }
    const req = this.loginForm.value;
    this.autheticateService.login(req)
    .pipe(first())
    .subscribe(
      data => {
          if(data.success == true)
          {
          this.router.navigate(['/my-cart']);
          this.message = "Welcome";
          this.msgClass = "alert-success";
          }
          else
          {
            this.message = "Invalid Credential ! Email Id or Password is incorrect.";
            this.msgClass = "alert-danger";
          }
      },
      error => {
      });

   

  }
  get f()
  {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
  }

}
