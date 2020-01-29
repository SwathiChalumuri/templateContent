import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatereuseComponent } from './templatereuse.component';

describe('TemplatereuseComponent', () => {
  let component: TemplatereuseComponent;
  let fixture: ComponentFixture<TemplatereuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatereuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatereuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
