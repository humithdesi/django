import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiphiinbatComponent } from './chiphiinbat.component';

describe('ChiphiinbatComponent', () => {
  let component: ChiphiinbatComponent;
  let fixture: ComponentFixture<ChiphiinbatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiphiinbatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChiphiinbatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
