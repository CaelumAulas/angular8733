import { Routes, RouterModule } from '@angular/router';
import { CmailCadastroComponent } from './pages/cadastro/cadastro.component';
const rotas: Routes = [
  { path: '', component: CmailCadastroComponent }
]
export const ModuloDeRotasConfiguradas = RouterModule.forRoot(rotas);
