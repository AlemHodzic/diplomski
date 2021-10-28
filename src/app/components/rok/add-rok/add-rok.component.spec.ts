import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRokComponent } from './add-rok.component';

describe('AddRokComponent', () => {
  let component: AddRokComponent;
  let fixture: ComponentFixture<AddRokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
