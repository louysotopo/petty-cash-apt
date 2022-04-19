import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajasEditComponent } from './cajas-edit.component';

describe('CajasEditComponent', () => {
  let component: CajasEditComponent;
  let fixture: ComponentFixture<CajasEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajasEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CajasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
