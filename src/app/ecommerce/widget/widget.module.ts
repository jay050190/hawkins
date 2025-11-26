import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarousalBannerComponent } from './carousal-banner/carousal-banner.component';
import { HighlightBannerComponent } from './highlight-banner/highlight-banner.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SpinnerComponent } from './spinner/spinner.component';
import { EmbedVideo } from 'ngx-embed-video';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { FilterProductComponent } from './filter-product/filter-product.component';
import { ImageControlComponent } from './image-control/image-control.component';
import { NbButtonModule, NbCardModule, NbInputModule, NbTabsetModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchTextComponent } from './search-text/search-text.component';
import { NoProductComponent } from './no-product/no-product.component';
import { StaticBannerComponent } from './static-banner/static-banner.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { ProductCarousalComponent } from './product-carousal/product-carousal.component';

@NgModule({
  declarations: [
    CarousalBannerComponent,
    HighlightBannerComponent,
    ProductCarousalComponent,
    SpinnerComponent,
    VideoPlayerComponent,
    FilterProductComponent,
    ImageControlComponent,
    SearchTextComponent,
    NoProductComponent,
    StaticBannerComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule,
    NbCardModule,
    NbTabsetModule,
    NbInputModule,
    NbButtonModule,
    ReactiveFormsModule,
    EmbedVideo.forRoot(),
    AutocompleteLibModule
  ],
  exports: [
    CarousalBannerComponent,
    HighlightBannerComponent,
    ProductCarousalComponent,
    SpinnerComponent,
    VideoPlayerComponent,
    FilterProductComponent,
    ImageControlComponent,
    SearchTextComponent,
    NoProductComponent,
    StaticBannerComponent
  ]
})
export class WidgetModule { }

