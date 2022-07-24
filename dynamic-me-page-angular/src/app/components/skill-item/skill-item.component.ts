import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'src/assets/intervafaces/Profile';
import { Skill } from 'src/assets/intervafaces/Skill';
import { SkillLevel } from 'src/assets/intervafaces/skillLevels';
import { dataBaseProfiles } from 'src/profileMock';
import { UiService } from 'src/app/services/ui.service';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {
  skillLevelEnum = SkillLevel;
  profile: Profile= dataBaseProfiles[0];
  completionBarPercentaje: number = 50;
  percentajeString : string = "50%"
  @Input() item: Skill = this.profile.skills[0];
  @Input() index: number = 0 ;


  trashIcon = faTrash;
  editIcon = faPenToSquare;

  constructor(
    private uiService : UiService
  ) { }

  ngOnInit(): void {
    this.completionBarPercentaje = this.uiService.SkillCompletionConverter(this.item.proficiency);
    this.percentajeString = this.completionBarPercentaje + "%"
  }

  

  toggleSkillEdition(){
    console.log("toggleSkillEdition")
  }

  DeleteSkill(){
    console.log("DeleteSkill")
  }
  
}
