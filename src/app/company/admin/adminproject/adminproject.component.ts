import { Component, OnInit } from '@angular/core';
import { Adminproject } from 'src/app/models/adminproject';
import { EmployeeService } from 'src/app/services/employee/employee.service';



@Component({
  selector: 'app-adminproject',
  templateUrl: './adminproject.component.html',
  styleUrls: ['./adminproject.component.scss']
})
export class AdminprojectComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'project', 'status'];
  dataSource: any;

  adminproject: Adminproject[] = [];

  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.getAdminProject()
  }

  getAdminProject() {
    this.empService.getAdminProject().subscribe(res => {

      console.log(res);
      this.dataSource = res;
    })
  }

}
