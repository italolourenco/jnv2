import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Artist } from '../../models/artist.model';
import { ArtistService } from '../../services/artists/artist.service';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArtistComponent } from '../artists/artist';
import { PlayerComponent } from '../player/player';
import { MemesComponent } from '../memes/memes';

@Component({
  selector: 'artist-detail',
  templateUrl: 'artist-detail.html'
})
export class ArtistDetailComponent {

  artist = null;

  tab1Root: any = PlayerComponent;
  tab2Root: any = MemesComponent;

  mySelectedIndex = null;

  constructor(public popoverCtrl: PopoverController, public loadingCtrl: LoadingController, private artistService: ArtistService, public navCtrl: NavController, public navParams: NavParams) {
    this.artist = this.navParams.get('artist');
  }


}
