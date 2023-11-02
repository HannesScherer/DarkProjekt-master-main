import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuchleisteComponent } from './suchleiste/suchleiste.component';
import { AnzeigeComponent } from './anzeige/anzeige.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { NavComponent } from './nav/nav.component';
export const routes: Routes = [

  { path: '', component: AppComponent, pathMatch: 'full' },
  {path: 'impressum', title:'Lego-GCT Impressum', component: ImpressumComponent},
  {path: 'eingabe', title:'Lego-GCT Home', component: SuchleisteComponent},
  {path: 'anzeige', title:'Lego-GCT Suchergebniss', component: AnzeigeComponent},
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
