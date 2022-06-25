import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpprojectComponent } from './empproject.component';

describe('EmpprojectComponent', () => {
  let component: EmpprojectComponent;
  let fixture: ComponentFixture<EmpprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
