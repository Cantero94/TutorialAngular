import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-dado',
  imports: [],
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent {
  /* valor: number = Math.floor(Math.random() * 6) + 1; */
  // Esto es si usamos <app-dado valor="{{valor1}}"></app-dado>
  //@Input() valor: string = "";

  // Esto es si usamos <app-dado [valor]="valor1"></app-dado> o Property Binding
  @Input() valor: number=1;
}
