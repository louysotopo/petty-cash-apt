import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajasDeleteComponent } from './cajas-delete.component';

describe('CajasDeleteComponent', () => {
  let component: CajasDeleteComponent;
  let fixture: ComponentFixture<CajasDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajasDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CajasDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
