import { Component } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
      [this.validateUsernameComRxJS.bind(this)]),
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

  // import { map, catchError } from 'rxjs/operators';
  constructor(private httpClient: HttpClient) {

    const url = `http://localhost:3200/users/validation/omariosouto6`;
    // https://www.learnrxjs.io/learn-rxjs/operators
    // Implementando o RxJS na unha: https://www.youtube.com/watch?v=uQ1zhJHclvs
    // Debounce: https://www.youtube.com/watch?v=6KS4t97yMlI
    // Entrada
    this.httpClient.get(url)
    // Processamento
      .pipe(
        map((input: string) => {
          console.warn('Dentro do map:', input);
          return input.toUpperCase();
        }),
        catchError(() => {
          // se der qualque erro ...
          return 'Deu merda';
        })
      )
    // Saída (normalmente o angular lida com a saída pra gente)
      .subscribe(
        (dados) => {
          console.warn('Deu certo!', dados)
        },
        () => {
          console.log('Deu ruim!')
        },
        () => {
          console.log('terminou')
        },
      )
  }

  validateUsernameComRxJS(formControl) {
    const url = `http://localhost:3200/users/validation/${formControl.value}`;
    return this.httpClient.get(url)

    // Terminar isso aqui
    // Autenticação e o form de Login
    // Organização e qualidade de código (serviços, arquitetura, separação)
    // Lidando mais com eventos
    // Performance no Angular
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
