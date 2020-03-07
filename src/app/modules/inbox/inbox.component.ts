import { Component } from '@angular/core';
import { GlobalPageChannel } from '../../services/global-page-channel.service';


@Component({
  selector: 'cmail-cadastro-page',
  templateUrl: './inbox.component.html',
})
export class CmailInboxComponent {

  emails = [
    {
      id: 'ADSFghjkkgfdsffh',
      assunto: 'Email 01',
      conteudo: 'Alo alo w brazil',
      para: 'mario.souto@caelum.com.br',
    },
    {
      id: 'awetrhsjhgmfndgshdtjyfdk',
      assunto: 'Email 02',
      conteudo: 'Alo alo w brazil',
      para: 'mario.souto@caelum.com.br',
    },
  ];

  valorDaBusca = '';
  constructor(private globalPageChannel: GlobalPageChannel) {
    this.globalPageChannel.search
      .subscribe((dadoAtualDaBusca) => {
        this.valorDaBusca = dadoAtualDaBusca;
      });
  }
  filtraPelaBusca() {
    const listaFiltradaDeEmails = this.emails.filter((emailAtual) => {
      if(emailAtual.assunto.includes(this.valorDaBusca)) {
        return true;
      }
      return false;
    });
    return listaFiltradaDeEmails;
  }

  apagaEmail(idDoEmailQueVaiSumir: string) {
    console.log('emails', this.emails);
    const listaAtualizadaDeEmails = this.emails.filter((emailAtual) => {
      if(emailAtual.id === idDoEmailQueVaiSumir) { return false; }
      return true;
    });
    console.log('listaAtualizada', listaAtualizadaDeEmails);
    this.emails = listaAtualizadaDeEmails;
  }

  title = 'Caixa de entrada';
  isNewEmailFormActive = false;

  novoEmail = {
    id: '',
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
    this.novoEmail = { id: '', assunto: '', conteudo: '', para: '' };
  }
}
