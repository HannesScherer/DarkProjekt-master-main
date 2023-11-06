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
export class AnzeigeComponent implements OnInit {
  suchanfrage: string ='';
  suchergebnis:any;
  url: string = '/assets/suchergebniss.json';


  eingabe: string = '';
  constructor(private datenService: DatenService, private suche: SuchleisteComponent) {

    this.datenService.eingabeSpeicher$.subscribe((eingabe) => {
      this.suchanfrage = eingabe;
    });

  }

  getSuchanfrage(){

   this.suche.lego_set;

  }

  ngOnInit(): void {


  }

  /*
  protected readonly localStorage = localStorage;
  protected readonly JSON = JSON;
  */
}
