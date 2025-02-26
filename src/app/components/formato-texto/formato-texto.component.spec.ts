import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatoTextoComponent } from './formato-texto.component';

describe('FormatoTextoComponent', () => {
  let component: FormatoTextoComponent;
  let fixture: ComponentFixture<FormatoTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormatoTextoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatoTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
