import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOcjeneComponent } from './edit-ocjene.component';

describe('EditOcjeneComponent', () => {
  let component: EditOcjeneComponent;
  let fixture: ComponentFixture<EditOcjeneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOcjeneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOcjeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
