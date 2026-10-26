import { ComponentFixture, TestBed } from '@angular/core/testing';
import { POS } from './pos';

describe('POS', () => {
  let component: POS;
  let fixture: ComponentFixture<POS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [POS],
    }).compileComponents();

    fixture = TestBed.createComponent(POS);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
