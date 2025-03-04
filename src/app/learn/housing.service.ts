import { Injectable } from '@angular/core';
import { HousingLocation } from './interfaces/HousingLocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  private jsonUrl = 'http://localhost:3000/locations';

  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    try {
      const response = await fetch(this.jsonUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return (await response.json()) ?? [];
    } catch (error) {
      console.error('Error fetching housing locations:', error);
      return [];
    }
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    try {
      console.log(`Fetching data for ID: ${id}`);
      const response = await fetch(`${this.jsonUrl}/${id}`);

      if (!response.ok) {
        throw new Error(
          `Error fetching housing location: ${response.statusText}`
        );
      }

      const data = await response.json();
      console.log(`Data received:`, data); // Log fetched data
      return data;
    } catch (error) {
      console.error(`Failed to fetch housing location:`, error);
      return undefined;
    }
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Home application received: First Name - ${firstName}, Last Name - ${lastName}, Email - ${email}.`
    );
  }
}
