import { Component } from '@angular/core';

// - OK Interceptar o submit do usário
// - Pegar os dados do novo email e adicionar no array
// - Limpar o objeto do novo email

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emails = [
    {
      assunto: 'Email 01', conteudo: 'Alo alo w brazil', para: 'mario.souto@caelum.com.br',
    },
    {
      assunto: 'Email 02',
      conteudo: 'Alo alo w brazil',
      para: 'mario.souto@caelum.com.br',
    },
  ];

  title = 'Caixa de entrada';
  isNewEmailFormActive = false;

  novoEmail = {
    assunto: 'Mano olah que show!',
    conteudo: 'Alo alo w brazil',
    para: 'mario.souto@caelum.com.br',
  }

  toggleNewEmailFormActive() {
    this.isNewEmailFormActive = !this.isNewEmailFormActive;
  }

  handleSubmitOfNewEmail(event) {
    event.preventDefault();
    console.log('this.novoEmail', this.novoEmail);
    this.emails.push(this.novoEmail);
    this.novoEmail = { assunto: '', conteudo: '', para: '' };
  }
}
