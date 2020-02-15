import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ModuloDeRotasConfiguradas } from './app.routes';
import { CmailCadastroComponent } from './modules/cadastro/cadastro.component';
import { CmailInboxComponent } from './modules/inbox/inbox.component';
import { CmailFormGroup } from './components/cmail-form-group/cmail-form-group.component';
import { CmailInputFieldDirective } from './components/cmail-form-group/cmail-input-field.directive';

@NgModule({
  declarations: [ // Components, Diretivas
    AppComponent,
    HeaderComponent,
    CmailCadastroComponent,
    CmailInboxComponent,
    CmailFormGroup,
    CmailInputFieldDirective
  ],
  imports: [ // Modulos do Angular ou os que você cria
    BrowserModule,
    FormsModule,
    ModuloDeRotasConfiguradas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
