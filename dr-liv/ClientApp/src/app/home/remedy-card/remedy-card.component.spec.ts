import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemedyCardComponent } from './remedy-card.component';

describe('RemedyCardComponent', () => {
  let component: RemedyCardComponent;
  let fixture: ComponentFixture<RemedyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemedyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemedyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
