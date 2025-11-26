import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from './category.service';
import { CountryService } from './country.service';
import { BrandService } from './brand.service';
import { RecipeService } from './recipe.service';
import { BannerService } from './banner.service';
import { CartService } from './cart.service';
import { AuthenticateService } from './authenticate.service';
import { LocationService } from './location.service';
import { LoaderService } from './loader.service';
import { FilterService } from './filter.service';


const SERVICES = [
  BrandService,
  CategoryService,
  CountryService,
  RecipeService,
  BannerService,
  CartService,
  AuthenticateService,
  LocationService,
  LoaderService,
  FilterService
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class ServicesDataModule {
  static forRoot(): ModuleWithProviders<ServicesDataModule> {
    return {
      ngModule: ServicesDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
