import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityDetailsComponent } from './city-details.component';
import { CityInfoComponent } from '../city-info/city-info/city-info.component';

const routes: Routes = [{ path: '', component: CityInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityDetailsRoutingModule { }
