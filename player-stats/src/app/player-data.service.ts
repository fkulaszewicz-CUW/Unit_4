import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {

  constructor(private webReqService: WebRequestService) { }

  createPlayer(first: string, last: string, birth: string, age: string, height: string, weight: string,
    position: string, experience: string, uniformNumber: string, teamRankOverall: string, gamesPlayed: string,
    gamesStarted: string, minutesPlayedPerGame: string, overallGoalsMade: string, overallGoalAttempts: string,
    overallGoalPercentage: string, averagePointsPerGame: string, twoPointMade: string) {
    return this.webReqService.post('database/playerProfile', {
      first, last, birth, age, height, weight, position, experience, uniformNumber, teamRankOverall, gamesPlayed, gamesStarted,
      minutesPlayedPerGame, overallGoalsMade, overallGoalAttempts, overallGoalPercentage, averagePointsPerGame, twoPointMade
    })
  }

  updatePlayer(profileId: string, first: string, last: string) {
    return this.webReqService.put(`database/playerProfile/byID/${profileId}`, { first, last })
  }

  getRoster() {
    return this.webReqService.get('database/playerProfile');
  }

  getProfile(profileId: string) {
    return this.webReqService.get(`database/playerProfile/byID/${profileId}`);
  }

  deleteProfile(id: string) {
    return this.webReqService.delete(`database/playerProfile/byID/${id}`);
  }

}
