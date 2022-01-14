import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  search:string="";

  exp=[
    {user:'yassin',email:'yass@gmail',password:'azerty' } 
  ]
  users:any;

  register(data:any){
    this.users=(data)
    this.exp.push(this.users)

    
  }


}
