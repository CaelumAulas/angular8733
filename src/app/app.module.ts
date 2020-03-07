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

import { SharedComponentsModule } from './components/shared-components.module';
import { AuthGuard } from './guards/auth.guard';
// import { CmailFormGroup } from './components/cmail-form-group/cmail-form-group.component';
// import { CmailInputFieldDirective } from './components/cmail-form-group/cmail-input-field.directive';

@NgModule({
  declarations: [ // Components, Diretivas
    AppComponent,
    HeaderComponent,
    CmailCadastroComponent,
    CmailInboxComponent,
    // CmailFormGroup,
    // CmailInputFieldDirective
  ],
  imports: [ // Modulos do Angular ou os que você cria
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedComponentsModule,
    ModuloDeRotasConfiguradas
  ],
  providers: [ AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
