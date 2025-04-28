import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationCardComponent } from '../reservation-card/reservation-card.component';
import { ReservationAccordion } from '../model';

interface TimeSlot {
  time: Date;
  reservations: any[];
  hasGapAfter: boolean;
  hasCurrentTime: boolean;
  formattedTime: string;
}

@Component({
  selector: 'app-reservation-accordion',
  imports: [
    CommonModule,
    ReservationCardComponent
  ],
  templateUrl: './reservation-accordion.component.html',
  styleUrl: './reservation-accordion.component.scss'
})
export class ReservationAccordionComponent {
  @Input({ required: true }) reservationAccordion!: ReservationAccordion;
  isOpen: boolean = false;
  timeSlots: any = [];
  currentTime: Date = new Date();;

  ngOnInit(): void {
    this.reservationAccordion.reservations.sort((a, b) => a.reservationTime.getTime() - b.reservationTime.getTime());
    this.createTimeSlots();
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    this.currentTime = new Date(utc + 5.5 * 60 * 60000);
  }

  createTimeSlots(): void {
    if (!this.reservationAccordion.reservations.length) return;
    const hourGroups = new Map<number, any[]>();
    this.reservationAccordion.reservations.forEach(reservation => {
      const date = new Date(reservation.reservationTime);
      const utc = date.getTime() + date.getTimezoneOffset() * 60000;
      const istDate = new Date(utc + 5.5 * 60 * 60000);
      const hour = istDate.getHours();
      if (!hourGroups.has(hour)) {
        hourGroups.set(hour, []);
      }
      hourGroups.get(hour)?.push({ ...reservation, istDate });
    });
    const sortedHours = Array.from(hourGroups.keys()).sort((a, b) => a - b);
    this.timeSlots = sortedHours.map((hour, index) => {
      const now = this.currentTime;
      const today = new Date(now);
      const slotStartTime = new Date(today);
      slotStartTime.setHours(hour, 0, 0, 0);
      const slotEndTime = new Date(slotStartTime);
      slotEndTime.setHours(slotEndTime.getHours() + 1);
      const hasGapAfter = index < sortedHours.length - 1 &&
        (sortedHours[index + 1] - hour > 1);
      const hasCurrentTime = now >= slotStartTime && now < slotEndTime;

      const formattedTime = slotStartTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });

      const sortedReservations = (hourGroups.get(hour) || []).sort(
        (a, b) => a.istDate.getTime() - b.istDate.getTime()
      );
      const firstHalf = sortedReservations.filter(r => r.istDate.getMinutes() <= 30);
      const secondHalf = sortedReservations.filter(r => r.istDate.getMinutes() > 30);

      return {
        time: slotStartTime,
        hasGapAfter,
        hasCurrentTime,
        formattedTime,
        firstHalf,
        secondHalf
      };
    });
  }

  formatTimeDisplay(date: Date): string {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  }

  isCurrentTimeInSlot(slot: TimeSlot): boolean {
    const now = this.currentTime;
    const slotStartTime = new Date(slot.time);
    const slotEndTime = new Date(slot.time);
    slotEndTime.setHours(slotEndTime.getHours() + 1);
    return now >= slotStartTime && now < slotEndTime;
  }

  getCurrentTimePosition(slot: TimeSlot): string {
    const now = this.currentTime;
    const slotStartTime = new Date(slot.time);
    const hourInMinutes = 60;
    const minutesPassed = (now.getHours() - slotStartTime.getHours()) * 60 + now.getMinutes() - slotStartTime.getMinutes();
    const percentage = (minutesPassed / hourInMinutes) * 100;
    return `${Math.min(Math.max(0, percentage), 100)}%`;
  }

  toggleAccordion(): void {
    this.isOpen = !this.isOpen;
  }
}
