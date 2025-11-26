import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-recipe-listing',
  templateUrl: './recipe-listing.component.html',
  styleUrls: ['./recipe-listing.component.scss']
})
export class RecipeListingComponent implements OnInit {

  constructor() { }
  recipieList = [
    {id:"",title: "Rajma",subtitle:"Kidney Beans Curry",src:"assets/images/recipe/rajma.png",serving:"10 People",time:"55 Min"},
    {id:"",title: "Firni",subtitle:"Milk & Ground Rice Pudding",src:"assets/images/recipe/rajma.png",serving:"10 People",time:"55 Min"},
    {id:"",title: "Appam",subtitle:"Rice & Coconut Milk Pancakes",src:"assets/images/recipe/rajma.png",serving:"10 People",time:"55 Min"},
    {id:"",title: "Rabri",subtitle:"Scraped Milk Pudding",src:"assets/images/recipe/rajma.png",serving:"10 People",time:"55 Min"},
    {id:"",title: "Samosa",subtitle:"Savoury Stuffed Pastries",src:"assets/images/recipe/rajma.png",serving:"10 People",time:"55 Min"},
    {id:"",title: "Rasogolla",subtitle:"Bengali Sweet",src:"assets/images/recipe/rajma.png",serving:"10 People",time:"55 Min"},
    {id:"",title: "Medu Wadas",subtitle:"Savoury Doughnuts",src:"assets/images/recipe/rajma.png",serving:"10 People",time:"55 Min"},
    {id:"",title: "Puran Poli",subtitle:"Sweet Stuffed Unleavened",src:"assets/images/recipe/rajma.png",serving:"10 People",time:"55 Min"},
    {id:"",title: "Batata Wadas",subtitle:"Potao balls in Thickk Batter",src:"assets/images/recipe/rajma.png",serving:"10 People",time:"55 Min"},
    {id:"",title: "Gajar Halwa",subtitle:"Carrot Pudding",src:"assets/images/recipe/rajma.png",serving:"10 People",time:"55 Min"},
    {id:"",title: "Alu Tikki",subtitle:"Potato Cutlets",src:"assets/images/recipe/rajma.png",serving:"10 People",time:"55 Min"},
    {id:"",title: "Dum Aloo",subtitle:"Potatoes in Thick Gravy",src:"assets/images/recipe/rajma.png",serving:"10 People",time:"55 Min"},
  ]
  ngOnInit(): void {
  }

}
