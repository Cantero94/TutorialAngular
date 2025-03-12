import { Component } from '@angular/core';
import { MouseOverColorDirective } from './directive/mouse-over-color.directive';

@Component({
  selector: 'app-mouse-over-color',
  imports: [ MouseOverColorDirective],
  templateUrl: './mouse-over-color.component.html',
  styleUrl: './mouse-over-color.component.css'
})
export class MouseOverColorComponent {

}
