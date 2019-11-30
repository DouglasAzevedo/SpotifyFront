import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { PlaylistService } from '../service/playlist.service';
import { PlayListDto } from '../model/model';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  usuarios = []
  playlists: PlayListDto[] = [];
  
  constructor(private user: UserService,
      private list: PlaylistService
    ) { }

  ngOnInit() {
    this.ListUsers()
    this.ListPlaylist()
  }

  private ListUsers() {
    let result = this.user.listar()
    result.subscribe( listUser => {
      this.usuarios = listUser
    })
  }

  private ListPlaylist() {
    let result = this.list.listar()
    result.subscribe( listPlay => {
      this.playlists = listPlay
    })
  }

}
