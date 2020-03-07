// Código: http://dontpad.com/coisos
// Cria dentro da pasta components
import { CmailFormGroup } from './cmail-form-group/cmail-form-group.component';
import { CmailInputFieldDirective } from './cmail-form-group/cmail-input-field.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmailCardComponent } from './cmail-card/cmail-card.component';


@NgModule({
  declarations: [
    CmailFormGroup,
    CmailInputFieldDirective,
    CmailCardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CmailFormGroup,
    CmailInputFieldDirective,
    CmailCardComponent
  ],
})
export class SharedComponentsModule {}

