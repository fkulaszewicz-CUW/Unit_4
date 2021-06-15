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
  createPlayerProfile(first: string, last: string) {
    this.message = '';
    this.success = '';
    this.show = 'show';

    if (first === '' || last === '') {
      console.log("Test");
      this.message = 'show';
    } else {
      this.playerDataService.createPlayer(first, last).subscribe((response: any) => {
        this.success = response.message;
        this.show = '';
        console.log(response.message)
      });
    }
  }
}
