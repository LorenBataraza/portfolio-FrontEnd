import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

import{ faTrash } from '@fortawesome/free-solid-svg-icons'
import{ faCompressAlt } from '@fortawesome/free-solid-svg-icons'
import{ faExpandAlt } from '@fortawesome/free-solid-svg-icons'

import { Profile } from 'src/assets/intervafaces/Profile';
import { dataBaseProfiles } from 'src/profileMock';

import { UiService } from 'src/app/services/ui.service';
import { ProfilesService } from 'src/app/services/profiles.service';

import { Experience } from 'src/assets/intervafaces/Experience';
import { Subject, Subscription } from 'rxjs';
import { sectionTypes } from 'src/assets/intervafaces/sectionTypes';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  // Input instanciation
  sectionTypesEnum = sectionTypes;
  @Input() sectionTitle: string = "New Section";
  @Input() profile: Profile = dataBaseProfiles;
  @Input() sectionType: sectionTypes = this.sectionTypesEnum.About;
  
  isExpanded: boolean = true;
  items: any = this.profile.experiences;

  // Icon instanciation

  trashIcon = faTrash;
  compressIcon = faCompressAlt;
  expandIcon = faExpandAlt;

  @Output() onDeleteSection: EventEmitter<String> = new EventEmitter();
  @Output() onToggleSection: EventEmitter<any> = new EventEmitter();
  subscription?: Subscription;

  constructor(
    private uiService : UiService,
    private profileService : ProfilesService
    // private profileService : ProfilesService
  ) { 

    this.subscription = this.uiService.toggleSection(this.sectionType, this.profile)
      .subscribe(
        value => this.isExpanded = value
      )

    }


  ngOnInit(): void {
    
    this.isExpanded = this.profileService.itemExtractor(this.profile, this.sectionType);
    this.items = this.profileService.itemExtractor(this.profile, this.sectionType);
  
  }


  // Section manipulation
  toggleSection(type : sectionTypes ,profile : Profile):void{
    this.isExpanded = !this.isExpanded
    // this.uiService.toggleSection(type, profile);

    profile.show_about = !profile.show_about
    this.onToggleSection.emit(profile) ;
    
  }

  emitDeleteSection(){
    console.log("Delete Current Section!")    
    this.onDeleteSection.emit("About")
  }

  // Element Manipulation
  deleteElement(profile : Profile, sectionType : sectionTypes, section: any ){
    // this.profileService.deleteElement(profile,sectionType, section )
  }

  
}
