import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { StrategyComponent } from './strategy/strategy.component';
import { StoriesComponent } from './stories/stories.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { ImpactComponent } from './impact/impact.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StrategyComponent,
    StoriesComponent,
    CampaignsComponent,
    ImpactComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
