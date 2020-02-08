import { Routes, RouterModule } from '@angular/router';
import { CmailCadastroComponent } from './modules/cadastro/cadastro.component';
import { CmailInboxComponent } from './modules/inbox/inbox.component';
const rotas: Routes = [
  // Home == /
  { path: '', component: CmailInboxComponent },
  { path: 'cadastro', component: CmailCadastroComponent },
  // Criem um componente (Userm analytics)
  { path: '**', redirectTo: '' },
]

// Isso aqui só existe para fazer o "de-para"
// da URL com um Componente
// Funciona junto com o <router-outlet>
export const ModuloDeRotasConfiguradas = RouterModule.forRoot(rotas);
