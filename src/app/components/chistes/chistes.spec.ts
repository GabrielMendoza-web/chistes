import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chistes } from './chistes';

describe('Chistes', () => {
  let component: Chistes;
  let fixture: ComponentFixture<Chistes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chistes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chistes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
