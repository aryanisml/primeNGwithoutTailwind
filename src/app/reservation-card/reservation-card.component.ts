// reservation-card.component.ts
import { Component, Input, Output, EventEmitter, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tooltip } from 'primeng/tooltip';
import { ReservationStateService } from '../../services/reservation-state.service';

@Component({
  selector: 'app-reservation-card',
  standalone: true,
  imports: [CommonModule, Tooltip],
  templateUrl: './reservation-card.component.html',
  styleUrls: ['./reservation-card.component.scss'],
})
export class ReservationCardComponent {
  @Input() id : number=0;
  @Input() name: string = '';
  @Input() unitNumber: string = '';
  @Input() towNumber: string = '';
  @Input() vehicleType: string = '';
  @Input() tripType: string = '';
  @Input() customerType: string = '';
  @Input() hasPhone: boolean = false;
  @Input() hasFavorite: boolean = false;
  @Input() hasWarning: boolean = false;
  @Input() accentColor: 'green' | 'blue' | 'orange' | 'gray' = 'green';
  @Input() assigned: boolean = true;
  @Input() isFullWidth: boolean= false;
  
  // Optional event emitters for parent components to react to selections
  @Output() cardSelected = new EventEmitter<void>();
  @Output() unitSelected = new EventEmitter<void>();
  
  isSelected: boolean = false;
  isFixedWidth :boolean = false;
  
  getAccentColor(): string {
    return `bg-${this.accentColor}`;
  }
  
  toggleSelection(): void {
    this.isSelected = !this.isSelected;
    this.cardSelected.emit();
    this.selectReservation();
  }
  
  toggleUnitSelection(): void {
    // This won't trigger the parent's click handler now
    this.isFixedWidth =!this.isFixedWidth;
    this.unitSelected.emit();
  }
  private state = inject(ReservationStateService);
  selectReservation() {
    this.state.selectReservation(this.id);
  }
}