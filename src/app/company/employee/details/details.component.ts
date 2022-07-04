import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateEmployeeDialogComponent } from 'src/app/dialogs/update-employee-dialog/update-employee-dialog.component';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {


  displayedColumns: string[] = ['id', 'name', 'lastname', 'department', 'action'];
  dataSource: any;
  employees: Employee[] = [];
  dataArray = new Employee();

  constructor(public dialog: MatDialog, private empService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee() {
    this.empService.getEmployee().subscribe(res => {
      this.employees = res;
      console.log(res);

      this.dataSource = res;
    })
  }


  updateDialog(employee: Employee) {
    const dialogRef = this.dialog.open(UpdateEmployeeDialogComponent);
    dialogRef.componentInstance.dataArray = employee;
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getEmployee();
    });
  }


}
