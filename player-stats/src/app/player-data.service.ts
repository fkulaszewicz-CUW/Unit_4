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
    overallGoalPercentage: string, averagePointsPerGame: string, twoPointMade: string, twoPointAttempts: string,
    twoPointPercentage: string, threePointMade: string, threePointAttempts: string, threePointPercentage: string,
    freePointMade: string, freePointAttempts: string, freePointPercentage: string, reboundsOffense: string,
    reboundsDefense: string, totalReboundsPerGame: string, assists: string, steals: string, blocks: string,
    turnovers: string, fouls: string) {
    return this.webReqService.post('database/playerProfile', {
      first, last, birth, age, height, weight, position, experience, uniformNumber, teamRankOverall, gamesPlayed, gamesStarted,
      minutesPlayedPerGame, overallGoalsMade, overallGoalAttempts, overallGoalPercentage, averagePointsPerGame, twoPointMade,
      twoPointAttempts, twoPointPercentage, threePointMade, threePointAttempts, threePointPercentage, freePointMade,
      freePointAttempts, freePointPercentage, reboundsOffense, reboundsDefense, totalReboundsPerGame, assists,
      steals, blocks, turnovers, fouls
    })
  }

  updatePlayer(profileId: string, first: string, last: string, birth: string, age: string, height: string, weight: string,
    position: string, experience: string, uniformNumber: string, teamRankOverall: string, gamesPlayed: string,
    gamesStarted: string, minutesPlayedPerGame: string, overallGoalsMade: string, overallGoalAttempts: string,
    overallGoalPercentage: string, averagePointsPerGame: string, twoPointMade: string, twoPointAttempts: string,
    twoPointPercentage: string, threePointMade: string, threePointAttempts: string, threePointPercentage: string,
    freePointMade: string, freePointAttempts: string, freePointPercentage: string, reboundsOffense: string,
    reboundsDefense: string, totalReboundsPerGame: string, assists: string, steals: string, blocks: string,
    turnovers: string, fouls: string) {
    return this.webReqService.put(`database/playerProfile/byID/${profileId}`, {
      first, last, birth, age, height, weight, position, experience, uniformNumber, teamRankOverall, gamesPlayed, gamesStarted,
      minutesPlayedPerGame, overallGoalsMade, overallGoalAttempts, overallGoalPercentage, averagePointsPerGame, twoPointMade,
      twoPointAttempts, twoPointPercentage, threePointMade, threePointAttempts, threePointPercentage, freePointMade,
      freePointAttempts, freePointPercentage, reboundsOffense, reboundsDefense, totalReboundsPerGame, assists,
      steals, blocks, turnovers, fouls
    })
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

  getQueryOne() {
    return this.webReqService.get('database/queryOne');
  }

}
