import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formgroupreactivo',
  imports: [ReactiveFormsModule],
  templateUrl: './formgroupreactivo.component.html',
  styleUrl: './formgroupreactivo.component.css'
})
export class FormgroupreactivoComponent {
  datos='';

  formularioContacto = new FormGroup({
    nombre: new FormControl(''),
    mail: new FormControl(''),
    mensaje: new FormControl('')
  });

  submit() {
    this.datos = `Nombre=${this.formularioContacto.value.nombre}
                Mail=${this.formularioContacto.value.mail}
                Mensaje=${this.formularioContacto.value.mensaje}
                `;
  }
}
