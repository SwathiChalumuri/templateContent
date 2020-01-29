import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempOutletComponent } from './temp-outlet.component';

describe('TempOutletComponent', () => {
  let component: TempOutletComponent;
  let fixture: ComponentFixture<TempOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
