export interface Reservation {
  name: string;
  unitNumber: string;
  towNumber: string;
  vehicleType: string;
  tripType: string;
  customerType: string;
  hasPhone: boolean;
  hasFavorite: boolean;
  hasWarning: boolean;
  accentColor: 'green' | 'red' | 'blue' | 'gray';
  assigned: boolean;
  reservationTime: Date;
}

export interface ReservationAccordion {
  groupLabel: string;
  title: string;
  identifier: string;
  reservations: Reservation[];
}