import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./user/login/login.module').then((x) => x.LoginModule)
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./user/register/register.module').then((x) => x.RegisterModule)
      },
    ]
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'employeeproject',
        loadChildren: () =>
          import('./company/employee/empproject/empproject.module')
            .then((x) => x.EmpprojectModule)
      },
      {
        path: 'details',
        loadChildren: () =>
          import('./company/employee/details/details.module')
            .then((x) => x.DetailsModule)
      },
      {
        path: 'adminproject',
        loadChildren: () =>
          import('./company/admin/adminproject/adminproject.module')
            .then((x) => x.AdminprojectModule)
      },
      {
        path: 'viewemployee',
        loadChildren: () =>
          import('./company/admin/viewemp/viewemp.module')
            .then((x) => x.ViewempModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
