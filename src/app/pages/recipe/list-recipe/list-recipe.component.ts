import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.scss']
})
export class ListRecipeComponent implements OnInit {
  cussettings = {
    columns: {  
      doc: {
        title: '',
        type: 'custom',
        // renderComponent: ImgThumbnail,
        filter:false,
        width:'50px'
      }, 
      name: {
        title: 'Name',
        type: 'string',
        filter: true
      },
      categoryName: {
        title: 'Category',
        type: 'string',
        filter: true
      },
      brandName: {
        title: 'Brand',
        type: 'string',
        filter: true
      },
      published: {
        title: 'Published',
        type: 'string',
        filter: true
      },
      
    },
    actions: {
    add: false,
    edit: false,
    delete: false
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
