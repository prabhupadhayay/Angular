import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageorderComponent } from './manageorder.component';

describe('ManageorderComponent', () => {
  let component: ManageorderComponent;
  let fixture: ComponentFixture<ManageorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
