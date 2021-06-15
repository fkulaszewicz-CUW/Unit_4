import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerProfileViewComponent } from './pages/player-profile-view/player-profile-view.component';
import { WelcomeScreenComponent } from './pages/welcome-screen/welcome-screen.component';

import { HttpClientModule } from '@angular/common/http';
import { NewProfileViewComponent } from './pages/new-profile-view/new-profile-view.component';
import { UpdateProfileViewComponent } from './pages/update-profile-view/update-profile-view.component';
import { QueryOneComponent } from './pages/query-one/query-one.component';
import { QueryTwoComponent } from './pages/query-two/query-two.component';
import { QueryThreeComponent } from './pages/query-three/query-three.component';
import { QueryFourComponent } from './pages/query-four/query-four.component';
import { QueryFiveComponent } from './pages/query-five/query-five.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerProfileViewComponent,
    WelcomeScreenComponent,
    NewProfileViewComponent,
    UpdateProfileViewComponent,
    QueryOneComponent,
    QueryTwoComponent,
    QueryThreeComponent,
    QueryFourComponent,
    QueryFiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
