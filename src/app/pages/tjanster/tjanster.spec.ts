import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tjanster } from './tjanster';

describe('Tjanster', () => {
  let component: Tjanster;
  let fixture: ComponentFixture<Tjanster>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tjanster]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tjanster);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
