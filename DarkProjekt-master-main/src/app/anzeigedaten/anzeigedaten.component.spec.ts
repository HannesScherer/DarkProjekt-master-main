import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnzeigedatenComponent } from './anzeigedaten.component';

describe('AnzeigedatenComponent', () => {
  let component: AnzeigedatenComponent;
  let fixture: ComponentFixture<AnzeigedatenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnzeigedatenComponent]
    });
    fixture = TestBed.createComponent(AnzeigedatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
