import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  form :FormGroup;

  constructor(
    private formBuilder : FormBuilder
  ) { 
    this.form = this.formBuilder.group({
      item:['',[]]
    })

  }

  ngOnInit(): void {
  }

}
