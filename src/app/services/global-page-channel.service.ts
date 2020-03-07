import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class GlobalPageChannel {

  search = new Subject<string>();
  updateSearch(novoValorDaBusca: string) {
    this.search.next(novoValorDaBusca);
  }
}
