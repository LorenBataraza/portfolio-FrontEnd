import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import{ AuthenticationService } from '../../services/authentication.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private route: Router
  ) { 
    this.form = this.formBuilder.group(
      {
        email: ['',[Validators.required, Validators.email]],
        password: ['',[Validators.required, Validators.minLength(8)]]
      }
    )
  }

  ngOnInit(

  ): void {
  }

  get Email(){
    return this.form.get('email')
  }
  
  get Password(){
    return this.form.get('password')
  }

  onSubmit(event: Event){
    event.preventDefault;
    this.authenticationService.singIn(this.form.value).subscribe(
      data => {
        console.log("DATA" + JSON.stringify(data))
        this.route.navigate(['/profile-hub'])
      }
    )
  }
}
