import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CampaignComponent } from './components/campaign/campaign.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'campaign', component: CampaignComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
