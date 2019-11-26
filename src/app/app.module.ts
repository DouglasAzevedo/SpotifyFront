import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { MainComponent } from './main/main.component';
import { PlayerComponent } from './player/player.component';
import { ListPlaylistComponent } from './main/list-playlist/list-playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    MainComponent,
    PlayerComponent,
    ListPlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
