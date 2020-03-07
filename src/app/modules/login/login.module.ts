// Código aqui: http://dontpad.com/coisos
import { NgModule } from '@angular/core';
import { LoginRoutingModule }  from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../../components/shared-components.module';


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
  exports: [],
})
export class LoginModule {}
