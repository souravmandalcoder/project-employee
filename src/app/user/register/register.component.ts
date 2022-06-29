import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private empservice: EmployeeService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: ['']
    })
  }

  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  signUp() {
    this.http.post<any>("http://localhost:3000/employee-credentials", this.signupForm.value)
      .subscribe(res => {
        console.log(this.signupForm.value)
        alert("SignUp Successful");
        this.signupForm.reset();
        this.router.navigate(['login']);
      }, err => {
        alert("Something went wrong");
        console.log(err);
      })
  }

}
