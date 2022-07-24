import { Component, OnInit, Input } from '@angular/core';
import { Experience } from 'src/assets/intervafaces/Experience';

import { Profile } from 'src/assets/intervafaces/Profile';
import { dataBaseProfiles } from '../../../profileMock';
import { sectionTypes } from 'src/assets/intervafaces/sectionTypes';
import { ProfilesService } from 'src/app/services/profiles.service';
import { Router, ActivatedRoute, Params, ParamMap} from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  sectionTypesEnum = sectionTypes;
  name: String ='';
  @Input() profile: Profile= dataBaseProfiles[0];
  id: number =1;

  constructor(
    private activeRoute : ActivatedRoute
    ) { 
    
  }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe( params => { 
      this.id = params['id'];

      console.log(this.id);

/*        this.profile = dataBaseProfiles.find((obj)=> obj.id === this.id);
 */
    });

  }

}
