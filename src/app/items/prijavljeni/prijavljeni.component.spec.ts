import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrijavljeniComponent } from './prijavljeni.component';

describe('PrijavljeniComponent', () => {
  let component: PrijavljeniComponent;
  let fixture: ComponentFixture<PrijavljeniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrijavljeniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrijavljeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
