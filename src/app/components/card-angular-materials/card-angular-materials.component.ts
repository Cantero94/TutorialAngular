import { Component, Input, Renderer2, ElementRef } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-card-angular-materials',
  imports: [MatCardModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './card-angular-materials.component.html',
  styleUrl: './card-angular-materials.component.css'
})
export class CardAngularMaterialsComponent {
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';
  @Input() misrc: string = '';
  @Input() mialt: string = '';
  @Input() texto: string = '';
  @Input() avatar: string = '';

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    const avatarElements = this.el.nativeElement.querySelectorAll('.example-header-image');
    avatarElements.forEach((element: any) => {
      this.renderer.setStyle(element, 'background-image', `url(${this.avatar})`);
    });
  }
  

  @Input() likes: number = 0; // Cambiar a number para manejar el contador

  isLiked: boolean = false;
    toggleLike() {
    this.isLiked = !this.isLiked;
    this.likes += this.isLiked ? 1 : -1;
  }
}
