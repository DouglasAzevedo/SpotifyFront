import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {

  albuns = [
    {
      url: 'https://c-sf.smule.com/s-sf-bck1/arr/8e/50/82c179e9-babc-451c-a399-f73a3d57d361.jpg',
      nome: 'Poesia acustica 7',
      description: 'Lorem ipsum dolor sit amet'
    }, {
      url: 'https://c-sf.smule.com/s-sf-bck1/arr/8e/50/82c179e9-babc-451c-a399-f73a3d57d361.jpg',
      nome: 'Poesia acustica 7',
      description: 'Lorem ipsum dolor sit amet'

    }, {
      url: 'https://m.media-amazon.com/images/I/61my5hgYxsL._AA256_.jpg',
      nome: 'Poesia acustica 6',
      description: 'Lorem ipsum dolor sit amet'
    }, {
      url: 'https://m.media-amazon.com/images/I/61my5hgYxsL._AA256_.jpg',
      nome: 'Poesia acustica 6',
      description: 'Lorem ipsum dolor sit amet'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
