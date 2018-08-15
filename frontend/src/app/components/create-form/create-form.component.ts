import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MytasksListService } from '../../services/mytasks-list.service'

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  name: string;
  description: string;
  duedate: Date;

  constructor(  
    private mytasksListService: MytasksListService,
    private router : Router) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.mytasksListService.creatOne({
        name: this.name,
        description: this.description,
        dueDate: this.duedate
    })
    .then(()=> {
        this.router.navigate(['/'])
    })
    .catch(error => {
        console.log(error)
    })  
  }

}

