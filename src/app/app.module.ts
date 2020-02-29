import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
// Importa esse cara na app
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ModuloDeRotasConfiguradas } from './app.routes';
import { CmailCadastroComponent } from './modules/cadastro/cadastro.component';
import { CmailInboxComponent } from './modules/inbox/inbox.component';
import { CmailFormGroup } from './components/cmail-form-group/cmail-form-group.component';
import { CmailInputFieldDirective } from './components/cmail-form-group/cmail-input-field.directive';
import { LoginComponent, ComponenteDeTitulo } from './modules/login/login.component';

@NgModule({
  declarations: [ // Components, Diretivas
    AppComponent,
    HeaderComponent,
    CmailCadastroComponent,
    CmailInboxComponent,
    CmailFormGroup,
    CmailInputFieldDirective,
    LoginComponent,
    ComponenteDeTitulo
  ],
  imports: [ // Modulos do Angular ou os que você cria
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModuloDeRotasConfiguradas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
