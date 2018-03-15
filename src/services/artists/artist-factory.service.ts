import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Http } from "@angular/http";
import { Artist } from "../../models/artist.model";


@Injectable()
export class ArtistFactoryService {

  constructor(public http: Http) {

  }

  private getArtists() {
    return this.http.get("assets/artists.json")
      .map((res: any) => res.json())
      .catch((error: any) => {
        console.log(error);
        return Observable.throw(new Error(error.status));
      });
  }

  public buildArtists(): Observable<Artist> {
    return this.getArtists().flatMap(json => {
      return Observable.from(json['ARTISTS'].map(Artist.build))
    })
  }

}
