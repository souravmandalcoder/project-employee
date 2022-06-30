import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-update-employee-dialog',
  templateUrl: './update-employee-dialog.component.html',
  styleUrls: ['./update-employee-dialog.component.scss']
})
export class UpdateEmployeeDialogComponent implements OnInit {

  dataArray = new Employee();

  constructor(private empService: EmployeeService, private dialogRef: MatDialogRef<UpdateEmployeeDialogComponent>) { }

  ngOnInit(): void {
  }

  updateRecords() {
    console.log(this.dataArray)

    this.empService.updateRecords(this.dataArray).subscribe(res => {
      // this.getEmployee();
      this.dialogRef.close();
    })

  }

}
