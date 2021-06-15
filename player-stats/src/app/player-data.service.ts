import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {

  constructor(private webReqService: WebRequestService) { }

  createPlayer(first: string, last: string) {
    return this.webReqService.post('database/playerProfile', { first, last })
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
