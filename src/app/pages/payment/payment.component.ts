import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  // emailPattern = new RegExp('^[a-zA-Z0-9_-\.]{1,15}@[a-zA-Z]{1,6}\.[a-zA-Z]{2,6}$')

  constructor() { }

  ngOnInit(): void {
  }

  addUser(email: NgModel, password: NgModel, form: NgForm): void {
    console.log(email);
    console.log(password);
    console.log(form);
    form.resetForm({
      email: ''
    })
    
  }

}
