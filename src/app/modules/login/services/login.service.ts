import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface LoginDTO {
  email: string;
  password: string;
}

@Injectable()
export class LoginService {
  url: string = 'http://localhost:3200/login';
  constructor(private httpClient: HttpClient) {
    console.log('constructor/LoginService');
  }

  logarHttpClient(dadosDoLogin: LoginDTO) {
    return this.httpClient.post(this.url, dadosDoLogin, {
      headers: {
        'content-type': 'application/json',
      }
    })
    .toPromise()
  }

  logar(dadosDoLogin: LoginDTO) {
    return fetch(this.url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(dadosDoLogin)
    })
    .then((respostaDoServer) => {
      if(respostaDoServer.ok) {
        return respostaDoServer.json();
      }

      throw new Error('Aconteceu algum problema :(');
    })
    .then((respostaDoServerEmObjeto) => {
      // o servidor devolve uma credencial/crachá/token
      console.log(respostaDoServerEmObjeto.token);
      // guardamos o dado
      // direciona o usuário pra alguma pagina
    })
  }
}
