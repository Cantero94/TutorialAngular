import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorTareasComponent } from './gestor-tareas.component';

describe('GestorTareasComponent', () => {
  let component: GestorTareasComponent;
  let fixture: ComponentFixture<GestorTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestorTareasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
