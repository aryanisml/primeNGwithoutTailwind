import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
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
export class ReservationListComponent implements OnInit {
  @Input({ required: true }) reservationAccordionList: ReservationAccordion[] = [];
  @Input() fixedWidth: string = '';
  
  isFullWidth = true;
  sectionWidth = '1015px';
  
  ngOnInit() {
    // Initialize with fixedWidth if provided, otherwise use default
    if (this.fixedWidth) {
      this.sectionWidth = this.fixedWidth;
    }
  }
  
  // Watch for changes to fixedWidth input
  ngOnChanges(changes: SimpleChanges) {
    if (changes['fixedWidth'] && changes['fixedWidth'].currentValue) {
      this.sectionWidth = changes['fixedWidth'].currentValue;
      if (this.sectionWidth === '1015px') {
        this.isFullWidth = true;
      }else {
        this.isFullWidth =false;
      }
    }
  }
}