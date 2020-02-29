import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

// Quanto vou usar esse código?
// Quão fácil é alterar se algo mudar?
// Quanto vale a pena fazer isso?

@Component({
  selector: 'cmail-cadastro-page',
  templateUrl: './cadastro.component.html',
})
export class CmailCadastroComponent {
  formCadastro = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    username: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    avatar: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor() {
  }

  handleCadastroDeUsuario() {
    console.log(this.formCadastro.get('name').errors);
    if(this.formCadastro.valid) {
      console.log('Sucesso!')
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
