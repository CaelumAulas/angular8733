import { Component, Input } from '@angular/core';
import { GlobalPageChannel } from '../services/global-page-channel.service';

@Component({
  selector: 'cmail-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() titleHeader = '';
  isMenuOpen = false;

  // Código do GlobalPageChannel: http://dontpad.com/coisos
  // Cria em src/app/service/global-page-channel.ts
  constructor(private globalPageChannel: GlobalPageChannel) {
    this.globalPageChannel.search
      .subscribe((dadoAtualDaBusca) => {
        console.log('[globalPageChannel] Houve update no campo:', dadoAtualDaBusca);
      });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  handleSearch($event) {
    console.log('[handleSearch] Digitamos no campo: ', $event.target.value)

    this.globalPageChannel.updateSearch($event.target.value);
  }
}
