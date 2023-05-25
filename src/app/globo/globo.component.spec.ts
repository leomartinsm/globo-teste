import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GloboComponent } from './globo.component';

describe('GloboComponent', () => {
  let component: GloboComponent;
  let fixture: ComponentFixture<GloboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GloboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GloboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
