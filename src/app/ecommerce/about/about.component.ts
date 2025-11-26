import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'ngx-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    nav:false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

  category = [
    {id:"23",src:"../../../assets/images/ecommerce/about-us-1.jpeg",alt:"banner3",title:"banner3",name:"Hawkins Cookware Set 3 Pieces",category:"ABOUT",subcategory:""},
    {id:"24",src:"../../../assets/images/ecommerce/about-us-2.jpeg",alt:"banner3",title:"banner3",name:"Hawkins Cookware Set 3 Pieces",category:"ABOUT",subcategory:""},
    {id:"25",src:"../../../assets/images/ecommerce/about-us-3.jpeg",alt:"banner3",title:"banner3",name:"Hawkins Cookware Set 3 Pieces",category:"ABOUT",subcategory:""}
  ]

}
