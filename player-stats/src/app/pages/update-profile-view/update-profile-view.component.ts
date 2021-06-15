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

  updatePlayerProfile(first: string, last: string) {
    this.success = '';
    this.show = 'show';
    this.playerDataService.updatePlayer(this.selectedProfileId, first, last).subscribe((response: any) => {
      //this.router.navigate(['/profiles', this.selectedProfileId]);
      console.log(response.message);
      this.success = response.message;
      this.show = '';
    })
  }

}
