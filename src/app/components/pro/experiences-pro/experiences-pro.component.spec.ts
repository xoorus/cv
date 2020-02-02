import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesProComponent } from './experiences-pro.component';

describe('ExperiencesProComponent', () => {
  let component: ExperiencesProComponent;
  let fixture: ComponentFixture<ExperiencesProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperiencesProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencesProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
