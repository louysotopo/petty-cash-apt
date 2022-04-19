import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajasCreateComponent } from './cajas-create.component';

describe('CajasCreateComponent', () => {
  let component: CajasCreateComponent;
  let fixture: ComponentFixture<CajasCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajasCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CajasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
