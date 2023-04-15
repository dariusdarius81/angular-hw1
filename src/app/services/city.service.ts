import { Injectable } from '@angular/core';
import { City } from '../models/city.model';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private cities: City[] = [
    {
      image: 'assets/images/chicago.jpg',
      title: 'CHICAGO',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: 'assets/images/hallstatt.jpg',
      title: 'HALLSTATT',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: 'assets/images/porun.jpg',
      title: 'PORUN',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: 'assets/images/melbourne.jpg',
      title: 'MELBOURNE',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: 'assets/images/zurich.jpg',
      title: 'ZURICH',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: 'assets/images/venice.jpg',
      title: 'VENICE',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: 'assets/images/amsterdam.jpg',
      title: 'AMSTERDAM',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: 'assets/images/skofja.jpg',
      title: 'SKOFJA',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: 'assets/images/vending.jpg',
      title: 'VENDING',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  constructor() {}

  getCities(): City[] {
    return this.cities;
  }
}
