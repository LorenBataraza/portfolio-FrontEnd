import { Component, OnInit, Input } from '@angular/core';
import { Experience } from 'src/assets/intervafaces/Experience';

import { Profile } from 'src/assets/intervafaces/Profile';
import { dataBaseProfiles } from '../../../profileMock';
import { sectionTypes } from 'src/assets/intervafaces/sectionTypes';
import { ProfilesService } from 'src/app/services/profiles.service';
import { Router, ActivatedRoute, Params, ParamMap} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profiles: Profile[]= dataBaseProfiles;
  sectionTypesEnum = sectionTypes;
  name: String ='';

  @Input() Inputprofile: Profile = dataBaseProfiles[0];
  profile: Profile = dataBaseProfiles[0];
  id: number = 1;

  subscription?: Subscription;

  constructor(
    private activeRoute : ActivatedRoute,
    private profilesService : ProfilesService
    ) { 
    
  }

  ngOnInit(): void {
    this.profile = this.Inputprofile;
    
    this.activeRoute.params.subscribe( params => { 
      this.id = params['profileId'];
      this.subscription = this.profilesService.getProfileByID(this.id, this.profiles).subscribe(
        (profile) => this.profile= profile
      )
    });

  }




}
