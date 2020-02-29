import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

// [REUSO]
// Quanto vou usar esse código?
// Quão fácil é alterar se algo mudar?
// Quanto vale a pena fazer isso?

function validateUsername(formControl) {
  const url = `http://localhost:3200/users/validation/${formControl.value}`;
  formControl.markAsTouched();
  return fetch(url)
    .then((respostaDoServer) => {
      if(respostaDoServer.ok) {
        return null;
      }
      throw new Error('Usuário já foi pego :(')
    })
    .catch(() => {
      return { userTaken: true }
    });
}

@Component({
  selector: 'cmail-cadastro-page',
  templateUrl: './cadastro.component.html',
})
export class CmailCadastroComponent {
  formCadastro = new FormGroup({
    name: new FormControl('Mario', [Validators.required, Validators.minLength(4)]),
    username: new FormControl(
      'omariosouto1',
      [Validators.required],
      [validateUsername]),
    phone: new FormControl('11112222', [
      Validators.required,
      Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')
      // https://regex101.com/r/a2JcP0/1
    ]),
    avatar: new FormControl('asusahuuhsa', [Validators.required]),
    password: new FormControl('123', [Validators.required]),
    // tem que lidar com tamanho
    // tem que ser só numeros
    // se for celular tem que ter 9 digitos
  });

  constructor() {
  }

  handleCadastroDeUsuario() {
    if(this.formCadastro.valid) {
      // Troca os dados do objeto no body pra vir os do form
      fetch('http://localhost:3200/users', {
        method: 'POST',
        body: JSON.stringify({
          "name": "Mario aaa",
          "username": "omariosouto1223123312",
          "phone": "22222222",
          "password": "123",
          "avatar": "aaaa"
        }),
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(() => {

      })
      .catch(() => {

      })
      // Lembra de checar aqui: http://localhost:3200/users
    } else {
      // Dinamica
      // No próximo episódio veremoms o lance da "function"
      Object.keys(this.formCadastro.controls).forEach((nomeDoCampo) => {
          console.log('[this]', this);
          this.formCadastro.get(nomeDoCampo).markAsTouched({ onlySelf: true })
      })
    }
  }

}
