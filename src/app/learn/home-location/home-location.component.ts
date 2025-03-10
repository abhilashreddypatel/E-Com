import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../interfaces/HousingLocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation?.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        *ngIf="housingLocation?.photo"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
      <p class="listing-location">
        {{ housingLocation?.city }}, {{ housingLocation?.state }}
      </p>
      <a [routerLink]="['/details', housingLocation.id]">Details</a>
    </section>
  `,
  styleUrls: ['./home-location.component.css'],
})
export class HomeLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
