import { Component, OnInit ,Output,EventEmitter, Input} from '@angular/core';
import { Task } from "../../interfaces/task";
@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.scss']
})
export class TaskEditorComponent implements OnInit {
  @Output() addTask = new EventEmitter<Task>();
  @Input() show:boolean = false;
  errorMsg:string ='';
  taskName:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  updateTaskName(name:string) {
    this.taskName = name;
    this.errorMsg = '';
  }
  newTask() {
    if(!this.taskName){
      this.errorMsg = 'Task name is required!';
      return;
    }

    let task:Task = {
      id: 4,
      name: this.taskName,
      status:false,
      create_at: new Date()
    };

    this.addTask.emit(task);
    this.taskName = '';

  }

}
