import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryZoneComponent } from './memory-zone.component';

describe('MemoryZoneComponent', () => {
  let component: MemoryZoneComponent;
  let fixture: ComponentFixture<MemoryZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoryZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoryZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
