import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatenService } from '../datenservice.service';
import { LegoSet } from '../suchleiste/datenstrukturen';
import { SuchleisteComponent } from '../suchleiste/suchleiste.component';
@Component({
  selector: 'app-anzeige',
  templateUrl: './anzeige.component.html',
  styleUrls: ['./anzeige.component.scss']
})
export class AnzeigeComponent {
  suchanfrage: string ='';
  suchergebnis:any;
  url: string = '/assets/suchergebniss.json';
  ist_geclickt: boolean = false;

  eingabe: string = '';
  constructor(private datenService: DatenService, private suche: SuchleisteComponent) {

    this.datenService.eingabeSpeicher$.subscribe((eingabe) => {
      this.suchanfrage = eingabe;
    });

  }
  getImg(){
    return this.suche.img;
  }

  getName(){
    return this.suche.lego_set.set_name;
  }
  getId(){
    return this.suche.lego_set.set_id;
  }
  getPreis(){
    return this.suche.lego_set.preis;
  }
  getEinzelteilAnzahl() {
    return this.suche.lego_set.einzelteil_anzahl;
  }
  getEinzelteile(): boolean{
    this.ist_geclickt = true;
    return this.ist_geclickt;
  }
  getShopName1(){
    return this.suche.lego_set.shops[1].shop_name;
  }
  getShopUrl1(){
    return this.suche.lego_set.shops[1].anbieter_url;
    
  }
  getVerfuegbareEinzelteile1(){
    return this.suche.lego_set.shops[1].einzelteile;
  }
  getShopName2(){
    return this.suche.lego_set.shops[2].shop_name;
  }
  getShopUrl2(){
    return this.suche.lego_set.shops[2].anbieter_url;
    
  }
  getVerfuegbareEinzelteile2(){
    return this.suche.lego_set.shops[2].einzelteile;
  }
  getShopName3(){
    return this.suche.lego_set.shops[3].shop_name;
  }
  getShopUrl3(){
    return this.suche.lego_set.shops[3].anbieter_url;
    
  }
  getVerfuegbareEinzelteile3(){
    return this.suche.lego_set.shops[3].einzelteile;
  }
  




  /*
  protected readonly localStorage = localStorage;
  protected readonly JSON = JSON;
  */
}
