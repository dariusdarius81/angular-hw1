import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchCityComponent } from './search-city/search-city.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CityInfoComponent } from '../app/city-info/city-info/city-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchCityComponent,
    OurServicesComponent,
    MostPopularComponent,
    CityInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
