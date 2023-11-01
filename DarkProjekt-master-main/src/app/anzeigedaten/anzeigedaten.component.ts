import { Component, OnInit } from '@angular/core';
import { DatenService } from '../datenservice.service';

@Component({
  selector: 'app-anzeigedaten',
  templateUrl: './anzeigedaten.component.html',
  styleUrls: ['./anzeigedaten.component.scss']
})
export class AnzeigeDatenComponent implements OnInit {

  constructor(private datenService: DatenService) {}

  suchergebnis:any[] = [];

  ngOnInit(): void {
   this.datenService.eingabeSpeicher$.subscribe((eingabe) => {
      this.suchergebnis = this.suchergebnis;
   })
  }

  
}
