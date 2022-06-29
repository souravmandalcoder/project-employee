import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-add-employee-dialog',
  templateUrl: './add-employee-dialog.component.html',
  styleUrls: ['./add-employee-dialog.component.scss']
})
export class AddEmployeeDialogComponent implements OnInit {

  dataArray = new Employee();

  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {

  }

  addEmployee() {
    console.log(this.dataArray)
    this.empService.registerEmployee(this.dataArray).subscribe(res => {
      console.log(res);
    })
  }

}
