import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ModuloDeRotasConfiguradas } from './app.routes';
import { CmailCadastroComponent } from './modules/cadastro/cadastro.component';
import { CmailInboxComponent } from './modules/inbox/inbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CmailCadastroComponent,
    CmailInboxComponent
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
