import { Component, OnInit } from '@angular/core';
import { BannerData } from '../../@core/data/banner';

@Component({
  selector: 'ngx-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  youMayAlsoLikeList=[];
  youMayAlsoLikeListCount = 0;

  constructor(private bannerService:BannerData) { }

  async ngOnInit(){
    await this.YouMayAlsoLikeOptions();
  }

  async YouMayAlsoLikeOptions()
  {
    this.youMayAlsoLikeList = [];
    let res = await this.bannerService.productRelatedItems(32,'Group')
        if(res.success===true)
        {
          res.data.forEach(leaf => {
             if(leaf.item == null || leaf.item == undefined)
             return
             leaf.bannerItem = JSON.parse(leaf.item);
             this.youMayAlsoLikeListCount = leaf.bannerItem.length;
             leaf.bannerItem.forEach(element => {
              if(element.img)
              element.img = this.bannerService.getSanitizedImagePath(element.img);
              else
              element.img = '../../../assets/images/no-image.png'
             //  element.img = this.bannerService.getSanitizedImagePath(element.img);
             });
             this.youMayAlsoLikeList.push(leaf);
             console.log("youMayAlsoLikeList",this.youMayAlsoLikeList);
          });
        }
  }
}
