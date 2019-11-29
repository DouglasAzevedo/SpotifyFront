import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NovaMusicaDto, CurtidaMusicaDto, MusicaDto } from '../model/model';
import { Observable } from 'rxjs';
import { WS_SAVE_MUSIC, WS_LIKE_MUSIC, WS_LIST_MUSIC } from '../utils/ws.constants';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) { }

  salvar(musica: NovaMusicaDto) : Observable<any> {
    return this.http.post<NovaMusicaDto>(WS_SAVE_MUSIC, musica)
  }

  atualizarCurtida(curtida: CurtidaMusicaDto) : Observable<any> {
    return this.http.post<CurtidaMusicaDto>(WS_LIKE_MUSIC, curtida)
  }

  listarMusicas() : Observable<MusicaDto[]> {
    return this.http.get<MusicaDto[]>(WS_LIST_MUSIC)
  }

}
