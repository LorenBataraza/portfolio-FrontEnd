import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileHubComponent } from './components/profile-hub/profile-hub.component';
import { ProfileComponent } from './components/profile/profile.component';
import{ PageNotFoundComponent } from './components/page-not-found/page-not-found.component'

const routes: Routes = [
  {path:'profiles/:profileId', component: ProfileComponent},
  {path:'profiles-hub', component:ProfileHubComponent },
  {path: '', redirectTo: 'profiles-hub', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
