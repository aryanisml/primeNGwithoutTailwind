import { Injectable, signal } from '@angular/core';
@Injectable({ providedIn: 'root' })

export class ReservationStateService {
  private _reservations = signal<any[]>([]);
  private _selectedReservationId = signal<string | null>(null);

  readonly reservations = this._reservations.asReadonly();
  readonly selectedReservationId = this._selectedReservationId.asReadonly();

  setReservations(data: any[]) {
    this._reservations.set(data);
  }

  selectReservation(id: string|number) {
    this._selectedReservationId.set(id as any);
  }

  clearSelection() {
    this._selectedReservationId.set(null);
  }
}
