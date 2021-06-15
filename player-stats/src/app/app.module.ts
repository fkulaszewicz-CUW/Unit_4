import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerProfileViewComponent } from './pages/player-profile-view/player-profile-view.component';
import { WelcomeScreenComponent } from './pages/welcome-screen/welcome-screen.component';

import { HttpClientModule } from '@angular/common/http';
import { NewProfileViewComponent } from './pages/new-profile-view/new-profile-view.component';
import { UpdateProfileViewComponent } from './pages/update-profile-view/update-profile-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerProfileViewComponent,
    WelcomeScreenComponent,
    NewProfileViewComponent,
    UpdateProfileViewComponent
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
