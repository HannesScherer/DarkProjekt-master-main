import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuchleisteComponent } from './suchleiste/suchleiste.component';
import { AnzeigeComponent } from './anzeige/anzeige.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { NavComponent } from './nav/nav.component';
export const routes: Routes = [

  {path: '', redirectTo: 'eingabe', pathMatch: 'full'},
  {path: 'impressum', title:'Lego-GCT Impressum', component: ImpressumComponent},
  {path: 'ergebnis/:eingabe', title:'Lego-GCT Suchergebnis',component: AnzeigeComponent},
  {path: 'eingabe', title:'Lego-GCT Home',component: SuchleisteComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
