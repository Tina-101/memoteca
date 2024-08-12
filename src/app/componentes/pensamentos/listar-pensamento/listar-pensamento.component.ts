import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    // {
    //   conteudo: "only eyes like urs can see ghosts. ghosts like me.",
    //   autoria: "yeule",
    //   modelo: "modelo3"
    // },
    {
      conteudo: "im unhealthly obssessed with hi-hats. sdsabdkjsfkajbhsdkgfjad shdfsajdJABSDJSDF aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa IABSDSDF jsdfs shdjs cjsd aidegdfaedfgsdfgsdfgdfgdfgfsan",
      autoria: "teen-uh",
      modelo: "modelo2"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
