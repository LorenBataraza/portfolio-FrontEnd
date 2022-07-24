import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'src/assets/intervafaces/Profile';
import { dataBaseProfiles } from 'src/profileMock'; 
import{ ProfilesService } from 'src/app/services/profiles.service'


@Component({
  selector: 'app-profile-hub',
  templateUrl: './profile-hub.component.html',
  styleUrls: ['./profile-hub.component.css']
})
export class ProfileHubComponent implements OnInit {
  @Input() profiles: Profile[] = dataBaseProfiles

  constructor(
    private profileService: ProfilesService
  ) { }

  ngOnInit(): void {
    this.profileService.getProfiles().subscribe((profiles)=> 
   (this.profiles= profiles)
 )
  }

}
