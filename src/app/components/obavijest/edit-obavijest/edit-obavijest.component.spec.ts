import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditObavijestComponent } from './edit-obavijest.component';

describe('EditObavijestComponent', () => {
  let component: EditObavijestComponent;
  let fixture: ComponentFixture<EditObavijestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditObavijestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditObavijestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
