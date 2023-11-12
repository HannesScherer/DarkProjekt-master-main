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

    let ausgabe: String = "";
    if(this.suche.img != ""){
       ausgabe= this.suche.img;
    }else {
      ausgabe = "Kein Bild Vorhanden"
    }
    return ausgabe;
    
  }

  getName(){
    let ausgabe: String = "";
    if(this.suche.lego_set.set_name != "") {
      ausgabe= this.suche.lego_set.set_name;
    }else {
      ausgabe = "Kein Name vorhanden";
    }
    return ausgabe;
  }
  getId(){
    let ausgabe: String = "";
    if(this.suche.lego_set.set_id != "") {
      ausgabe = this.suche.lego_set.set_id;
    } else {
      ausgabe = "Keine ID vorhanden"
    }

    return ausgabe;
  }
  getPreis(){
    let ausgabe: Number = 0.0;
    if(this.suche.lego_set.preis != null){
      ausgabe = this.suche.lego_set.preis 
    } else {
      ausgabe = 0.0;
    }
    return ausgabe;
  }
  getEinzelteilAnzahl() {
    let ausgabe: Number = 0;
    if(this.suche.lego_set.einzelteil_anzahl != null){
      ausgabe = this.suche.lego_set.einzelteil_anzahl;
    } else {
      ausgabe = 0;
    }
    return ausgabe;
  }
  getEinzelteile(): boolean{
    this.ist_geclickt = true;
    return this.ist_geclickt;
  }
  getShopName1(){
    return this.suche.lego_set.shops[0].shop_name;
  }
  getShopUrl1(){
    return this.suche.lego_set.shops[0].anbieter_url;
    
  }
  getVerfuegbareEinzelteile1(){
    return this.suche.lego_set.shops[0].einzelteile;
  }
  getShopName2(){
    return this.suche.lego_set.shops[1].shop_name;
  }
  getShopUrl2(){
    return this.suche.lego_set.shops[1].anbieter_url;
    
  }
  getVerfuegbareEinzelteile2(){
    return this.suche.lego_set.shops[1].einzelteile;
  }
  getShopName3(){
    return this.suche.lego_set.shops[2].shop_name;
  }
  getShopUrl3(){
    return this.suche.lego_set.shops[2].anbieter_url;
    
  }
  getVerfuegbareEinzelteile3(){
    return this.suche.lego_set.shops[2].einzelteile;
  }
  getEinzelteilpreis1(): number{

    let preis: number = 0.0;
    let i: number = 0;
    while(i <=this.suche.lego_set.shops[0].einzelteile.length){
      preis = preis + (this.suche.lego_set.shops[1].einzelteile[i].preis 
        * this.suche.lego_set.shops[0].einzelteile[i].anzahl)
      i = i + 1;
    }
    return preis;
    
  }
  
  /*
  Preistabelle Günstigste
  Größte Vollständigkeit der Teile
  nach links => bestes Angebot
  Rating System größte Vollständigkeit und Gesamtpreis
  Günstigstes Einzelteil bei Shop xy 
  Versandkosten der Shops ab gewissem Preis
  Aufklappen der Einzelteile
  Einzelteile die Verfügbar sind und einzelteile die nicht verfügbar sind trennen in einem
  Accordion 
  Im Accordion der verfügbaren Teile Button zum bestellen => in den Warenkorb legen
  */



  /*
  protected readonly localStorage = localStorage;
  protected readonly JSON = JSON;
  */
}
