import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapChoserComponent } from './map-choser.component';

describe('MapChoserComponent', () => {
  let component: MapChoserComponent;
  let fixture: ComponentFixture<MapChoserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapChoserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapChoserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
