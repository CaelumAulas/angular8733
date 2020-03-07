import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'cmail-card',
  templateUrl: './cmail-card.component.html'
})
export class CmailCardComponent {

  @Output('emailVaiSumir') emailVaiSumir = new EventEmitter();
  handleRemoveEmail() {
    if(confirm('Deseja apagar o email?')) {
      console.log('Alo alo w brazil')
      this.emailVaiSumir.emit(null);
      return;
    }
    console.log('email ainda existe');
  }
}
