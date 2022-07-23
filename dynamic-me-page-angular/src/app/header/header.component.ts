import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/assets/intervafaces/Profile';
import { dataBaseProfiles } from '../../profileMock';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'My Tasks List';
  
  constructor() { }

  ngOnInit(): void {  
  }

}
