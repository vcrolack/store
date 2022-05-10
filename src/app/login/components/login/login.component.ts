import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name:['', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(3)
      ]
    ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]
    ],
    })
  }

}
