import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-semaforo',
  imports: [CommonModule],
  templateUrl: './semaforo.component.html',
  styleUrl: './semaforo.component.css'
})
export class SemaforoComponent {
  color: string = 'rojo'; // Empezamos en rojo
  colores: string[] = ['rojo', 'amarillo', 'verde'];
  indice: number = 0;
  intervalo: any;

  ngOnInit() {
    this.iniciarSemaforo();
  }

  iniciarSemaforo() {
    if (this.intervalo) clearInterval(this.intervalo); // Detiene un intervalo si ya estaba corriendo

    this.intervalo = setInterval(() => {
      this.indice = (this.indice + 1) % this.colores.length; // Calcula el indice usando el resto, indice 0 -> resto 1 (Amarillo), indice 1 -> resto 2 (Verde), indice 2 -> resto 0 (Rojo)
      this.color = this.colores[this.indice];
    }, 3000);
  }
}
