import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { StrategyComponent } from './strategy/strategy.component';
import { StoriesComponent } from './stories/stories.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { ImpactComponent } from './impact/impact.component';
import { ProfileComponent } from './profile/profile.component';
import { MatButtonModule, MatCheckboxModule, MatSlideToggleModule } from '@angular/material';
import { MarketingComponent } from './marketing/marketing.component';
import { PillarsComponent } from './pillars/pillars.component';
import { InitiativesComponent } from './initiatives/initiatives.component';
import { EngagementsComponent } from './engagements/engagements.component';
import { GoalsComponent } from './goals/goals.component';
import { CorrelationsComponent } from './correlations/correlations.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StrategyComponent,
    StoriesComponent,
    CampaignsComponent,
    ImpactComponent,
    ProfileComponent,
    MarketingComponent,
    PillarsComponent,
    InitiativesComponent,
    EngagementsComponent,
    GoalsComponent,
    CorrelationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    NgbCollapseModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
