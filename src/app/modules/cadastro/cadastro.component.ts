import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'cmail-cadastro-page',
  templateUrl: './cadastro.component.html',
})
export class CmailCadastroComponent {
  formCadastro = new FormGroup({
    name: new FormControl('', [ Validators.email ]),
    username: new FormControl('', []),
    phone: new FormControl('', []),
    avatar: new FormControl('', []),
    password: new FormControl('', []),
  });

  handleCadastroDeUsuario() {
    console.log('Submit realizado com sucessinhos!!!');
    console.log(this.formCadastro);
    console.log(this.formCadastro.value);
  }

}
