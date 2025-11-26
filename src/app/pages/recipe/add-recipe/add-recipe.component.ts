import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { AttributeValue, AttributeValueData } from '../../../@core/data/attribute-value';
import { BrandData, BrandEntity } from '../../../@core/data/brand-entity';
import { Category, CategoryData } from '../../../@core/data/category';
import { Country, CountryData } from '../../../@core/data/country';
import { ImageEntity } from '../../../@core/data/image-entity';
import { Product, ProductData } from '../../../@core/data/product';
import { Recipe } from '../../../@core/data/recipe';
import { SmartTableData } from '../../../@core/data/smart-table';
import { RecipeService } from '../../../@core/services/recipe.service';


@Component({
  selector: 'ngx-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  recMstForm: FormGroup;
  submitted:boolean = false;
  buttontext:string = "Save";
  featureText = "";
  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';

  // array for insertion.
  priceFormArray = [];
  attributeFormArrray=[];
  imageItem:ImageEntity;
  paramRecipeId:string = "0";

  // cussource: LocalDataSource = new LocalDataSource();
  categoryList: [];
  countryList: [];
  brandList: [];
  types: NbComponentStatus[] = [
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ];
  attributeList: any[];
  attributeValueList: any[];
  attributeValueFormList: any[];

  config: any = {
    readonly: 1,
    height: 250,
    theme: "modern",
    // powerpaste advcode toc tinymcespellchecker a11ychecker mediaembed linkchecker help
    //plugins:
      //"searchreplace autolink directionality visualblocks visualchars fullscreen image imagetools link media template codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists textcolor wordcount contextmenu colorpicker textpattern",
    toolbar:
      "formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat",
    image_advtab: true,
    imagetools_toolbar:
      "rotateleft rotateright | flipv fliph | editimage imageoptions",
    templates: [
      { title: "Test template 1", content: "Test 1" },
      { title: "Test template 2", content: "Test 2" }
    ],
    content_css: [
      "//fonts.googleapis.com/css?family=Lato:300,300i,400,400i",
      "//www.tinymce.com/css/codepen.min.css"
    ]
  };

  constructor(private service: SmartTableData,private fb: FormBuilder
    ,private productService: ProductData
    ,private toastrService: NbToastrService
    ,private countryService:CountryData
    ,private brandService:BrandData
    ,private categoryService:CategoryData
    ,private attributeValueService:AttributeValueData
    ,private recipeService:RecipeService
    ,private route: ActivatedRoute
    ) 
    {
    // const data = this.service.getAdditionalFeatureData();
    // this.cussource.load(data);
    this.initializeForm();
    this.paramRecipeId = this.route.snapshot.paramMap.get('id');
    if(this.paramRecipeId)
    {
      this.loadRecipeById(this.paramRecipeId);
    }
  }

  ngOnInit(): void {
  }

  recipeIdLoaded()
  {
    return (this.paramRecipeId != null && this.paramRecipeId != "0");
  }
  onSave()
  {
    
    this.submitted=true;
    if (!this.recMstForm.valid) {
      return;
    }
    let req = this.recMstForm.value;
    req.ingredientsJson = JSON.stringify(this.ingredientsJson.value);
    req.operation = "I";
    if(this.imageItem)
    {
      req.pictureID = this.imageItem.pictureId;
    }

    //req.attributeForm = JSON.stringify(req.this.attributeForm.value);

    this.productService.addRecipe(req).subscribe(
      (res)=>{
        if(res.success===true)
        {
          
          this.showToast(this.types[1],"Success","Recipe Added Successfully!");
          // this.saveProductImageMapping(res.data);
          this.saveAttributes(res.data[0].Id);
        }
        else
        {
          this.showToast(this.types[4],"Error","Recipe Insertion Failed!")
        }
      }
    );
  }

  saveAttributes(recipeId:number)
  {
    let attributelist = this.attributeForm.value;
    attributelist.forEach(element => {
      
      let req = {
        id: 0,
        recipeId: recipeId,
        attributeMasterId: element.attributeId,
        attributeValueId: element.attributeValueId,
        deleted: false,
        createdBy: "16",
        operation: "I"
      };

    this.productService.addRecipeAttributes(req).subscribe(
      (res)=>{
        if(res.success===true)
        {
          this.showToast(this.types[1],"Success","Recipe Attribute Added Successfully!")
        }
        else
        {
          this.showToast(this.types[4],"Error","Recipe Attribute Insertion Failed!")
        }
      }
    );
    });
    

  }


  get f() {return this.recMstForm.controls;}
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  get ingredientsJson() {
    const control = this.recMstForm.get('ingredientsJsonForm') as FormArray;
    return control;
  }
  get pricingForm() {
    const control = this.recMstForm.get('pricingForm') as FormArray;
    return control;
  }
  get attributeForm() {
    const control = this.recMstForm.get('attributeForm') as FormArray;
    return control;
  }

  addAttribute()
  {
    if(this.f.attributeIdSingle.value == "" || this.f.attributeValueIdSingle.value =="")
    {
      this.showToast(this.types[4],"Error","Attribute and its option cannot be blank!");
      return;
    }
  
    const attributeFormSingle = this.fb.group({
      attributeId: [{value: this.f.attributeIdSingle.value, disabled: true}, Validators.required],
      attributeValueId: [{value: this.f.attributeValueIdSingle.value,disabled: true}, Validators.required],
    });
    this.attributeForm.push(attributeFormSingle);
    this.f.attributeIdSingle.setValue('');
    this.f.attributeValueIdSingle.setValue('');
  }
  
  addAttributeButton()
  {
    if(this.f.attributeIdSingle.value == "" || this.f.attributeValueIdSingle.value =="")
    {
      this.showToast(this.types[4],"Error","Attribute and its option cannot be blank!");
      return;
    }
  
    const attributeFormSingle = this.fb.group({
      attributeId: [{value: this.f.attributeIdSingle.value, disabled: true}, Validators.required],
      attributeValueId: [{value: this.f.attributeValueIdSingle.value,disabled: true}, Validators.required],
    });
    if(this.recipeIdLoaded())
    {
    let req = {
      id: 0,
      recipeId: this.paramRecipeId,
      attributeMasterId:this.f.attributeIdSingle.value,
      attributeValueId: this.f.attributeValueIdSingle.value,
      deleted: false,
      operation: "I"
    };

    this.productService.addRecipeAttributes(req).subscribe(
      (res)=>{
        if(res.success===true)
        {
          this.showToast(this.types[1],"Success","Recipe Attribute Added Successfully!")
        }
        else
        {
          this.showToast(this.types[4],"Error","Recipe Attribute Insertion Failed!")
        }
      }
    );
    }

    this.attributeForm.push(attributeFormSingle);
    this.f.attributeIdSingle.setValue('');
    this.f.attributeValueIdSingle.setValue('');
  }
  addIngredients() {
    if(this.f.ingredientsSingle.value == "")
    {
      this.showToast(this.types[4],"Error","Ingredient cannot be blank!");
      return;
    }
    const ingredientsForm = this.fb.group({
      ingredientsValue: [{value: this.f.ingredientsSingle.value, disabled: true}, Validators.required],
    });
    this.ingredientsJson.push(ingredientsForm);
    this.f.ingredientsSingle.setValue('');
  }

  deleteIngrdients(featureIndex: number) {
    this.ingredientsJson.removeAt(featureIndex);
  }

  deleteAttribute(attributeIndex: number) {
    if(this.recipeIdLoaded())
    {
    // load attribute by recipe id. 
    let attrObj = this.attributeForm.value[attributeIndex];
    let req = {
      recipeId: this.paramRecipeId,
      attributeMasterId: attrObj.attributeId,
      attributeValueId: attrObj.attributeValueId,
      operation: "RD"
    };
    this.productService.addRecipeAttributes(req).subscribe(
      (res)=>{
        if(res.success===true)
        {
            this.toastrService.success('Attribute deleted successfully!','Success')
        }
      }
    );
    }
    this.attributeForm.removeAt(attributeIndex);
  }

  fillAttributeValueByAttributeId(attributeId)
  {
    this.attributeValueFormList = this.attributeValueList.filter(x => x.AttributeId === attributeId);
  }

  fileBrowseHandler(file)
  {
    let res:any = this.productService.addImages(file.item(0),'','')
      if(res){
        if(res.success===true)
        {
          this.showToast(this.types[1],"Success","Media Added successfully!")
          this.imageItem = res.data;
        }
        else
        {
          this.showToast(this.types[4],"Error","Error while uploading media!")
        }
      }
  }
  initializeForm()
  {    
    this.recMstForm = this.fb.group({
      id: this.fb.control(0),
      title: this.fb.control("", [Validators.required]),
      subtitle: this.fb.control(""),
      cookingTime: this.fb.control(""),
      yield: this.fb.control(""),
      description: new FormControl({value:"",disabled:false}),
      pictureID: this.fb.control(0),
      deleted: this.fb.control(false),
      createdBy: this.fb.control(""),
      createdOnUtc: this.fb.control(new Date()),
      updatedOnUtc: this.fb.control(new Date()),
      operation: this.fb.control(""),
      ingredientsSingle: this.fb.control(""),
      ingredientsJson: this.fb.control(""),
      ingredientsJsonForm: this.fb.array([]),
      attributeIdSingle: this.fb.control(""),
      attributeValueIdSingle: this.fb.control(""),
      attributeForm:this.fb.array([]),
    });

    // load attribute
    this.loadAttribute();
    this.loadAttributeValue();
  }
  loadRecipeById(recipeId)
  {
    let req:Recipe = {id:recipeId,operation:"G"};
    this.recipeService.getRecipe(req).subscribe(
      (res)=>{
        if(res.success===true)
        {
          this.setForm(res.data[0]);
        }
        else
        {
          this.showToast(this.types[4],"Error","Invalid Recipe,Redirecting to recipe list");
        }
      }
    );
  }

  setForm(recipe:Recipe)
  {
    this.f.id.setValue(recipe.id);
    this.f.title.setValue(recipe.title);
    this.f.subtitle.setValue(recipe.subtitle);
    this.f.cookingTime.setValue(recipe.cookingTime);
    this.f.yield.setValue(recipe.yield);
    this.f.description.setValue(recipe.description);
    this.f.pictureID.setValue(recipe.pictureId);

    // load ingrdient.
    let ingredientArr = JSON.parse(recipe.ingredientsJson);
    ingredientArr.forEach(element => {
      this.f.ingredientsSingle.setValue(element.ingredientsValue);
      this.addIngredients();
    });

    // load attribute by recipe id. 
    let req = {
      recipeId: recipe.id,
      operation: "G"
    };

    this.productService.addRecipeAttributes(req).subscribe(
      (res)=>{
        if(res.success===true)
        {
          let attrdata = res.data;
          attrdata.forEach(element => {
            this.f.attributeIdSingle.setValue(element.AttributeMasterId);
            this.f.attributeValueIdSingle.setValue(element.AttributeValueId);
            this.addAttribute();
        });
        }
      }
    );
  }

  loadAttribute()
  {
    this.attributeList=[];
    let req:BrandEntity = {operation: "G",createdBy:"",name:"load",description:"load",attributeFor:"Recipe",shape:"",controlType:""};
    this.brandService.getAttribute(req).subscribe(
      (res)=>{
        if(res.success===true)
        {
          this.attributeList = res.data;
        }
      }
    );
  }
  loadAttributeValue()
  {
    this.attributeValueList=[];
    let req:AttributeValue = {operation: "GA",id:0,attributeId:0,createdBy:"",controlValue:"load",pictureId:0};
    this.attributeValueService.getAttributeValue(req).subscribe(
      (res)=>{
        if(res.success===true)
        {
          this.attributeValueList = res.data;
        }
      }
    );
  }
  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: true,
      duration: 2000,
      hasIcon: true,
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
      preventDuplicates: false,
    };
    const titleContent = title ? `. ${title}` : '';

    this.toastrService.show(
      body,
      `Toast ${titleContent}`,
      config);
  }
}
