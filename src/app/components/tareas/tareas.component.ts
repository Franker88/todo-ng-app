import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  toDos:Tarea[] = [];
  toDoName:string = "";
  constructor(){

  }
  ngOnInit(): void {
    
  }

  addTodo(){
    const tarea:Tarea = {
      name: this.toDoName,
      state: false,
    }
    this.toDos.push(tarea);
    this.toDoName = "";
  }

  eliminar(index:number){
    this.toDos.splice(index,1);
  }

  actualizarToDo(todo:Tarea,index:number){
    this.toDos[index].state = !todo.state;
  }
}
