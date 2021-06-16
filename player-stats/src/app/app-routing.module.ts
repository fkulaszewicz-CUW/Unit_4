import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProfileViewComponent } from './pages/new-profile-view/new-profile-view.component';
import { PlayerProfileViewComponent } from './pages/player-profile-view/player-profile-view.component';
import { QueryFiveComponent } from './pages/query-five/query-five.component';
import { QueryFourComponent } from './pages/query-four/query-four.component';
import { QueryOneComponent } from './pages/query-one/query-one.component';
import { QueryThreeComponent } from './pages/query-three/query-three.component';
import { QueryTwoComponent } from './pages/query-two/query-two.component';
import { UpdateProfileViewComponent } from './pages/update-profile-view/update-profile-view.component';
import { WelcomeScreenComponent } from './pages/welcome-screen/welcome-screen.component';

const routes: Routes = [
  { path: '', component: WelcomeScreenComponent },
  { path: 'player-profile', redirectTo: 'profiles', pathMatch: 'full' },
  { path: 'create-player-profile', component: NewProfileViewComponent },
  { path: 'profiles', component: PlayerProfileViewComponent },
  { path: 'profiles/:profileId', component: PlayerProfileViewComponent },
  { path: 'update-profile/:profileId', component: UpdateProfileViewComponent },
  { path: 'queryOne', component: QueryOneComponent },
  { path: 'queryOne/:profileId', component: QueryOneComponent },
  { path: 'queryTwo', component: QueryTwoComponent },
  { path: 'queryTwo/:profileId', component: QueryTwoComponent },
  { path: 'queryThree', component: QueryThreeComponent },
  { path: 'queryThree/:profileId', component: QueryThreeComponent },
  { path: 'queryFour', component: QueryFourComponent },
  { path: 'queryFour/:profileId', component: QueryFourComponent },
  { path: 'queryFive', component: QueryFiveComponent },
  { path: 'queryFive/:profileId', component: QueryFiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
