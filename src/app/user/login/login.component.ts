import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  login() {
    // this.http.get("http://localhost:3000/employee-credentials")
    //   .subscribe(res => {
    //     const user = res.find((a: any) => {
    //       return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
    //     });
    //     if (user) {
    //       alert("Login Success");
    //       this.loginForm.reset();
    //     } else {
    //       alert("User not found")
    //     }
    //   }, err => {
    //     alert("Something went wrong!")
    //   })
  }

}
