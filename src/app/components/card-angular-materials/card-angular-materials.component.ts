import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-card-angular-materials',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card-angular-materials.component.html',
  styleUrl: './card-angular-materials.component.css'
})
export class CardAngularMaterialsComponent {
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';
  @Input() misrc: string = '';
  @Input() mialt: string = '';
  @Input() texto: string = '';

}
