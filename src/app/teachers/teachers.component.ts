import { Component, OnInit } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  color:string="";
  search:string="";
  users=['yassin','amin','mohamed'];
  clients=[
    { name:"yassin" ,age:"23",job:"programmer" ,contacts:
                                                       [{ phone:"123456",email:"yassinhtt@gmail.com"}]},
    { name:"amin" ,age:"23",job:"designer",contacts:
                                                       [{ phone:"124578",email:"amin@gmail.com"}]},

    { name:"mohamed" ,age:"23",job:"teacher",contacts:[{phone:"215454" ,email:"mohamed@gmail.com"}] },


  ]

 


}
