import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/assets/intervafaces/Experience';

import { Profile } from 'src/assets/intervafaces/Profile';
import { dataBaseProfiles } from '../../../profileMock';
import { sectionTypes } from 'src/assets/intervafaces/sectionTypes';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  sectionTypesEnum = sectionTypes;
  profile: Profile= dataBaseProfiles;


  constructor() { }

  ngOnInit(): void {
  }

  
}
