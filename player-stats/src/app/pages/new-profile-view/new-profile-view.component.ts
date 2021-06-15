import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from 'src/app/player-data.service';

@Component({
  selector: 'app-new-profile-view',
  templateUrl: './new-profile-view.component.html',
  styleUrls: ['./new-profile-view.component.scss']
})
export class NewProfileViewComponent implements OnInit {

  constructor(private playerDataService: PlayerDataService) { }

  message: string = '';
  success: string = '';
  show: string = 'show';
  ngOnInit(): void {
  }
  createPlayerProfile(first: string, last: string, birth: string, age: string, height: string,
    weight: string, position: string, experience: string, uniformNumber: string, teamRankOverall: string,
    gamesPlayed: string, gamesStarted: string, minutesPlayedPerGame: string, overallGoalsMade: string,
    overallGoalAttempts: string, overallGoalPercentage: string, averagePointsPerGame: string,
    twoPointMade: string) {
    this.message = '';
    this.success = '';
    this.show = 'show';

    if (first === '' || last === '') {
      console.log("Test");
      this.message = 'show';
    } else {
      this.playerDataService.createPlayer(first, last, birth, age, height, weight, position,
        experience, uniformNumber, teamRankOverall, gamesPlayed, gamesStarted, minutesPlayedPerGame,
        overallGoalsMade, overallGoalAttempts, overallGoalPercentage, averagePointsPerGame, twoPointMade).subscribe((response: any) => {
          this.success = response.message;
          this.show = '';
          console.log(response.message)
        });
    }
  }
}
