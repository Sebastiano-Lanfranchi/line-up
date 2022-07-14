import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentChoserComponent } from './agent-choser.component';

describe('AgentChoserComponent', () => {
  let component: AgentChoserComponent;
  let fixture: ComponentFixture<AgentChoserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentChoserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentChoserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
