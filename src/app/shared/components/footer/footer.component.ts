import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailField: FormControl;

  constructor() {
    this.emailField = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(30),
      Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/),
    ]);

    //escuchar un cambio dinamicamente
    this.emailField.valueChanges
    .subscribe(value => {
      console.log(value);
    })
  }

  ngOnInit(): void {
  }

  sendMail () {
    if (this.emailField.valid) {
      console.log(this.emailField.value);
    }
  }

}
