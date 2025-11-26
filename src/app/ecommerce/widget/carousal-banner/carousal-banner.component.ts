import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'ngx-carousal-banner',
  templateUrl: './carousal-banner.component.html',
  styleUrls: ['./carousal-banner.component.scss']
})
export class CarousalBannerComponent implements OnInit {

  @Input() item;
  @Input() noofItems = 5;
  bannerItem:any;
  activeSlides: SlidesOutputData;
  customOptionsInner: OwlOptions = {
    loop: false,
    rtl:false,
    dots: false,
    pullDrag:true,
    touchDrag:true,
    //navText: ['<','>'],
    navText: [ '<button class="prev-arrow"><img src="../../../assets/images/ecommerce/left-icon-arrow.svg"></button>', '<button class="prev-arrow"><img src="../../../assets/images/ecommerce/left-icon-arrow.svg"></button>' ],
    responsive: {
      0: {
        nav:false,
        slideBy:5,
        items: 2,
        margin: 5,
        autoHeight : true
      },
      400: {
        nav:false,
        slideBy:5,
        items: 5,
        margin: 5,
        autoHeight : true
      },
      1024: {
        nav:true,
        slideBy:5,
        items: 5,
        margin: 5,
        autoHeight : true
      }
    }
  }
  constructor() {
   
   }

  ngOnInit(): void {
    this.bannerItem = this.item.bannerItem;
  }

  getData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log("activeSlides: ",this.activeSlides);
  }

}
