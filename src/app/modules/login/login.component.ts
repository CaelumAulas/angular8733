import { Component, Input } from '@angular/core';

// Imperativo: dando ordens
// products = [];
// data.forEach((el) => {
//   products.push(el);
//   $('#output').append(`<div>${el.NAME}</div>`);
// });

// Declarativo
// React, Angular, Vue

@Component({
  selector: 'meu-componente-de-titulo',
  template: 'Subtitulo: {{ subtitulo }} <li *ngFor="let item of lista"><span>{{item}}</span></li>',
})
export class ComponenteDeTitulo {
  @Input() subtitulo = 'Valor padrão';
  lista = ['Mario', 'Paulo', 'Sérgio']
}

@Component({
  selector: 'login-component',
  template: `
    <h1>Titulo que vem da class do componente {{ titulo }}</h1>
    <input (input)="funcao(campoAleatorio)" #campoAleatorio value="saduhhuadshudsa" />
    {{ campoAleatorio }}

    <meu-componente-de-titulo>Titulo aqui</meu-componente-de-titulo>
  `,
  // templateUrl: './login.component.html',
})
export class LoginComponent {
  titulo: string = 'Página de login';
  funcao(campoAleatorio) {
    console.log(campoAleatorio);
  }
  // Classe
    // Atributo
    // Método
  // Solto
    // variavel
    // função
}
