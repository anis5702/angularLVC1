import { Component,OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  // name = '';
  // designation = '';
  // email = '';

  title = 'Angular Form Validation';
  angForm!: FormGroup;
  isValidFormSubmitted = false;
  // siteKey = 'erwe';
  constructor(private fb: FormBuilder) {
   this.createForm();
 }
  
 createForm() {
   this.angForm = this.fb.group({
      name: ['', Validators.compose([Validators.required,Validators.minLength(5)])],
      address: ['', Validators.required],
      location:[''],
      email:['',Validators.compose([Validators.email, Validators.required])]
   });
 }

 onFormSubmit() {
  this.isValidFormSubmitted = false;
  if (this.angForm.invalid) {
     return;
  }
  this.isValidFormSubmitted = true;
  // this.angForm.reset();
}
}
