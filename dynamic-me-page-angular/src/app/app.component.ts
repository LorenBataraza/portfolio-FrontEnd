import { Component } from '@angular/core';
import { Profile } from 'src/assets/intervafaces/Profile';
import { dataBaseProfiles } from '../profileMock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../styles.css']
})
export class AppComponent {
  profile: Profile = dataBaseProfiles;
  title = 'dynamic-me-page-angular';
}
