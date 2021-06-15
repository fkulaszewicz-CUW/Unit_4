import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PlayerDataService } from 'src/app/player-data.service';

@Component({
  selector: 'app-player-profile-view',
  templateUrl: './player-profile-view.component.html',
  styleUrls: ['./player-profile-view.component.scss']
})
export class PlayerProfileViewComponent implements OnInit {

  rosters: any[] = [];
  profiles: any;

  selectedProfileId: any;

  constructor(private playerDataService: PlayerDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.profileId) {
        this.selectedProfileId = params.profileId;
        this.playerDataService.getProfile(params.profileId).subscribe((profiles: any) => {
          this.profiles = profiles.data;
        })
      }
    })

    this.playerDataService.getRoster().subscribe((rosters: any) => {
      this.rosters = rosters.data;
    })
  }

  onDeleteProfileClick() {
    console.log(this.selectedProfileId);
    if (this.selectedProfileId) {
      this.playerDataService.deleteProfile(this.selectedProfileId).subscribe((response: any) => {
        window.location.reload();
      })
    }
  }
}
