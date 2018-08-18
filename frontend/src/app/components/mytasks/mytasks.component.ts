import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MytasksListService } from '../../services/mytasks-list.service'

@Component({
  selector: 'app-mytasks',
  templateUrl: './mytasks.component.html',
  styleUrls: ['./mytasks.component.css']
})
export class MytasksComponent implements OnInit {
  
  tasksEntries: Array<any>;

  constructor(
    private mytasksListService: MytasksListService,
    private router : Router
  ) { }


  ngOnInit() {

    this.mytasksListService.tasksChange$.subscribe((tasks) => {
      this.tasksEntries = tasks
    })
    this.mytasksListService.getAll();


    // this.mytasksListService.getAll()
    //     .then(data => this.tasksEntries = data);
    //     .catch(error => {
    //     })

  }

  deleteOne(id) {
    this.mytasksListService.deleteOne(id);
    console.log('xxxxxxx',id)
  }


 }
  
