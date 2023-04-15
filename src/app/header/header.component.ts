import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() cityName: string | null = null;

  constructor(private router: Router) {}

  onCitySelected(cityName: string) {
    this.cityName = cityName;
  }

  discoverNow() {}
}
