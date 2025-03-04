import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLocationComponent } from '../home-location/home-location.component';
import { HousingLocation } from '../interfaces/HousingLocation';
import { HousingService } from '../housing.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [CommonModule, HomeLocationComponent],
  standalone: true,
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocationList!: HousingLocation[];

  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private housingservice: HousingService) {
    this.housingLocationList = housingservice.getAllHousingLocations();
  }
}
