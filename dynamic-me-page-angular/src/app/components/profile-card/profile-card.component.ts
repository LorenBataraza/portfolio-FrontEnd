import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'src/assets/intervafaces/Profile';
import { sectionTypes } from 'src/assets/intervafaces/sectionTypes';
import { dataBaseProfiles } from 'src/profileMock';


@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  sectionTypesEnum = sectionTypes;
  @Input() profile: Profile= dataBaseProfiles[0];

  constructor() { }

  ngOnInit(): void {

  }

}
