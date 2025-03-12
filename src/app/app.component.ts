import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DadoComponent } from "./components/dado/dado.component";
import { CronometroComponent } from "./components/cronometro/cronometro.component";
import { SelectornumericoComponent } from './components/selectornumerico/selectornumerico.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { FormularioreactivoComponent } from "./components/formularioreactivo/formularioreactivo.component";
import { FormgroupreactivoComponent } from './components/formgroupreactivo/formgroupreactivo.component';
import { FormulariocheckboxComponent } from "./components/formulariocheckbox/formulariocheckbox.component";
import { FormularioanidadoComponent } from "./components/formularioanidado/formularioanidado.component";
import { CardAngularMaterialsComponent } from "./components/card-angular-materials/card-angular-materials.component";
import { SemaforoComponent } from "./components/semaforo/semaforo.component";
import { FormatoTextoComponent } from "./components/formato-texto/formato-texto.component";
import { LoginComponent } from "./components/login/login.component";
import { MouseOverColorComponent } from "./components/mouse-over-color/mouse-over-color.component";
import { GestorTareasComponent } from "./components/gestor-tareas/gestor-tareas.component";
import { DragAndDropAMaterialsComponent } from "./components/drag-and-drop-amaterials/drag-and-drop-amaterials.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DadoComponent, CronometroComponent, SelectornumericoComponent, TablaComponent, ProgressbarComponent, FormularioreactivoComponent, FormgroupreactivoComponent, FormulariocheckboxComponent, FormularioanidadoComponent, CardAngularMaterialsComponent, SemaforoComponent, FormatoTextoComponent, LoginComponent, MouseOverColorComponent, GestorTareasComponent, DragAndDropAMaterialsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  /*******************************************************************/
  /*******************************************************************/
  /* Prueba de la Componente Dado */
  /*******************************************************************/
  /*******************************************************************/
  valor1: number = this.retornarAleatorio()
  valor2: number = this.retornarAleatorio()
  valor3: number = this.retornarAleatorio()
  resultado: string = "";

  retornarAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
  }

  tirar() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
    let suma: number = this.valor1 + this.valor2 + this.valor3;
    if (suma > 9){
    // if (this.valor1 == this.valor2 && this.valor1 == this.valor3)
      this.resultado = 'Ganó';
      this.increaseProgress();
    }
    else
      this.resultado = 'Perdió';
  }


  /*******************************************************************/
  /*******************************************************************/
  /* Prueba de la Componente Cronometro */
  /*******************************************************************/
  /*******************************************************************/
  mensaje = '';

  actualizar(t: number) {
    this.mensaje = t + ' (se actualiza cada 10 segundos)';
  }

  /*******************************************************************/
  /*******************************************************************/
  /* Prueba de la Componente Selector Numérico*/
  /*******************************************************************/
  /*******************************************************************/

  @ViewChild('selector1') selector1!: SelectornumericoComponent;
  @ViewChild('selector2') selector2!: SelectornumericoComponent;

  fijarSelector1(valor:number) {
    this.selector1.fijar(valor);
  }

  fijarSelector2(valor:number) {
    this.selector2.fijar(valor);
  }

  /*******************************************************************/
  /*******************************************************************/
  /* Prueba de la Componente ProgressBar */
  /*******************************************************************/
  /*******************************************************************/
  currentProgress = 0;
  increaseProgress() {
    if (this.currentProgress < 100) {
      this.currentProgress += 10;
    } else {
      this.currentProgress = 0;
    }
  }
}