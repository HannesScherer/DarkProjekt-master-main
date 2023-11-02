import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DatenService } from '../datenservice.service';

@Component({
  selector: 'app-suchleiste',
  templateUrl: './suchleiste.component.html',
  styleUrls: ['./suchleiste.component.scss']
})

export class SuchleisteComponent {

  legoSetMap = new Map<number, string>();
  readonly apiurl ="localhost:8000";
  eingabeWert:string ='';
  eingabeSpeicher: string = '';
  eingabeListe:string[] = [];
  

  constructor(private http: HttpClient, private router: Router, private datenService: DatenService){}

  

  getSuchList() {
    // return this.http.get(this.apiurl + '/eingabe/?id=10320');
    return this.http.get("http://localhost:8000/eingabe/?id=10320");
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

      this.legoSetMap.set(JSON.parse(JSON.stringify(data)[0]),JSON.parse(JSON.stringify(data)));
      localStorage.setItem("set_id", JSON.parse(JSON.stringify(data))[1].parts[0].preis)}
      
    );

  }
  löscheEingabe() {
    this.legoSetMap.clear();
  }

  jsonVerarbeiter(data: any): void {
    const sets = new Set(data);

  // Erstelle eine Map für die Teile
  const partsMap = new Map<string, any[]>();

  data.forEach((item: any) => {
    if (item.parts) {
      // Wenn das JSON-Objekt Teile enthält, füge sie zur Teile-Map hinzu
      partsMap.set(item.set_id, item.parts);
    }
  });
  console.log(sets);
  console.log(partsMap);
  }

}
