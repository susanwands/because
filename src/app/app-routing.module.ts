import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignsComponent} from 'src/app/campaigns/campaigns.component';
import { HomeComponent} from 'src/app/home/home.component';
import { ImpactComponent} from 'src/app/impact/impact.component';
import { ProfileComponent} from 'src/app/profile/profile.component';
import { StoriesComponent} from 'src/app/stories/stories.component';
import { StrategyComponent} from 'src/app/strategy/strategy.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'campaigns', component: CampaignsComponent},
  { path: 'impact', component: ImpactComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'stories', component: StoriesComponent},
  { path: 'strategy', component: StrategyComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
