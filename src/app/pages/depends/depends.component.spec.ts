import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependsComponent } from './depends.component';

describe('DependsComponent', () => {
  let component: DependsComponent;
  let fixture: ComponentFixture<DependsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DependsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
