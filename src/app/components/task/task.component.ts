import { Component, Input, OnInit } from '@angular/core';
import { Task } from "../../interfaces/task";
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task = { name: '',status: false };

  buttonDisabled:boolean = true;
  checkBoxDisabled:boolean = false;
  detailsHidden:boolean = true;

  constructor( ) { }

  ngOnInit(): void {
  }

  toggleCompleteButton() {
    this.buttonDisabled = !this.buttonDisabled;
  }

  toggleTaskDetails() {
    this.detailsHidden = !this.detailsHidden;
  }

  completeTask() {
    this.task.status = true;
    this.task.complete_at = new Date();

    this.buttonDisabled = true;
    this.checkBoxDisabled = true;

  }

}
