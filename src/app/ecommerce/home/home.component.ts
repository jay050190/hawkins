import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BannerEntity } from '../../@core/data/banner';
import { ProductData } from '../../@core/data/product';
import { BannerService } from '../../@core/services/banner.service';
import { CartService } from '../../@core/services/cart.service';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemBannerData=[];
  spareBannerData=[];

  pressureCookerBannerData=[];
  accessoriesBannerData=[];
  cookwareBannerData=[];
  setsBannerData=[];

  itemNew=[];
  itemTop=[];
  customOptions: OwlOptions = {
    loop: false,
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

  customOptionsArticle: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    nav:true,
    navSpeed: 700,
    navText: [ '<button class="prev-arrow"><img src="../../../assets/images/ecommerce/left-icon-arrow.svg"></button>', '<button class="prev-arrow"><img src="../../../assets/images/ecommerce/left-icon-arrow.svg"></button>' ],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    }
  }

  customOptionBuyInBulk:OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    nav:true,
    navSpeed: 700,
    navText: [ '<button class="prev-arrow"><img src="../../../assets/images/ecommerce/left-icon-arrow.svg"></button>', '<button class="prev-arrow"><img src="../../../assets/images/ecommerce/left-icon-arrow.svg"></button>' ],
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
  customOptionsInner: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    nav:true,
    navSpeed: 700,
    navText: [ '<button class="prev-arrow"><img src="../../../assets/images/ecommerce/left-icon-arrow.svg"></button>', '<button class="prev-arrow"><img src="../../../assets/images/ecommerce/left-icon-arrow.svg"></button>' ],
    responsive: {
      0: {
        items: 2.4,
        margin: 5,
        autoHeight : true
      },
      400: {
        items: 2.4,
        margin: 5,
        autoHeight : true
      },
      740: {
        items: 2.4,
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

  slidesStore = [
    {id:"1",src:"../../../assets/images/ecommerce/desktop-top-banner1.webp",srcmob:"../../../assets/images/ecommerce/mobile-top-banner1.webp",alt:"banner1",title:"banner1"},
    {id:"2",src:"../../../assets/images/ecommerce/desktop-top-banner2.webp",srcmob:"../../../assets/images/ecommerce/mobile-top-banner2.webp",alt:"banner2",title:"banner2"},
    {id:"3",src:"../../../assets/images/ecommerce/desktop-top-banner3.webp",srcmob:"../../../assets/images/ecommerce/mobile-top-banner3.webp",alt:"banner3",title:"banner3"},
  ]
  
  category = [
    {id:"1",src:"../../../assets/images/ecommerce/pre-cooker-slide3.png",alt:"banner1",title:"banner1",name:"Contura",category:"PRESSURE COOKER",subcategory:""},
    {id:"2",src:"../../../assets/images/ecommerce/pre-cooker-slide2.png",alt:"banner2",title:"banner2",name:"Classic",category:"PRESSURE COOKER",subcategory:""},
    {id:"3",src:"../../../assets/images/ecommerce/pre-cooker-slide1.png",alt:"banner3",title:"banner3",name:"Classic",category:"PRESSURE COOKER",subcategory:""},
    {id:"4",src:"../../../assets/images/ecommerce/cookwear-slide3.png",alt:"banner1",title:"banner1",name:"Kadhai",category:"COOKWEAR",subcategory:""},
    {id:"5",src:"../../../assets/images/ecommerce/cookwear-slide2.png",alt:"banner2",title:"banner2",name:"Tava",category:"COOKWEAR",subcategory:""},
    {id:"6",src:"../../../assets/images/ecommerce/cookwear-slide1.jpg",alt:"banner3",title:"banner3",name:"Tava",category:"COOKWEAR",subcategory:""},
    {id:"7",src:"../../../assets/images/ecommerce/prodct-slide2.png",alt:"banner1",title:"banner1",name:"Idli Stand",category:"OTHER PRODUCTS",subcategory:""},
    {id:"8",src:"../../../assets/images/ecommerce/prodct-slide3.png",alt:"banner2",title:"banner2",name:"Dish Sets",category:"OTHER PRODUCTS",subcategory:""},
    {id:"9",src:"../../../assets/images/ecommerce/prodct-slide1.png",alt:"banner3",title:"banner3",name:"Miniature",category:"OTHER PRODUCTS",subcategory:""},
    {id:"10",src:"../../../assets/images/ecommerce/slide-parts1.png",alt:"banner3",title:"banner3",name:"Gasket",category:"PARTS",subcategory:""},
    {id:"11",src:"../../../assets/images/ecommerce/slide-parts2.png",alt:"banner3",title:"banner3",name:"Safety Value",category:"PARTS",subcategory:""},
    {id:"12",src:"../../../assets/images/ecommerce/slide-parts3.png",alt:"banner3",title:"banner3",name:"Gasket",category:"PARTS",subcategory:""},
    {id:"13",src:"../../../assets/images/ecommerce/new-arrivals1.png",alt:"banner3",title:"banner3",name:"New Arrivals",category:"NEW ARRIVALS",subcategory:""},
    {id:"14",src:"../../../assets/images/ecommerce/new-arrivals2.png",alt:"banner3",title:"banner3",name:"New Arrivals",category:"NEW ARRIVALS",subcategory:""},
    {id:"15",src:"../../../assets/images/ecommerce/new-arrivals3.png",alt:"banner3",title:"banner3",name:"New Arrivals",category:"NEW ARRIVALS",subcategory:""},
    {id:"16",src:"../../../assets/images/ecommerce/top-seller1.png",alt:"banner3",title:"banner3",name:"Ceraminc-Coated Contura",category:"TOP SELLERS",subcategory:""},
    {id:"17",src:"../../../assets/images/ecommerce/top-seller2.png",alt:"banner3",title:"banner3",name:"Miss Marry Handi",category:"TOP SELLERS",subcategory:""},
    {id:"18",src:"../../../assets/images/ecommerce/top-seller3.png",alt:"banner3",title:"banner3",name:"Ceraminc-Coated Contura",category:"TOP SELLERS",subcategory:""},
    {id:"19",src:"../../../assets/images/ecommerce/gift-slider1.png",alt:"banner3",title:"banner3",name:"Hawkins Cookware Set 3 Pieces",category:"GIFTS",subcategory:""},
    {id:"20",src:"../../../assets/images/ecommerce/gift-slider2.png",alt:"banner3",title:"banner3",name:"Hawkins Futura Cookware Set 5 Pieces",category:"GIFTS",subcategory:""},
    {id:"21",src:"../../../assets/images/ecommerce/gift-slider3.png",alt:"banner3",title:"banner3",name:"Hawkins Cookware Set 3 Pieces",category:"GIFTS",subcategory:""},
    {id:"22",src:"../../../assets/images/ecommerce/bulk-slider1.webp",alt:"banner3",title:"banner3",name:"Hawkins Cookware Set 3 Pieces",category:"BULK",subcategory:""},
    {id:"23",src:"../../../assets/images/ecommerce/about-us-1.jpeg",alt:"banner3",title:"banner3",name:"Hawkins Cookware Set 3 Pieces",category:"ABOUT",subcategory:""},
    {id:"24",src:"../../../assets/images/ecommerce/about-us-2.jpeg",alt:"banner3",title:"banner3",name:"Hawkins Cookware Set 3 Pieces",category:"ABOUT",subcategory:""},
    {id:"25",src:"../../../assets/images/ecommerce/about-us-3.jpeg",alt:"banner3",title:"banner3",name:"Hawkins Cookware Set 3 Pieces",category:"ABOUT",subcategory:""},
    {id:"26",src:"../../../assets/images/ecommerce/aluminium.webp",alt:"banner3",title:"banner3",name:"Hawkins Cookware Set 3 Pieces",category:"ARTICLE",subcategory:""},
    {id:"27",src:"../../../assets/images/ecommerce/aluminium.webp",alt:"banner3",title:"banner3",name:"Hawkins Cookware Set 3 Pieces",category:"ARTICLE",subcategory:""},
    {id:"28",src:"../../../assets/images/ecommerce/aluminium.webp",alt:"banner3",title:"banner3",name:"Hawkins Cookware Set 3 Pieces",category:"ARTICLE",subcategory:""},
    {id:"29",src:"../../../assets/images/ecommerce/aluminium.webp",alt:"banner3",title:"banner3",name:"Hawkins Cookware Set 3 Pieces",category:"ARTICLE",subcategory:""},
    {id:"30",src:"../../../assets/images/ecommerce/sale-service.webp",alt:"banner3",title:"banner3",name:"Hawkins Cookware Set 3 Pieces",category:"SALE",subcategory:""},
    {id:"31",src:"https://www.ondeck.com/wp-content/uploads/sites/5/2017/07/Screen-Shot-2017-09-13-at-2.39.39-PM.webp",alt:"banner3",title:"banner3",name:"Hawkins Cookware Set 3 Pieces",category:"REGISTER",subcategory:""},
    {id:"32",src:"../../../assets/images/ecommerce/aluminium.webp",alt:"banner3",title:"banner3",name:"Hawkins Cookware Set 3 Pieces",category:"ARTICLE",subcategory:""},
    {id:"33",src:"../../../assets/images/ecommerce/aluminium.webp",alt:"banner3",title:"banner3",name:"Hawkins Cookware Set 3 Pieces",category:"ARTICLE",subcategory:""},
    {id:"34",src:"../../../assets/images/ecommerce/aluminium.webp",alt:"banner3",title:"banner3",name:"Hawkins Cookware Set 3 Pieces",category:"ARTICLE",subcategory:""},
    {id:"35",src:"../../../assets/images/ecommerce/aluminium.webp",alt:"banner3",title:"banner3",name:"Hawkins Cookware Set 3 Pieces",category:"ARTICLE",subcategory:""},
    {id:"36",src:"../../../assets/images/ecommerce/sale-service.webp",alt:"banner3",title:"banner3",name:"Hawkins Cookware Set 3 Pieces",category:"SALE",subcategory:""},
  ]

  productCategories=[];
  productGroups = [];
  bulkForm: FormGroup;
  constructor(private bannerService:BannerService,private cartService:CartService,private router:Router,private productService:ProductData,private fb: FormBuilder) { 
    this.createBulkForm();
  }

  async ngOnInit() {
    // this.bannerService.items('CAT').subscribe(
    //   (res)=>{
    //     if(res.success===true)
    //     {

    //       res.data.forEach(leaf => {
    //          if(leaf.item == null || leaf.item == undefined)
    //          return
    //          leaf.bannerItem = JSON.parse(leaf.item);
    //          leaf.bannerItem.forEach(element => {
    //            element.img = this.bannerService.getSanitizedImagePath(element.p[0].img);
    //          });
    //          this.itemBannerData.push(leaf);
    //       });
    //       console.log("itemBannerData",this.itemBannerData);
    //     }
    //   }
    // );
    await this.loadCartSession();
   
   
    await this.loadCategoriesBannerData('PC');
    await this.loadCategoriesBannerDataPath('CW');
    await this.loadCategoriesBannerData('ACC');
    await this.loadCategoriesBannerDataPath('SET');
    await this.loadCategoriesBannerDataPath('SPARE');
    // let res = await this.bannerService.items('SPARE');
    //     if(res.success===true)
    //     {

    //       res.data.forEach(leaf => {
    //          if(leaf.item == null || leaf.item == undefined)
    //          return
    //          leaf.bannerItem = JSON.parse(leaf.item);
    //          leaf.bannerItem.forEach(element => {
    //            element.img = this.bannerService.getSanitizedImagePath(element.p[0].img);
    //          });
    //          this.spareBannerData.push(leaf);
    //       });
    //       console.log("spareBannerData",this.spareBannerData);
    //     }
    
    this.loadNewProducts();
    this.loadTopProducts();
    await this.loadProductCategories();
  }
  homebannerproduct(title)
  {
    const result = this.category.filter((obj) => {
      return obj.category === title;
    });
    return result;
  }
  async loadNewProducts()
  {
    let res = await this.bannerService.items('NEW');
        if(res.success===true)
        {
          res.data.forEach(leaf => {
             if(leaf.item == null || leaf.item == undefined)
             return
             leaf.bannerItem = JSON.parse(leaf.item);
             leaf.bannerItem.forEach(element => {
               element.img = this.bannerService.getSanitizedImagePath(element.img);
             });
             this.itemNew.push(leaf);
          });
        }

  }
  async loadTopProducts()
  {
    let res = await this.bannerService.items('TOP');
        if(res.success===true)
        {
          res.data.forEach(leaf => {
             if(leaf.item == null || leaf.item == undefined)
             return
             leaf.bannerItem = JSON.parse(leaf.item);
             leaf.bannerItem.forEach(element => {
               element.img = this.bannerService.getSanitizedImagePath(element.img);
             });
             this.itemTop.push(leaf);
          });
          console.log("itemTop",this.itemTop);
        }
  }
  loadCartSession()
  {
    this.cartService.getCartSession().subscribe(
      (res)=>{
        console.log(res);
      }
    );
  }
  redirectToAbout()
  {
    this.router.navigate(['/about']);
  }
  searchProduct(searchtext)
  {
    this.router.navigate(['/product-list'], {
      queryParams: {
        srchtxt: searchtext, 
        catType:'SRCH'
      },
    });
  }

  async loadProductCategories()
  {
    //this.loader.setLoading(true);
    let params = 0
    let res =await this.productService.getFilterOption('ALL','0')
    if(res)
    {
      this.productCategories = JSON.parse(res.data[0].Categorys);
    }
    //this.loader.setLoading(false); 
  }

  get f()
  {
    return this.bulkForm.controls;
  }
  async getFilterOptionByCategory()
  {
    if(this.f.category.value =="")
    {
      this.productGroups = [];
    }
    //this.loader.setLoading(true);
    let selectedValues = this.f.category.value ;
    let res =await this.productService.getFilterOption("CAT",selectedValues)
    if(res)
    {
      this.productGroups = JSON.parse(res.data[0].Groups);
      console.log("this.productGroups ",this.productGroups);
    }
    //this.loader.setLoading(false); 
  }
  get disableProducType()
  {
    let result = false;
    if(this.productGroups.length<1)
    {
      return true;
    }
  }
  createBulkForm() {
    this.bulkForm = this.fb.group({
      category: ['', Validators.required],
      subCategory: ['']   
    });    
  }
  redirectTo(url: string) {
    if(this.bulkForm.valid)
    {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([url], {
        queryParams: {
          catType:(this.f.subCategory.value == "")? "CAT":"SUBCAT",
          category:this.f.category.value,
          subCategory:this.f.subCategory.value
        },
      })
      );
    }
    else
    {
      alert('Please select category');
    }
 }

 async loadCategoriesBannerData(type)
 {

  let res = await this.bannerService.items(type);
      if(res.success===true)
      {

        res.data.forEach(leaf => {
           if(leaf.item == null || leaf.item == undefined)
           return
           leaf.bannerItem = JSON.parse(leaf.item);
           leaf.bannerItem.forEach(element => {
             element.img = this.bannerService.getSanitizedImagePath(element.p[0].img);
           });
           if(type=="PC")
              this.pressureCookerBannerData.push(leaf);
            else if(type="CW")
              this.cookwareBannerData.push(leaf);
            else if(type="ACC")
              this.accessoriesBannerData.push(leaf);
            else if(type="SET")
              this.setsBannerData.push(leaf);
        });

        console.log("banner data:",this.pressureCookerBannerData);
      }
 }
 async loadCategoriesBannerDataPath(type)
 {

  let res = await this.bannerService.items(type);
      if(res.success===true)
      {
          res.data.forEach(leaf => {
            leaf.bannerItem = JSON.parse(leaf.item);
            if(type=="PC")
            this.pressureCookerBannerData.push(leaf);
            else if(type="CW")
              this.cookwareBannerData.push(leaf);
            else if(type="ACC")
              this.accessoriesBannerData.push(leaf);
            else if(type="SET")
              this.setsBannerData.push(leaf);
              else if(type="SPARE")
              this.spareBannerData.push(leaf);        
          });
        console.log("banner data path:",this.setsBannerData);
      }
 }
}
