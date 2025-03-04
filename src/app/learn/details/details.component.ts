import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../interfaces/HousingLocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div>
      <h1>Housing location id is : {{ HousingLocation?.id }}</h1>
      <h1>Housing location Name is : {{ HousingLocation?.name }}</h1>

      <h1>Housing location City is : {{ HousingLocation?.city }}</h1>

      <h1>Housing location Photo is :</h1>
      <img src="{{ HousingLocation?.photo }}" alt="" />

      <h1>Housing location State is : {{ HousingLocation?.state }}</h1>
    </div>
    <form [formGroup]="applyForm" (submit)="submitApplication()">
      <label for="FirstName">FirstName</label>
      <input type="text" formControlName="firstName" />

      <label for="FirstName">LastName</label>

      <input type="text" formControlName="lastName" />

      <label for="Email">Email</label>
      <input type="Email" formControlName="Email" />
      <button type="submit">Submit</button>
    </form>
  `,
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);

  //variables

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  HousingLocation!: HousingLocation | undefined;

  constructor() {
    const hosinglocationid = Number(this.route.snapshot.params['id']);

    this.HousingLocation =
      this.housingService.getHousingLocationById(hosinglocationid);
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
