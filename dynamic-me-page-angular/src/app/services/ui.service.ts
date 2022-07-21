import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Profile } from 'src/assets/intervafaces/Profile';
import { dataBaseProfiles } from 'src/profileMock';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor() { }

  toggleSection(profile : Profile){
    profile.show_about = !profile.show_about;
    dataBaseProfiles.show_about = !dataBaseProfiles.show_about;
    
    console.log("Expand/contract Current Section");
  }

}
