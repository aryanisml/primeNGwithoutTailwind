import { CommonModule } from '@angular/common';
import { Component, effect, EventEmitter, inject, Output, signal } from '@angular/core';
import { ReservationListService } from '../../services/reservation-list.service';
import { ReservationStateService } from '../../services/reservation-state.service';

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

  private listService = inject(ReservationListService);
  private state = inject(ReservationStateService);

  reservationDetail = signal<any | null>(null);
  constructor() {
    effect(() => {
      const id = this.state.selectedReservationId();
      if (id) {
        this.listService.getReservationDetail(id).subscribe(detail => {
          console.log(detail);
          this.reservationDetail.set(detail);
        });
      }
    });
  }
}