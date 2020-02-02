import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceProDetailComponent } from './experience-pro-detail.component';

describe('ExperienceProDetailComponent', () => {
  let component: ExperienceProDetailComponent;
  let fixture: ComponentFixture<ExperienceProDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceProDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceProDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
