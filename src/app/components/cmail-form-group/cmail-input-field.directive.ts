import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[cmailInputField]',
})
export class CmailInputFieldDirective {
    // Extender coisas do HTML
    // Injeção de Dependência / Inversão de Controle
    ngOnInit() {
      console.log('CmailInputField/ngOnInit');
      const inputDaTela = this.referenciaProElemento.nativeElement;
      const nameAttribute =  inputDaTela.getAttribute('name')
      inputDaTela.setAttribute('id', nameAttribute);
    }

    constructor(private referenciaProElemento: ElementRef) {
      console.log('CmailInputField/constructor');
      const inputDaTela = referenciaProElemento.nativeElement;
      inputDaTela.classList.add('mdl-textfield__input')
    }
}
