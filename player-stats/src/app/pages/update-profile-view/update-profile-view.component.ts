import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PlayerDataService } from 'src/app/player-data.service';

@Component({
  selector: 'app-update-profile-view',
  templateUrl: './update-profile-view.component.html',
  styleUrls: ['./update-profile-view.component.scss']
})
export class UpdateProfileViewComponent implements OnInit {

  constructor(private playerDataService: PlayerDataService, private route: ActivatedRoute) { }

  selectedProfileId: any;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.profileId) {
        this.selectedProfileId = params.profileId;
      }
    })
  }

  updatePlayerProfile(first: string, last: string) {
    this.playerDataService.updatePlayer(this.selectedProfileId, first, last).subscribe(() => {
/////ADDD UPDATE ROUTING 
    })
  }

}
