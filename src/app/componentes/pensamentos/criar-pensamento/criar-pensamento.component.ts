import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    if: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: ''

  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento(){
    alert("Novo pensamento criado")
  }

  cancelarPensamento(){
    alert("Operação cancelada")
  }

}
