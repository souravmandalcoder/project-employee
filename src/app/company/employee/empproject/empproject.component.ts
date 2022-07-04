import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-empproject',
  templateUrl: './empproject.component.html',
  styleUrls: ['./empproject.component.scss']
})
export class EmpprojectComponent implements OnInit {
  dataSource: any;
  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.getProjectDetails();
  }

  getProjectDetails() {
    this.empService.getEmployeeProject().subscribe(res => {

      console.log(res);
      this.dataSource = res;
      console.log(this.dataSource);

    })
  }

}
