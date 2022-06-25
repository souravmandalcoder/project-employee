import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpprojectComponent } from './empproject.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: EmpprojectComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EmpprojectRoutingModule { }
