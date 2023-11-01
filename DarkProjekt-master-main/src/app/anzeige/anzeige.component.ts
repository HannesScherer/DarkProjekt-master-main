import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatenService } from '../datenservice.service';
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
  constructor(private datenService: DatenService) {

    this.datenService.eingabeSpeicher$.subscribe((eingabe) => {
      this.suchanfrage = eingabe;
    });

  }
  
  getSuchanfrage(): string {

    console.log(this.suchanfrage);
    return this.suchanfrage;
    
  } 
  
  ngOnInit(): void {
    
    
  }

  

}
