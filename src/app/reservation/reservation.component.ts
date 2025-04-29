import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { ReservationAccordion } from '../model';
import { RESERVATION_ACCORDION_LIST } from '../reservation-list.const';


@Component({
  selector: 'app-reservation',
  imports: [
    ReservationListComponent,
    CommonModule
  ],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss'
})
export class ReservationComponent {
  reservationAccordionList: ReservationAccordion[] = RESERVATION_ACCORDION_LIST;
   @Input() fixedWidth = '1015px';
}
