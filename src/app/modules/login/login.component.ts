import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  titulo: string = 'Página de login';
  formLogin = new FormGroup({
    login: new FormControl('', [ Validators.email, Validators.required ]),
    senha: new FormControl('', [ Validators.required ]),
  })
  handleLoginUsuario() {
    console.log('Login em desenvolvimento');
  }
}
