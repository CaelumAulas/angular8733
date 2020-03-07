// Código aqui: http://dontpad.com/coisos
import { NgModule } from '@angular/core';
import { LoginRoutingModule }  from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../../components/shared-components.module';
import { LoginService } from './services/login.service';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    SharedComponentsModule
  ],
  providers: [
    LoginService, // Código dessa classe ta aqui: http://dontpad.com/coisos
  ],
  exports: [],
})
export class LoginModule {}
