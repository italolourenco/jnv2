import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Artist } from '../../models/artist.model';
import { ArtistService } from '../../services/artists/artist.service';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArtistDetailComponent } from '../artists-detail/artist-detail';

@Component({
  selector: 'artist',
  templateUrl: 'artist.html'
})
export class ArtistComponent {

  artists: Array<Artist>;

  constructor(public popoverCtrl: PopoverController, public loadingCtrl: LoadingController, private artistService: ArtistService, public navCtrl: NavController, public navParams: NavParams) {
    this.artists = [];
    this.presentLoading();
    this.startApp();
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Carregando ...",
      duration: 3000
    });
    loader.present();
  }


  openArtist(artist){

    this.navCtrl.push(ArtistDetailComponent, {artist: artist});
  }




  startApp():void {
    this.artistService.getArtists().subscribe(artist => {
      this.artists.push(artist);
    })
  }

}
