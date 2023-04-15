import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.scss'],
})
export class CityInfoComponent implements OnInit {
  cityName!: string;
  cityImage!: string;
  cityDescription!: string;

  constructor(
    private cityService: CityService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cityName = this.route.snapshot.paramMap.get('name') as string;
    this.getCityData(this.cityName);
  }

  getCityData(cityName: string) {
    const cities = this.cityService.getCities();
    const city = cities.find(
      (city) => city.title.toLowerCase() === cityName.toLowerCase()
    );

    console.log('City name: ', cityName);
    console.log('Matched City:', city);

    if (city) {
      this.cityImage = city.image;
      this.cityDescription = city.description;
    }
  }
}
