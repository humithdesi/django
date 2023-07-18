import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UoctinhchiphiComponent } from './uoctinhchiphi.component';

describe('UoctinhchiphiComponent', () => {
  let component: UoctinhchiphiComponent;
  let fixture: ComponentFixture<UoctinhchiphiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UoctinhchiphiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UoctinhchiphiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
