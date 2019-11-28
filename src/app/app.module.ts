import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { MainComponent } from './main/main.component';
import { PlayerComponent } from './player/player.component';
import { ListPlaylistComponent } from './main/list-playlist/list-playlist.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { PerfilComponent } from './perfil/perfil.component';

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
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
