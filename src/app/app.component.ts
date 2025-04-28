
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationDashboardComponent } from './reservation-dashboard/reservation-dashboard.component';
import { ReservationComponent } from './reservation/reservation.component';

// interface WidgetResponse {
//   ssoid: string,
//   widgets: string[]
// }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReservationComponent,
    ReservationDashboardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
 // private readonly env = inject(ConfigService).getEnvironment();
  // authServerUrl = this.env.auth_server_base_url || "Not Used";
  // backendServerUrl = this.env.backend_url;

  // ssoid = '';
  // widgets: string[] = [];

  constructor() {
    // this.http.get<WidgetResponse>(this.backendServerUrl + "/widget/list")
    //   .subscribe(data => {
    //     this.ssoid = data.ssoid;
    //     this.widgets = data.widgets;
    //   });
  };
}
