import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Profile } from 'src/assets/intervafaces/Profile';
import { dataBaseProfiles } from '../../../profileMock';


import { faTrash } from '@fortawesome/free-solid-svg-icons';
import{ faCompressAlt } from '@fortawesome/free-solid-svg-icons'
import{ faExpandAlt } from '@fortawesome/free-solid-svg-icons'

import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit {
  section_title: string = 'Acerca de';

// Temporal mockup Data  
  profiles: Profile= dataBaseProfiles;
  isExpanded: boolean = true;



  trashIcon = faTrash;
  compressIcon = faCompressAlt;
  expandIcon = faExpandAlt;

  @Output() onDeleteSection: EventEmitter<String> = new EventEmitter();
  @Output() onToggleSection: EventEmitter<any> = new EventEmitter();

  constructor(
    private uiService : UiService
  ) { }

  ngOnInit(): void {
  }


  
  toggleSection(profile : Profile):void{
    this.uiService.toggleSection(profile);
    this.onToggleSection.emit(profile) ;
    console.log(this.profiles.show_experiences)
  }


  emitDeleteSection(){
    console.log("Delete Current Section!")    
    this.onDeleteSection.emit("About")
  }
}
