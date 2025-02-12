import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-progressbar',
  imports: [],
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.css'
})
export class ProgressbarComponent {
  @Input() value: number = 0; // Valor actual del progreso
  @Input() max: number = 100; // Valor máximo del progreso
}
