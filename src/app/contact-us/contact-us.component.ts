import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  submitted = false;

  constructor(
    private formbuilder: FormBuilder, public http: HttpClient
  ) { }


  registerForm: any = FormGroup;

  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      // name: ['', Validators.required, Validators.pattern('[a-zA-Z ]*')],
      name: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: [null, [Validators.required, Validators.email]],
      phonenumber: [null, [Validators.required, Validators.pattern('[0-9]*')]],
      company: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      help: [null, [Validators.required]],

    });

  }
  submitData(data: any) {

    this.submitted = true;
    // console.log('true')
    if (this.registerForm.invalid) {
      return;
    }

    this.http.post('http://localhost:3000/contact-us', data)
      .subscribe((result) => {
        console.warn("result", result)
      })

    if (this.registerForm.valid) {
      alert(`Thank You ${this.registerForm.value.name}`);
      this.registerForm.reset();
    }

  }

  get f() { return this.registerForm.controls; }

  // get name() { return this.registerForm.get('name'); }
  // get company() { return this.registerForm.get('company'); }
  // get email() { return this.registerForm.get('email'); }
  // get phonenumber() { return this.registerForm.get('phonenumber'); }
  // get help() { return this.registerForm.get('help') }

}










