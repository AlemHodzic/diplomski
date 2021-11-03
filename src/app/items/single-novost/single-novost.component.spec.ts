import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNovostComponent } from './single-novost.component';

describe('SingleNovostComponent', () => {
  let component: SingleNovostComponent;
  let fixture: ComponentFixture<SingleNovostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleNovostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleNovostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
