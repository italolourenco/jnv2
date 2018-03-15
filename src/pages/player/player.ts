import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'player',
  templateUrl: 'player.html'
})
export class PlayerComponent {

  allTracks: any[];
  selectedTrack: any;

  constructor(public popoverCtrl: PopoverController, public loadingCtrl: LoadingController) {
    console.log("AUDIOS ONN");
  }


}
