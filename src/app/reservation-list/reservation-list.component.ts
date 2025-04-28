import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationAccordionComponent } from '../reservation-accordion/reservation-accordion.component';
import { ReservationAccordion } from '../model';


@Component({
  selector: 'app-reservation-list',
  imports: [
    ReservationAccordionComponent,
    CommonModule
  ],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.scss'
})
export class ReservationListComponent {
  @Input({ required: true }) reservationAccordionList: ReservationAccordion[] = [];
}
