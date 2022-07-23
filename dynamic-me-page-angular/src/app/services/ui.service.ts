import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Profile } from 'src/assets/intervafaces/Profile';
import { dataBaseProfiles } from 'src/profileMock';
import { sectionTypes } from 'src/assets/intervafaces/sectionTypes';

import { SkillLevel } from 'src/assets/intervafaces/skillLevels';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private subject = new Subject<any>();
  skillLevelEnum = SkillLevel
  constructor() { }

  toggleSection(type : sectionTypes ,profile : Profile): Observable<any>{

    console.log("Expand/contract Current Section");
    return this.subject.asObservable();
  }

  SkillCompletionConverter(proficiency : SkillLevel){
    switch (proficiency) {
      case this.skillLevelEnum.Beginner:
         return 20;

        case this.skillLevelEnum.Advanced:
          return 40;
        
        case this.skillLevelEnum.Competent:
          return 60;
        
        case this.skillLevelEnum.Proficient:
          return 80;

        case this.skillLevelEnum.Expert:
          return 90;
          
          case this.skillLevelEnum.Accomplished:
            return 100;
    }
  }

}
