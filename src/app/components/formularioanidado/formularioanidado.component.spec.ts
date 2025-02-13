import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioanidadoComponent } from './formularioanidado.component';

describe('FormularioanidadoComponent', () => {
  let component: FormularioanidadoComponent;
  let fixture: ComponentFixture<FormularioanidadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioanidadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioanidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
