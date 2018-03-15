import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Artist } from "../../models/artist.model";
import { ArtistFactoryService } from "./artist-factory.service";

@Injectable()
export class ArtistService {
  private audios: Array<Artist>

  constructor(public audioFactory: ArtistFactoryService) {
    this.audios = [];
  }

  getArtists(): Observable<Artist> {
    return this.audioFactory.buildArtists().map(audio =>{
      this.audios.push(audio);
      return audio;
    });
  }
}
