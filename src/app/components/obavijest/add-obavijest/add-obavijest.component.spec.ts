import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddObavijestComponent } from './add-obavijest.component';

describe('AddObavijestComponent', () => {
  let component: AddObavijestComponent;
  let fixture: ComponentFixture<AddObavijestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddObavijestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddObavijestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
