import { Component } from '@angular/core';


@Component({
  selector: 'cmail-cadastro-page',
  templateUrl: './inbox.component.html',
})
export class CmailInboxComponent {
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
    para: '',
  }

  toggleNewEmailFormActive() {
    this.isNewEmailFormActive = !this.isNewEmailFormActive;
  }

  handleSubmitOfNewEmail(formEmail) {
    // Fail Fast Validations
    if(formEmail.invalid) {
      return false;
    }

    this.emails.push(this.novoEmail);
    this.novoEmail = { assunto: '', conteudo: '', para: '' };
  }
}
