import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseOverColorComponent } from './mouse-over-color.component';

describe('MouseOverColorComponent', () => {
  let component: MouseOverColorComponent;
  let fixture: ComponentFixture<MouseOverColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MouseOverColorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouseOverColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
