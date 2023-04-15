import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { City } from '../models/city.model';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.scss'],
})
export class MostPopularComponent implements OnInit {
  arrayOfCities: City[] = [];
  displayCount: number = 6;
  @Output() citySelected: EventEmitter<string> = new EventEmitter<string>();

  constructor(private cityService: CityService, private router: Router) {}

  // ngOnInit(): void {
  //   this.arrayOfCities = this.cityService.getCities();
  // }

  ngOnInit(): void {
    const allCities = this.cityService.getCities();
    this.arrayOfCities = allCities.slice(0, this.displayCount);
  }

  next() {
    const allCities = this.cityService.getCities();
    const currentLastIndex = allCities.indexOf(this.arrayOfCities[this.arrayOfCities.length - 1]);
    if (currentLastIndex < allCities.length - 1) {
      this.arrayOfCities = allCities.slice(currentLastIndex + 1, currentLastIndex + 1 + this.displayCount);
    }
  }

  previous() {
    const allCities = this.cityService.getCities();
    const currentFirstIndex = allCities.indexOf(this.arrayOfCities[0]);
    if (currentFirstIndex > 0) {
      this.arrayOfCities = allCities.slice(currentFirstIndex - this.displayCount, currentFirstIndex);
    }
  }

  navigateToCityPage(cityName: string) {
    this.citySelected.emit(cityName);
  }
}
