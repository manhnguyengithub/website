import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoanghaComponent } from './hoangha.component';

describe('HoanghaComponent', () => {
  let component: HoanghaComponent;
  let fixture: ComponentFixture<HoanghaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoanghaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoanghaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
