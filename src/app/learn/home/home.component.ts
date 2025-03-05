import { Component, inject, OnInit } from '@angular/core';
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
        <input type="text" placeholder="Filter by city" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of filteredLocataionList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  housingLocationList: HousingLocation[] = [];

  filteredLocataionList: HousingLocation[] = [];

  private housingService = inject(HousingService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.housingService
      .getAllHousingLocations()
      .then((data: HousingLocation[]) => {
        this.housingLocationList = data;
        this.filteredLocataionList = this.housingLocationList;
      });
  }

  filterResults(value: string) {
    if (!value) {
      this.filteredLocataionList = this.housingLocationList;
      return;
    }

    this.filteredLocataionList = this.housingLocationList.filter(
      (housingloation) => {
        let n = 0;
        setTimeout(() => {
          console.log(housingloation.city);
        }, 1000);
        housingloation?.city.toLowerCase().includes(value.toLowerCase());
      }
    );
  }
}
