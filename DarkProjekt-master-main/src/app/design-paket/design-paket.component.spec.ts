import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignPaketComponent } from './design-paket.component';

describe('DesignPaketComponent', () => {
  let component: DesignPaketComponent;
  let fixture: ComponentFixture<DesignPaketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignPaketComponent]
    });
    fixture = TestBed.createComponent(DesignPaketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
