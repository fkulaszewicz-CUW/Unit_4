import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PlayerDataService } from 'src/app/player-data.service';

@Component({
  selector: 'app-query-one',
  templateUrl: './query-one.component.html',
  styleUrls: ['./query-one.component.scss']
})
export class QueryOneComponent implements OnInit {

  rosters: any[] = [];
  profiles: any;

  constructor(private playerDataService: PlayerDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.profileId) {
        this.playerDataService.getProfile(params.profileId).subscribe((profiles: any) => {
          this.profiles = profiles.data;
        })
      }
    })

    this.playerDataService.getQueryOne().subscribe((rosters: any) => {
      this.rosters = rosters.data;
      console.log(this.rosters)
    })
  }


}
