import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewempComponent } from './viewemp.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: ViewempComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ViewempRoutingModule { }
