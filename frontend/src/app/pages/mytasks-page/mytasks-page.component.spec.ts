import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytasksPageComponent } from './mytasks-page.component';

describe('MytasksPageComponent', () => {
  let component: MytasksPageComponent;
  let fixture: ComponentFixture<MytasksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytasksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytasksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
