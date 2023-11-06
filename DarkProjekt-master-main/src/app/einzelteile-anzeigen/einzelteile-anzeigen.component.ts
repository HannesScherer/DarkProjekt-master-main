import { Component } from '@angular/core';
import { SuchleisteComponent } from '../suchleiste/suchleiste.component';

@Component({
  selector: 'app-einzelteile-anzeigen',
  templateUrl: './einzelteile-anzeigen.component.html',
  styleUrls: ['./einzelteile-anzeigen.component.scss']
})
export class EinzelteileAnzeigenComponent {

  constructor(private suche:SuchleisteComponent){}

  getEinzelteile(){

    return this.suche.lego_set.shops.values

  }

}
