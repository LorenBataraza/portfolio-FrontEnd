import { Component } from '@angular/core';
import { Profile } from 'src/assets/intervafaces/Profile';
import { dataBaseProfiles } from '../profileMock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  profile: Profile = dataBaseProfiles;
  title = "Dynamic Profiles Page";
}
