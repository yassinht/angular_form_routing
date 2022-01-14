import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  {path:"teacher" ,component:TeachersComponent},
  {path:"student",component:StudentComponent},
  {path:"home",component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
