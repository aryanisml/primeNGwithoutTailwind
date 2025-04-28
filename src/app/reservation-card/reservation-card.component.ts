// reservation-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tooltip } from 'primeng/tooltip';

@Component({
  selector: 'app-reservation-card',
  standalone: true,
  imports: [CommonModule, Tooltip],
  templateUrl: './reservation-card.component.html',
  styleUrls: ['./reservation-card.component.scss'],
})
export class ReservationCardComponent {
  @Input() name: string = '';
  @Input() unitNumber: string = '';
  @Input() towNumber: string = '';
  @Input() vehicleType: string = '';
  @Input() tripType: string = '';
  @Input() customerType: string = '';
  @Input() hasPhone: boolean = false;
  @Input() hasFavorite: boolean = false;
  @Input() hasWarning: boolean = false;
  @Input() accentColor: 'green' | 'red' | 'blue' | 'gray' = 'green';
  @Input() assigned : boolean = true;
  
  isSelected: boolean = false;
  getAccentColor(): string {
    const colorMap = {
      'green': 'bg-green-600',
      'red': 'bg-red-600',
      'blue': 'bg-blue-600',
      'gray': 'bg-gray-400'
    };
    return colorMap[this.accentColor];
  }
  toggleSelection(): void {
    this.isSelected = !this.isSelected;
  }
}