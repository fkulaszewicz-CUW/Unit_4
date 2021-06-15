import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PlayerDataService } from 'src/app/player-data.service';

@Component({
  selector: 'app-update-profile-view',
  templateUrl: './update-profile-view.component.html',
  styleUrls: ['./update-profile-view.component.scss']
})
export class UpdateProfileViewComponent implements OnInit {

  constructor(private playerDataService: PlayerDataService, private route: ActivatedRoute, private router: Router) { }

  profiles: any;
  success: string = '';
  show: string = 'show';
  selectedProfileId: any;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.profileId) {
        this.selectedProfileId = params.profileId;
        this.playerDataService.getProfile(params.profileId).subscribe((profiles: any) => {
          this.profiles = profiles.data;
        })
      }
    })
  }

  updatePlayerProfile(first: string, last: string, birth: string, age: string, height: string,
    weight: string, position: string, experience: string, uniformNumber: string, teamRankOverall: string,
    gamesPlayed: string, gamesStarted: string, minutesPlayedPerGame: string, overallGoalsMade: string,
    overallGoalAttempts: string, overallGoalPercentage: string, averagePointsPerGame: string,
    twoPointMade: string, twoPointAttempts: string, twoPointPercentage: string, threePointMade: string,
    threePointAttempts: string, threePointPercentage: string, freePointMade: string, freePointAttempts: string,
    freePointPercentage: string, reboundsOffense: string, reboundsDefense: string, totalReboundsPerGame: string,
    assists: string, steals: string, blocks: string, turnovers: string, fouls: string) {
    this.success = '';
    this.show = 'show';
    this.playerDataService.updatePlayer(this.selectedProfileId, first, last, birth, age, height, weight, position,
      experience, uniformNumber, teamRankOverall, gamesPlayed, gamesStarted, minutesPlayedPerGame,
      overallGoalsMade, overallGoalAttempts, overallGoalPercentage, averagePointsPerGame, twoPointMade,
      twoPointAttempts, twoPointPercentage, threePointMade, threePointAttempts, threePointPercentage,
      freePointMade, freePointAttempts, freePointPercentage, reboundsOffense, reboundsDefense,
      totalReboundsPerGame, assists, steals, blocks, turnovers, fouls).subscribe((response: any) => {
        //this.router.navigate(['/profiles', this.selectedProfileId]);
        console.log(response.message);
        this.success = response.message;
        this.show = '';
      })
  }

}
