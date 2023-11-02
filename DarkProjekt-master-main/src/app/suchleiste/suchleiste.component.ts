import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {Einzelteil, LegoSet, Shop} from "./datenstrukturen";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DatenService } from '../datenservice.service';

@Component({
  selector: 'app-suchleiste',
  templateUrl: './suchleiste.component.html',
  styleUrls: ['./suchleiste.component.scss']
})

export class SuchleisteComponent {

  legoSetMap = new Map<string, any>();
  readonly apiurl ="localhost:8000";
  eingabeWert:string ='';
  lego_set:LegoSet = new LegoSet("null","null",1,[]);
  eingabeSpeicher: string = '';
  eingabeListe:string[] = [];


  constructor(private http: HttpClient, private router: Router, private datenService: DatenService){}



  getSuchList() {
    // return this.http.get(this.apiurl + '/eingabe/?id=10320');
    return this.http.get("http://localhost:8000/eingabe/?id="+ this.eingabeWert);
  }
  addSuchList(val: any) {
    return this.http.post(this.apiurl + '/suchleiste/' , val);
  }

  updateSuchList(val: any) {
    return this.http.post(this.apiurl + '/suchleiste/' , val);
  }
  deleteSuchLeiste(val: any) {
    return this.http.delete(this.apiurl + '/suchleiste/' + val);
  }

  getAllSuchanfragenName():Observable<any[]>{
    return this.http.get<any[]>(this.apiurl +'/suchleiste/');
  }
  ausgabeInput() {
    console.log(this.eingabeSpeicher);
  }

  pruefeEingabe() {
    this.datenService.updateEingabeSpeicher(this.eingabeWert);
    this.eingabeSpeicher = this.eingabeWert;
    // this.router.navigate(['/anzeige']);
    this.getSuchList().subscribe(data =>{
      this.jsonVerarbeiter(data);
      console.log(data);
      // const einzelteile:Einzelteil[] = [];

      // data[1].


      // console.log(data);

      // const a:any = JSON.parse(JSON.stringify(data));
      // this.legoSetMap.set("set_id", a[0].set_id);
      // const b:any = [];
      // b.add("123");
      // this.legoSetMap.set("list", b);
      //
      // console.log(this.legoSetMap.get("set_id"));
      // localStorage.setItem("set_id", JSON.parse(JSON.stringify(data))[1].parts[0].preis)
      }

    );

  }
  löscheEingabe() {
    this.legoSetMap.clear();
  }

  jsonVerarbeiter(data: any): void {
    const lego_einzelteile:Einzelteil[] = [];
    data[1].parts.forEach((item:any) => {
      const einzelteil:Einzelteil = new Einzelteil(item.einzelteil_id,item.preis,item.anzahl, item.url);
      lego_einzelteile.push(einzelteil);
    })
    const lego_shop:Shop = new Shop(data[1].shop_name, data[1].shop_url, lego_einzelteile);



    const toypro_einzelteile:Einzelteil[] = [];
    data[2].parts.forEach((item:any) => {
      const einzelteil:Einzelteil = new Einzelteil(item.einzelteil_id,item.preis,item.anzahl, item.url);
      lego_einzelteile.push(einzelteil);
    })
    const toypro_shop:Shop = new Shop(data[2].shop_name, data[2].shop_url, lego_einzelteile);


    const bricklink_einzelteile:Einzelteil[] = [];
    data[3].parts.forEach((item:any) => {
      const einzelteil:Einzelteil = new Einzelteil(item.einzelteil_id,item.preis,item.anzahl, item.url);
      lego_einzelteile.push(einzelteil);
    })
    const bricklink_shop:Shop = new Shop(data[3].shop_name, data[3].shop_url, lego_einzelteile);
    const shops:Shop[] = [];
    shops.push(lego_shop);
    shops.push(toypro_shop);
    shops.push(bricklink_shop);
    const lego_set:LegoSet = new LegoSet(data[0].set_id, data[0].set_name, data[0].preis, shops);
    console.log(lego_set);
    localStorage.setItem("set", JSON.stringify(lego_set));
    this.lego_set = lego_set;



  }


  protected readonly JSON = JSON;
  protected readonly localStorage = localStorage;
}
