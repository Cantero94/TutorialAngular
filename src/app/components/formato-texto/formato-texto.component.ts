import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formato-texto',
  imports: [FormsModule, CommonModule ],
  templateUrl: './formato-texto.component.html',
  styleUrl: './formato-texto.component.css'
})
export class FormatoTextoComponent {
fontColor: any;
fontSize: any;
}
