import { Component, OnInit } from '@angular/core';
import { EmployeeProjectDetials } from 'src/app/models/employee-project-detials';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-empproject',
  templateUrl: './empproject.component.html',
  styleUrls: ['./empproject.component.scss']
})
export class EmpprojectComponent implements OnInit {

  projects: EmployeeProjectDetials[] = [];
  dataSource: any;
  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.getProjectDetails();
  }

  getProjectDetails() {
    this.empService.getEmployeeProject().subscribe(res => {

      console.log(res);
      this.projects = res;
      console.log(this.projects);

    })
  }

}
