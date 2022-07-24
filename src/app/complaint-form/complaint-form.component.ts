import { Component, OnInit } from '@angular/core';
import { ComplaintsService } from '../services/complaints.service';

@Component({
  selector: 'app-complaint-form',
  templateUrl: './complaint-form.component.html',
  styleUrls: ['./complaint-form.component.css'],
})
export class ComplaintFormComponent implements OnInit {
  constructor(private complaintsService: ComplaintsService) {}
  public selectedComplaint: Complaint = {
    timestamp: new Date(),
    email: '',
    fromSail: '',
    staffNumber: '',
    complaineeName: '',
    department: '',
    contactNumber: '',
    quarterType: '',
    blockNumber: '',
    unitNumber: '',
    newAllotment: '',
    quarterNumber: '',
    workNature: '',
    complaintDetails: '',
    status: '',
    pendingDays: '',
    attendingWorkId: '',
    contract: '',
    jobCardNumber: '',
    attendPeriodFrom: '',
    attendPeriodTo: '',
    remarks: '',
  };
  public name: any;
  ngOnInit(): void {}
  public complaintForm: any;
  submitForm() {
    this.selectedComplaint.quarterNumber = `${this.selectedComplaint.quarterType}-${this.selectedComplaint.blockNumber}/${this.selectedComplaint.unitNumber}`;
    this.complaintsService.createComplaint(this.selectedComplaint).subscribe(
      () => {
        console.log('Form submitted successfully');
      },
      (err) => console.log(err)
    );
  }
}
