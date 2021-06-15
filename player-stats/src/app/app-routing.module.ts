import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProfileViewComponent } from './pages/new-profile-view/new-profile-view.component';
import { PlayerProfileViewComponent } from './pages/player-profile-view/player-profile-view.component';
import { UpdateProfileViewComponent } from './pages/update-profile-view/update-profile-view.component';
import { WelcomeScreenComponent } from './pages/welcome-screen/welcome-screen.component';

const routes: Routes = [
  { path: '', component: WelcomeScreenComponent },
  { path: 'player-profile', redirectTo: 'profiles', pathMatch: 'full' },
  { path: 'create-player-profile', component: NewProfileViewComponent },
  { path: 'profiles', component: PlayerProfileViewComponent },
  { path: 'profiles/:profileId', component: PlayerProfileViewComponent },
  { path: 'update-profile/:profileId', component: UpdateProfileViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
