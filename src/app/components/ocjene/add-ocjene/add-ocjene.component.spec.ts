import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOcjeneComponent } from './add-ocjene.component';

describe('AddOcjeneComponent', () => {
  let component: AddOcjeneComponent;
  let fixture: ComponentFixture<AddOcjeneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOcjeneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOcjeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
