import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { MainComponent } from './main/main.component';
import { PlayerComponent } from './player/player.component';
import { ListPlaylistComponent } from './main/list-playlist/list-playlist.component';
import { BibliotecaComponent } from './sidemenu/biblioteca/biblioteca.component';
import { PerfilComponent } from './sidemenu/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    MainComponent,
    PlayerComponent,
    ListPlaylistComponent,
    BibliotecaComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
