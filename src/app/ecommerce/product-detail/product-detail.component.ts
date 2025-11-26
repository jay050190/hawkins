import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { BannerData } from '../../@core/data/banner';
import { Cart, QuoteCartItem } from '../../@core/data/cart';
import { Product, ProductData } from '../../@core/data/product';
import { CartService } from '../../@core/services/cart.service';
import { LoaderService } from '../../@core/services/loader.service';

@Component({
  selector: 'ngx-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  itemSameSize=[];
  itemVariation=[];
  itemSizeCount = 0;
  itemVariationCount = 0;
  ProductId:number = 0;
  ProductInfo:Product = {brandName:""};
  tabchecked:true;
  
  customOptions: OwlOptions = {
    loop: false,
    rtl:false,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    nav:true,
    //navText: [ '<button class="prev-arrow"><img src="../../../assets/images/ecommerce/left-icon-arrow.svg"></button>', '<button class="prev-arrow"><img src="../../../assets/images/ecommerce/left-icon-arrow.svg"></button>' ],
    navSpeed: 700,
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

  customGurantee: OwlOptions = {
    loop: true,
    rtl:true,
    mouseDrag: true,
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
      400:{
        items:3
      }
    }
  }
  customOptionsThumbnail: OwlOptions;
  slidesStore = []
  slidesGurantee = 
  {
    bgcolor:"",
    title:"",
    bannerItem:[]
}

  activeSlides: SlidesOutputData;
  constructor(private route: ActivatedRoute,private productService: ProductData,private bannerService:BannerData,private cartService:CartService,public loaderService:LoaderService) { }

  getData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }

  handler(mainCarousal,thumCarousal,slideid:string)
  {
    mainCarousal.to(slideid);
    thumCarousal.to(slideid);
  }

  async ngOnInit() {
    this.loaderService.setLoading(true);
   
    await this.readQueryParam();
    await this.loadProductData();
    await this.loadProductBanner();  
    await this.loadSameSizeProducts();
    await this.loadVariationProducts();
    await this.loadWhatsIntheBoxProducts();
    this.loaderService.setLoading(false);

    this.customOptionsThumbnail = {
      loop: false,
      rtl:false,
      mouseDrag: false,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      nav:true,
      navText: [ '<button class="prev-arrow"><img src="../../../assets/images/ecommerce/left-icon-arrow.svg" class="icon-filter"></button>', '<button class="prev-arrow"><img src="../../../assets/images/ecommerce/left-icon-arrow.svg" class="icon-filter"></button>' ],
      navSpeed: 700,
      responsive: {
        0: {
          items: 8,
          margin: 3
        },
        400: {
          items: 8,
          margin: 3
        },
        740: {
          items: 8,
          margin: 3
        }
      }
    }
  }
  async readQueryParam()
  {
    this.route.queryParams.subscribe(params => {
      console.log(params); // { order: "popular" }
      this.ProductId = parseInt(params.product);
    }
  );
  }
  addProduct(id)
  {
    const cart:Cart = {ProductId:this.ProductId,Quantity:1,CustomerId:0}
    this.cartService.addToCart(cart).subscribe(
      (res)=>{
        //this.getCartCount();
        this.cartService.openCartDrawer(true);
        console.log("item addedd: ",res);
      }
    );
  }
  addProductToQuote(prdItem)
  {
    let item:QuoteCartItem = {ProductId:prdItem.id,Img:this.slidesStore[0].img,ProductName:prdItem.name,SalePrice:prdItem.salePrice,Quantity:1,Total:prdItem.salePrice};
    this.cartService.addQuoteCartItem(item);
    this.cartService.openQuoteCartDrawer(true);
  }

  async loadProductData()
  {
    let params = 0
    if(this.ProductId ==0)
    {
      return;
    }
    let res = await this.productService.getAllProduct(this.ProductId)
        if(res.success == true)
        {
          this.ProductInfo = res.data[0];
          this.ProductInfo.featureJson = JSON.parse(this.ProductInfo.featureJson );
          this.ProductInfo.specification = JSON.parse(this.ProductInfo.specification );
        }
        console.log("product detail by id: ",this.ProductInfo);
  }
  async loadVariationProducts()
  {
    this.itemVariation = [];
    let res = await this.bannerService.productRelatedItems(this.ProductId,'Group')
        if(res.success===true)
        {
          res.data.forEach(leaf => {
             if(leaf.item == null || leaf.item == undefined)
             return
             leaf.bannerItem = JSON.parse(leaf.item);
             this.itemVariationCount = leaf.bannerItem.length;
             leaf.bannerItem.forEach(element => {
              if(element.img)
              element.img = this.bannerService.getSanitizedImagePath(element.img);
              else
              element.img = '../../../assets/images/no-image.png'
             //  element.img = this.bannerService.getSanitizedImagePath(element.img);
             });
             this.itemVariation.push(leaf);
             console.log("itemVariation",this.itemVariation);
          });
        }
  }
  
  async loadWhatsIntheBoxProducts()
  {

    let res = await this.bannerService.productRelatedItems(this.ProductId,'ImageWhat')
        if(res.success===true)
        {
          res.data.forEach(leaf => {
             if(leaf.item == null || leaf.item == undefined)
             return
             leaf.bannerItem = JSON.parse(leaf.item);
             leaf.bannerItem.forEach(element => {
              if(element.img)
              element.img = this.bannerService.getSanitizedImagePath(element.img);
              else
              element.img = '../../../assets/images/no-image.png'
             //  element.img = this.bannerService.getSanitizedImagePath(element.img);
             });
             this.slidesGurantee.bannerItem = leaf.bannerItem
             console.log("whatsinthebox",this.slidesGurantee);
          });
        }
  }

  async loadProductBanner()
  {
    let res = await  this.bannerService.productRelatedItems(this.ProductId,'Image');
        if(res.data.length<1)
        {
          this.slidesStore.push({id:1,img:'../../../assets/images/no-image.png',alt:'no image',title:'no image'});
          return;
        }
        res.data.forEach(element => {
        if(element.img)
        {
          element.img = this.bannerService.getSanitizedImagePath(element.img);
        }
        else
        {
          element.img = '../../../assets/images/no-image.png';
        }
        this.slidesStore.push(element);
      });  
      console.log("slide store",this.slidesStore);
      
  }

  async loadSameSizeProducts()
  {
    this.itemSameSize = [];
    let res = await this.bannerService.productRelatedItems(this.ProductId,'Size')
        if(res.success===true)
        {
          res.data.forEach(leaf => {
             if(leaf.item == null || leaf.item == undefined)
             return
             leaf.bannerItem = JSON.parse(leaf.item);
             this.itemSizeCount = leaf.bannerItem.length;
             leaf.bannerItem.forEach(element => {
              if(element.img)
              element.img = this.bannerService.getSanitizedImagePath(element.img);
              else
              element.img = '../../../assets/images/no-image.png'
             });
             this.itemSameSize.push(leaf);
          });
          console.log("loadSameSizeProducts",this.slidesStore);
        }
  }



  
}
