import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PlayerDataService } from 'src/app/player-data.service';

@Component({
  selector: 'app-query-three',
  templateUrl: './query-three.component.html',
  styleUrls: ['./query-three.component.scss']
})
export class QueryThreeComponent implements OnInit {

  rosters: any[] = [];
  profiles: any;

  constructor(private playerDataService: PlayerDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.profileId === undefined) {
        console.log("Do not check ID");
      } else {
        this.playerDataService.getProfile(params.profileId).subscribe((profiles: any) => {
          this.profiles = profiles.data;
        })
      }
    })

    this.playerDataService.getQueryThree().subscribe((rosters: any) => {
      this.rosters = rosters.data;
      console.log(this.rosters)
    })
  }

}
