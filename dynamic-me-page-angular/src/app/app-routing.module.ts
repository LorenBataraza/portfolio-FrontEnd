import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileHubComponent } from './components/profile-hub/profile-hub.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  {path:'profiles', component:ProfileHubComponent },
  {path:'profiles/:id', component: ProfileComponent},
  {path: '', redirectTo: '/profiles', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
