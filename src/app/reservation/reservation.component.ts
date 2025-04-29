import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { ReservationAccordion } from '../model';
import { RESERVATION_ACCORDION_LIST } from '../reservation-list.const';
import { ReservationListService } from '../../services/reservation-list.service';
import { ReservationStateService } from '../../services/reservation-state.service';


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
  private listService = inject(ReservationListService);
  private stateService = inject(ReservationStateService);
  reservationAccordionList: ReservationAccordion[] = RESERVATION_ACCORDION_LIST;
   @Input() fixedWidth = '1015px';

   ngOnInit(): void {
    const today = new Date().toISOString().split('T')[0];
    const location = 'Mumbai'; // replace with selected location

    this.listService.getReservations(today, location).subscribe(data => {
      this.stateService.setReservations(data);
    });
  }
}
