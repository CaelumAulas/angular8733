// Código: http://dontpad.com/coisos
// Cria dentro da pasta components
import { CmailFormGroup } from './cmail-form-group/cmail-form-group.component';
import { CmailInputFieldDirective } from './cmail-form-group/cmail-input-field.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    CmailFormGroup,
    CmailInputFieldDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CmailFormGroup,
    CmailInputFieldDirective,
  ],
})
export class SharedComponentsModule {}

