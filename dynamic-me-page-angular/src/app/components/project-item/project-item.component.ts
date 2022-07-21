import { Component, OnInit, Input } from '@angular/core';
import { Experience } from 'src/assets/intervafaces/Experience';
import { Profile } from 'src/assets/intervafaces/Profile';


import { dataBaseProfiles } from 'src/profileMock';


import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/assets/intervafaces/Project';


@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {
  profile: Profile= dataBaseProfiles;
  @Input() item: Project = this.profile.projects[0];
  @Input() index: number =0; 
  
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
