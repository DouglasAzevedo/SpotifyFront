import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  usuarios = []
  
  constructor(private user: UserService) { }

  ngOnInit() {
    this.ListUsers()
  }

  private ListUsers() {
    let result = this.user.listar()
    result.subscribe( listUser => {
      this.usuarios = listUser
    })
  }

}
