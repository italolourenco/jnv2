import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'memes',
  templateUrl: 'memes.html'
})
export class MemesComponent {

  allTracks: any[];
  selectedTrack: any;

  constructor(public popoverCtrl: PopoverController, public loadingCtrl: LoadingController) {
      console.log("MEMES ONN");
    
  }


}
