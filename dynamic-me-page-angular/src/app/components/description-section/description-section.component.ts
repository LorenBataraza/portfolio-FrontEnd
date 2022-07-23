import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'src/assets/intervafaces/Profile';
import { dataBaseProfiles } from 'src/profileMock';

@Component({
  selector: 'app-description-section',
  templateUrl: './description-section.component.html',
  styleUrls: ['./description-section.component.css']
})
export class DescriptionSectionComponent implements OnInit {
  @Input() profile: Profile = dataBaseProfiles;

  constructor() { }

  ngOnInit(): void {
  }

  addSection(){
    console.log("Add Section")
  }

  moreOptions(){
    console.log("More Options")
  }

  moreInterest(){
    console.log("Mmm 🐳")    
  }
}
