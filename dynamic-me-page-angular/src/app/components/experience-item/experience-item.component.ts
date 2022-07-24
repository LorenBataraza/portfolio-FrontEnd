import { Component, OnInit, Input } from '@angular/core';
import { Experience } from 'src/assets/intervafaces/Experience';
import { Profile } from 'src/assets/intervafaces/Profile';


import { dataBaseProfiles } from 'src/profileMock';


import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {
  profile: Profile= dataBaseProfiles[0];

  @Input() item: Experience = this.profile.experiences[0];
  @Input() index: number = 0 ;

  trashIcon = faTrash;
  editIcon = faPenToSquare;

  constructor() { }

  ngOnInit(): void {

  }

  toggleEdition(){
    console.log("Toggle Experience Edition")
  }

  EmitExperienceDeletion(){
    console.log("Delete Experience")
  }


}
