import { Component } from '@angular/core';
import { UserInterface } from '../user.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  success = false;

  public user !: UserInterface;
  ctcForm!: FormGroup;
constructor(private fb: FormBuilder){
  this.createForm();
}
  createForm() {
    this.ctcForm = this.fb.group({
  name: ['', Validators.compose([Validators.required,Validators.minLength(5)])],
  email:['',Validators.compose([Validators.email, Validators.required])],
  message:['',Validators.required],
  });
}

  ngOnInit() {}

save() 
{ 
  // check if model is valid// if valid, call API to save customer
  this.success = true;
    console.log();
   } 
  }
