import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-reservation-dashboard',
  imports: [CommonModule],
  templateUrl: './reservation-dashboard.component.html',
  styleUrl: './reservation-dashboard.component.scss'
})
export class ReservationDashboardComponent {
  @Output() closeFired = new EventEmitter<boolean>();
  isFired = false;
  records = [
    {
      data: [
        { number: '32', label: 'Total Reservation' },
      ]
    },
    {
      data: [
        { number: '12', label: 'Unassigned Reservation' }
      ]
    },
    {
      data: [
        { number: '43', label: 'Available Fleet' }
      ]
    },
    {
      data: [
        { number: '15', label: 'Pick-Ups today' }
      ]
    },
    {
      data: [
        { number: '20', label: 'Drop-Offs today' }
      ]
    },
    {
      data: [
        { number: '33', label: 'Revenue for the day' }
      ]
    },
    {
      data: [
        { number: '18', label: 'Total Due-Ins' }
      ]
    },
    {
      data: [
        { number: '11', label: 'Confirmed Due-Ins' }
      ]
    },
    {
      data: [
        { number: '07', label: 'Total Rewrites' }
      ]
    },
    {
      data: [
        { number: '03', label: 'Immediate Reservations' }
      ]
    },
    {
      data: [
        { number: '04', label: 'Priority Reservations' }
      ]
    },
  ];
    close(){
this.isFired = !this.isFired;
this.closeFired.emit(this.isFired);
  }
}