import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {
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

  onEnviar(event: Event){
    console.log("NG")
  }
}
