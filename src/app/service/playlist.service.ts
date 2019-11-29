import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlayListDto, NovaPlaylistDto, PlayListMusicaDto } from '../model/model';
import { WS_ADD_PLAYLISTS, WS_REMOVE_PLAYLISTS, WS_PLAYLISTS } from '../utils/ws.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }

  listar() : Observable<PlayListDto[]> {
    return this.http.get<PlayListDto[]>(WS_PLAYLISTS)
  }

  salvar(playlist: NovaPlaylistDto) : Observable<any> {
    return this.http.post<NovaPlaylistDto>(WS_PLAYLISTS, playlist)
  }

  vinculaPlaylistMusica(playlist: PlayListMusicaDto) : Observable<any> {
    return this.http.post<PlayListMusicaDto>(WS_ADD_PLAYLISTS, playlist)
  }

  removePlaylistMusica(playlist: PlayListMusicaDto) : Observable<any> {
    return this.http.post<PlayListMusicaDto>(WS_REMOVE_PLAYLISTS, playlist)
  }

}
