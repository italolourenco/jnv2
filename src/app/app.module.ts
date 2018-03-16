import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FCM } from '@ionic-native/fcm';
import { IonicAudioModule, defaultAudioProviderFactory } from 'ionic-audio';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ArtistComponent } from '../pages/artists/artist';
import { ArtistDetailComponent } from '../pages/artists-detail/artist-detail';
import { PlayerComponent } from '../pages/player/player';
import { MemesComponent } from '../pages/memes/memes';

import { ArtistService } from '../services/artists/artist.service';
import { ArtistFactoryService } from '../services/artists/artist-factory.service';
import { AudioService } from '../services/audio/audio.service';
import { AudioFactoryService } from '../services/audio/audio-factory.service';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ArtistComponent,
    ArtistDetailComponent,
    PlayerComponent,
    MemesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicAudioModule.forRoot(defaultAudioProviderFactory),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ArtistComponent,
    ArtistDetailComponent,
    PlayerComponent,
    MemesComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FCM,
    ArtistService,
    ArtistFactoryService,
    AudioService,
    AudioFactoryService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
