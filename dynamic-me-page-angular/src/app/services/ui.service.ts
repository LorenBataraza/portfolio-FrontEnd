import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Profile } from 'src/assets/intervafaces/Profile';
import { dataBaseProfiles } from 'src/profileMock';
import { sectionTypes } from 'src/assets/intervafaces/sectionTypes';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private subject = new Subject<any>();

  constructor() { }

  toggleSection(type : sectionTypes ,profile : Profile): Observable<any>{

    console.log("Expand/contract Current Section");
    return this.subject.asObservable();
  }



}
