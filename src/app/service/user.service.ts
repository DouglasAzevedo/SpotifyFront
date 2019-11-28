import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioDto } from '../model/model';
import { WS_USERS } from '../utils/ws.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  listar() : Observable<UsuarioDto[]> {
    return this.http.get<UsuarioDto[]>(WS_USERS)
  }

}
