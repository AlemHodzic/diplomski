import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRokComponent } from './edit-rok.component';

describe('EditRokComponent', () => {
  let component: EditRokComponent;
  let fixture: ComponentFixture<EditRokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
