import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeDialogComponent } from 'src/app/dialogs/add-employee-dialog/add-employee-dialog.component';
import { UpdateEmployeeDialogComponent } from 'src/app/dialogs/update-employee-dialog/update-employee-dialog.component';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';





@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  displayedColumns: string[] = ['name', 'lastname', 'department', 'action'];
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

  deleteEmployee(id: number) {
    this.empService.deleteEmployee(id).subscribe(res => {
      this.getEmployee();
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddEmployeeDialogComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
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
