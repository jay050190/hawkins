import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'ngx-highlight-banner',
  templateUrl: './highlight-banner.component.html',
  styleUrls: ['./highlight-banner.component.scss']
})
export class HighlightBannerComponent implements OnInit {

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
        items: 5,
        margin: 5,
        autoHeight : true
      },
      1024: {
        items: 5,
        margin: 5,
        autoHeight : true
      },
      1200: {
        items: 5,
        margin: 5,
        autoHeight : true
      },
      1300: {
        items: 5,
        margin: 5,
        autoHeight : true
      },
      1400: {
        items: 5,
        margin: 5,
        autoHeight : true
      },
      1600: {
        items: 5,
        margin: 5,
        autoHeight : true
      }
    }
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.bannerItem = this.item.bannerItem;
  }
  redirectTo(navUrl,searchtext: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
    this.router.navigate([navUrl], {
      queryParams: {
        product: searchtext
      },
    })
    );
 }
}
