import { Component, ElementRef, Input } from '@angular/core';


@Component({
  selector: 'cmail-form-field',
  templateUrl: './cmail-form-group.component.html',
})
export class CmailFormGroup {
  @Input() campo;
  valorDaLabel = 'Bagulhos';
  idDoInput = '';

  ngOnInit() {
    // console.log('CmailFormGroup/ngOnInit');
    const formFieldComponent = this.elementRef.nativeElement;

    const placeholder = formFieldComponent.querySelector('input').getAttribute('placeholder');
    this.valorDaLabel = placeholder;
    formFieldComponent.querySelector('input').setAttribute('placeholder', ' ');

    const inputId = formFieldComponent.querySelector('input').getAttribute('name');
    this.idDoInput = inputId
  }

  // 1 - Primeira coisa que o angular chama de QUALQUER CLASSE/COMPONENTE
  constructor(private elementRef: ElementRef) {
    // this.elementRef = elementRef; (se colocar private no constructor, acontece automagicamente)
    // console.log('CmailFormGroup/constructor')
  }

}
