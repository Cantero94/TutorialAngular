import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  fechaCreacion: string;
  fechaEjecucion?: string | null;
  fechaFinalizacion?: string | null;
  trabajador?: string | null;
}

@Component({
  selector: 'app-gestor-tareas',
  standalone: true,
  imports: [CommonModule, FormsModule, CdkDropListGroup, CdkDropList, CdkDrag],
  templateUrl: './gestor-tareas.component.html',
  styleUrl: './gestor-tareas.component.css'
})
export class GestorTareasComponent implements OnInit {
  tituloTarea: string = '';
  descripcionTarea: string = '';
  
  tareas = {
    notas: [] as Tarea[],
    enEjecucion: [] as Tarea[],
    finalizadas: [] as Tarea[]
  };

  constructor() {}

  ngOnInit(): void {
    this.cargarTareas();
  }

  agregarTarea(): void {
    if (!this.tituloTarea.trim() || !this.descripcionTarea.trim()) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const nuevaTarea: Tarea = {
      id: Date.now(),
      titulo: this.tituloTarea,
      descripcion: this.descripcionTarea,
      fechaCreacion: new Date().toLocaleString()
    };

    this.tareas.notas.push(nuevaTarea);
    this.guardarTareas();
    this.tituloTarea = '';
    this.descripcionTarea = '';
  }

  moverAEjecucion(id: number): void {
    const tareaIndex = this.tareas.notas.findIndex(t => t.id === id);
    const trabajador = prompt("Nombre del trabajador:");
    if (tareaIndex >= 0 && trabajador) {
      const tarea = this.tareas.notas.splice(tareaIndex, 1)[0];
      tarea.fechaEjecucion = new Date().toLocaleString();
      tarea.trabajador = trabajador;
      this.tareas.enEjecucion.push(tarea);
      this.guardarTareas();
    }
  }

  moverAFinalizadas(id: number): void {
    const tareaIndex = this.tareas.enEjecucion.findIndex(t => t.id === id);
    if (tareaIndex >= 0) {
      const tarea = this.tareas.enEjecucion.splice(tareaIndex, 1)[0];
      tarea.fechaFinalizacion = new Date().toLocaleString();
      this.tareas.finalizadas.push(tarea);
      this.guardarTareas();
    }
  }

  eliminarTarea(id: number, estado: string): void {
    const lista = (this.tareas as any)[estado];
    const tareaIndex = lista.findIndex((t: Tarea) => t.id === id);
    if (tareaIndex >= 0) {
      lista.splice(tareaIndex, 1);
      this.guardarTareas();
    }
  }

  guardarTareas(): void {
    localStorage.setItem("tareas", JSON.stringify(this.tareas));
  }

  cargarTareas(): void {
    const datosGuardados = JSON.parse(localStorage.getItem("tareas") || '{}');
    if (datosGuardados) {
      this.tareas.notas = datosGuardados.notas || [];
      this.tareas.enEjecucion = datosGuardados.enEjecucion || [];
      this.tareas.finalizadas = datosGuardados.finalizadas || [];
    }
  }

  vaciarCache(): void {
    if (confirm("¿Estás seguro de que deseas vaciar todas las tareas?")) {
      localStorage.clear();
      this.tareas = { notas: [], enEjecucion: [], finalizadas: [] };
    }
  }

  exportarTareas(): void {
    const csvData = "\uFEFF" + this.convertirAJSONaCSV(this.tareas);
    const blob = new Blob([csvData], { type: "text/csv" });
    const enlaceDescarga = document.createElement("a");
    enlaceDescarga.href = URL.createObjectURL(blob);
    enlaceDescarga.download = "tareas.csv";
    enlaceDescarga.click();
  }

  convertirAJSONaCSV(data: any): string {
    const encabezados = ["ID", "Título", "Descripción", "Creado el", "En ejecución desde", "Finalizado el", "Trabajador"];
    const filas = [encabezados.join(";")];
    [...data.notas, ...data.enEjecucion, ...data.finalizadas].forEach(tarea => {
      filas.push([tarea.id, `"${tarea.titulo}"`, `"${tarea.descripcion}"`, tarea.fechaCreacion, tarea.fechaEjecucion || "", tarea.fechaFinalizacion || "", tarea.trabajador || ""].join(";"));
    });
    return filas.join("\n");
  }

  drop(event: CdkDragDrop<Tarea[]>) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
      }
    }
}
