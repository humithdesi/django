import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiphibanghieuComponent } from './chiphibanghieu.component';

describe('ChiphibanghieuComponent', () => {
  let component: ChiphibanghieuComponent;
  let fixture: ComponentFixture<ChiphibanghieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiphibanghieuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChiphibanghieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
