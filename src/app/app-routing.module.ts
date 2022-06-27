import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { EmployeeLayoutComponent } from './layouts/employee-layout/employee-layout.component';
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
    component: AdminLayoutComponent,
    children: [
      {

        path: 'employee',
        loadChildren: () =>
          import('./company/admin/employee/employee.module')
            .then((x) => x.EmployeeModule)

      },
      {
        path: 'adminproject',
        loadChildren: () =>
          import('./company/admin/adminproject/adminproject.module')
            .then((x) => x.AdminprojectModule)
      },

    ]
  },
  {
    path: '',
    component: EmployeeLayoutComponent,
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
