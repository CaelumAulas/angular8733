import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'cmail-cadastro-page',
  templateUrl: './cadastro.component.html',
})
export class CmailCadastroComponent {
  formCadastro = new FormGroup({
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    avatar: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor() {
  }

  handleCadastroDeUsuario() {
    if(this.formCadastro.valid) {
      console.log('Sucesso!')
    } else {
      // No próximo episódio veremoms o lance da "function"
      console.log(this.formCadastro.controls);
      Object.keys(this.formCadastro.controls).forEach((nomeDoCampo) => {
          console.log(nomeDoCampo)
          this.formCadastro.get(nomeDoCampo).markAsTouched({ onlySelf: true })
      })
    }
  }

}
