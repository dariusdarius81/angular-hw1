import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.scss'],
})
export class SearchCityComponent implements OnInit {
  cityControl = new FormControl();
  cities: string[] = [
    'Chicago',
    'Hallstatt',
    'Porun',
    'Melbourne',
    'Zurich',
    'Venice',
    'Amsterdam',
    'Skofja',
    'Vending'
  ];
  filteredCities!: Observable<string[]>;

  constructor(private router: Router) {}

  onCitySelected(city: string): void {
    this.router.navigate(['/city-info', city])
  }

  ngOnInit() {
    this.filteredCities = this.cityControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.cities.filter((city) =>
      city.toLowerCase().includes(filterValue)
    );
  }
}
