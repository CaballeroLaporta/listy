import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MytasksListService } from '../../services/mytasks-list.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modify-task',
  templateUrl: './modify-task.component.html',
  styleUrls: ['./modify-task.component.css']
})
export class ModifyTaskComponent implements OnInit {

  task: any;
  taskId: any;
  name: string;
  description: string;
  duedate: any;
  


  constructor(
    private mytasksListService: MytasksListService,
    private router : Router,
    private route : ActivatedRoute
  ){ }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.taskId = params.id;
    });
    this.task = this.mytasksListService.getOne(this.taskId)
      .then(data => this.task = data)
          .catch(error => {
          })
    }

  submitForm(form, id) {
    console.log(id);
    const data = {
      name: this.task.name,
      description: this.description,
      dueDate: this.duedate 
    }

    console.log(id, data)

    this.mytasksListService.updateOne(this.taskId, data)
      .then(note => {
        console.log(note)
        this.router.navigate(['/create'])
    })
      .catch(error => {
        console.log(error)
    })  
  }
}