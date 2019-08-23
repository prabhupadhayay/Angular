import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsDetailsComponent } from './clients-details.component';

describe('ClientsDetailsComponent', () => {
  let component: ClientsDetailsComponent;
  let fixture: ComponentFixture<ClientsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
