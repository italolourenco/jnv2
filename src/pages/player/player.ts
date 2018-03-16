import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AudioService } from '../../services/audio/audio.service';
import { NavParams } from 'ionic-angular';

import { AudioProvider } from 'ionic-audio';
import { Audio } from '../../models/audio.model';

@Component({
  selector: 'player',
  templateUrl: 'player.html'
})
export class PlayerComponent {

  myTracks: Array<Audio>;
  allTracks: any[];
  selectedTrack: any

  constructor(private _audioProvider: AudioProvider, private audioService: AudioService, public popoverCtrl: PopoverController, public loadingCtrl: LoadingController, public navParams: NavParams) {
    this.myTracks = [];
    console.log("AUDIOS ONN");
    console.log(navParams.get('artistId'));
    this.startApp(navParams.get('artistId'));
  }

  startApp(id: number):void {
    console.log("baixando music");
    this.audioService.getAudios().subscribe(audio => {
      if(audio.getArtistId() == id){
        this.myTracks.push(audio);
      }
    })
  }

  ngAfterContentInit() {
    this.allTracks = this._audioProvider.tracks;
  }

  playSelectedTrack() {
    this._audioProvider.play(this.selectedTrack);
  }

  pauseSelectedTrack() {
     this._audioProvider.pause(this.selectedTrack);
  }

  onTrackFinished(track: any) {
  }


}
