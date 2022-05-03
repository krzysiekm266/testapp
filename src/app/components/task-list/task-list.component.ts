import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from "../../interfaces/task";
import { TASKS } from '../../interfaces/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  providers:[TaskService]
})
export class TaskListComponent implements OnInit {
  tasks:Task[] = TASKS;

  constructor(private http:TaskService) { }

  ngOnInit(): void {
  }

}
