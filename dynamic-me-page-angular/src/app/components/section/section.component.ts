import { Component, OnInit } from '@angular/core';

import{ faTrash } from '@fortawesome/free-solid-svg-icons'
import{ faCompressAlt } from '@fortawesome/free-solid-svg-icons'
import{ faExpandAlt } from '@fortawesome/free-solid-svg-icons'

import { Profile } from 'src/assets/intervafaces/Profile';
import { dataBaseProfiles } from 'src/profileMock';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  profiles: Profile = dataBaseProfiles;
  title: string = "Experiences";
// Icon instanciation
  trashIcon = faTrash;
  compressIcon= faCompressAlt;
  expandIcon = faExpandAlt;
  

  constructor() { }
  
  ngOnInit(): void {
    
  }

  ToggleSection(){
    console.log("toggle Section")
  }
}
