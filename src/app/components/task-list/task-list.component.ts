import { TaskService } from './../../services/task.service';
import { Component, Input, OnInit } from '@angular/core';
import { Task } from "../../interfaces/task";
import { TASKS } from '../../interfaces/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  providers:[TaskService]
})
export class TaskListComponent implements OnInit {
  tasks:Task[] = [];
  @Input() task:Task = {name:'',status:false};
  showTaskEditor:boolean = false;
  constructor(private http:TaskService) { }

  ngOnInit(): void {
    this.tasks = TASKS;
  }
  toggleTaskEditor() {
    this.showTaskEditor = !this.showTaskEditor;
  }
  addNewTask(task:Task) {
   this.task = task;
   this.tasks.push(this.task);

  }
}
