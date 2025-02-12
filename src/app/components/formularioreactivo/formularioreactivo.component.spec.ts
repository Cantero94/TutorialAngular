import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioreactivoComponent } from './formularioreactivo.component';

describe('FormularioreactivoComponent', () => {
  let component: FormularioreactivoComponent;
  let fixture: ComponentFixture<FormularioreactivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioreactivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioreactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
