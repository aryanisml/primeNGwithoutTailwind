import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RESERVATION_ACCORDION_LIST } from '../app/reservation-list.const';

@Injectable({ providedIn: 'root' })
export class ReservationListService {
  private http = inject(HttpClient);

  getReservations(date: string, location: string): Observable<any[]> {
  //  return this.http.get<Reservation[]>('/api/reservations', { params: { date, location } });
  return of(RESERVATION_ACCORDION_LIST);
  }

  getReservationDetail(idDetail: string): Observable<any> {
    const b= RESERVATION_ACCORDION_LIST[0].reservations.find((data)=> (data?.id)?.toString()===(idDetail).toString());
    return of(b);

  }
}
