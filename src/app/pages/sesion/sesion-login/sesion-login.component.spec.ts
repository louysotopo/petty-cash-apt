import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionLoginComponent } from './sesion-login.component';

describe('SesionLoginComponent', () => {
  let component: SesionLoginComponent;
  let fixture: ComponentFixture<SesionLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesionLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
