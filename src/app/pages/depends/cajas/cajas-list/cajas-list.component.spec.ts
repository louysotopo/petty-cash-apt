import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajasListComponent } from './cajas-list.component';

describe('CajasListComponent', () => {
  let component: CajasListComponent;
  let fixture: ComponentFixture<CajasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CajasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
