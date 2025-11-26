import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'ngx-static-banner',
  templateUrl: './static-banner.component.html',
  styleUrls: ['./static-banner.component.scss']
})
export class StaticBannerComponent implements OnInit {

  @Input() item;
  @Input() noofItems = 5;
  bannerItem:any;
  customOptionsInner: OwlOptions = {
    loop: false,
    rtl:false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    nav:true,
    navSpeed: 700,
    navText: [ '<button class="prev-arrow"><img src="../../../assets/images/ecommerce/left-icon-arrow.svg"></button>', '<button class="prev-arrow"><img src="../../../assets/images/ecommerce/left-icon-arrow.svg"></button>' ],
    responsive: {
      0: {
        items: 2,
        margin: 5,
        autoHeight : true
      },
      400: {
        items: 2,
        margin: 5,
        autoHeight : true
      },
      740: {
        items: 2,
        margin: 5,
        autoHeight : true
      },
      940: {
        items: 3,
        margin: 5,
        autoHeight : true
      },
      1024: {
        items: 4,
        margin: 5,
        autoHeight : true
      },
      1200: {
        items: 4,
        margin: 5,
        autoHeight : true
      },
      1300: {
        items: 4,
        margin: 5,
        autoHeight : true
      },
      1400: {
        items: 4,
        margin: 5,
        autoHeight : true
      },
      1600: {
        items: 4,
        margin: 5,
        autoHeight : true
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
    this.bannerItem = this.item.bannerItem;
  }

}
