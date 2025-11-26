import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { AttributeValue, AttributeValueData } from '../../../@core/data/attribute-value';
import { BrandData, BrandEntity } from '../../../@core/data/brand-entity';
import { Category, CategoryData } from '../../../@core/data/category';
import { Country, CountryData } from '../../../@core/data/country';
import { ImageEntity } from '../../../@core/data/image-entity';
import { Product, ProductData } from '../../../@core/data/product';
import { SmartTableData } from '../../../@core/data/smart-table';


@Component({
  selector: 'ngx-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  prdMstForm: FormGroup;
  submitted:boolean = false;
  buttontext:string = "Save";
  featureText = "";
  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';

  // array for insertion.
  priceFormArray = [];
  attributeFormArrray=[];
  imageList:ImageEntity[]=[];


  users: { name: string, title: string }[] = [
    { name: 'Ceramic-Coated Hawkins Contura (Tomato Red) 3 Litre', title: 'Cooker' },
    { name: 'Ceramic-Coated Hawkins Contura (Apple Green) 3 Litre', title: 'Cooker' }
  ];

  cussettings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      
      feature: {
        title: 'Feature',
        type: 'list',
        config:
      {
        list: ["Material","Surface"]
      },
        editor:
    {
      type: 'list',
      config:
      {
        list: []
      },
    },
      },
      description: {
        title: 'Description',
        type: 'string',
      }
    },
  };

  cussource: LocalDataSource = new LocalDataSource();
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
  constructor(private service: SmartTableData,private fb: FormBuilder
    ,private productService: ProductData
    ,private toastrService: NbToastrService
    ,private countryService:CountryData
    ,private brandService:BrandData
    ,private categoryService:CategoryData
    ,private attributeValueService:AttributeValueData) 
    {
    const data = this.service.getAdditionalFeatureData();
    this.cussource.load(data);
    this.initializeForm();
  }

  ngOnInit(): void {
  }
  onSave()
  {
    this.submitted=true;
    if (!this.prdMstForm.valid) {
      return;
    }
    let req = this.prdMstForm.value;
    req.featurJson = JSON.stringify(req.featureJsonForm);

    this.productService.addProduct(req).subscribe(
      (res)=>{
        if(res.success===true)
        {
          this.showToast(this.types[1],"Success","Product Added Successfully!")
          this.saveProductImageMapping(res.data);
        }
        else
        {
          this.showToast(this.types[4],"Error","Product Insertion Failed!")
        }
      }
    );
  }

  // saveProductAtrribute()
  // {
  //   {
  //     "id": 0,
  //     "attributeId": 0,
  //     "productId": 0,
  //     "deleted": true,
  //     "createdBy": "string",
  //     "createdOnUtc": "2023-04-12T03:23:33.104Z",
  //     "updatedOnUtc": "2023-04-12T03:23:33.104Z"
  //   }
  //   let req:any = [];
  //   this.imageList.forEach(element => {
  //     req.push({productId:productid,pictureId:element.pictureId});
  //   });

  //   this.productService.addProductImagesMapping(req).subscribe(
  //     (res)=>{
  //       console.log("addProductImagesMapping");
  //     }
  //   );

  // }
  saveProductImageMapping(productid:number)
  {
    let req:any = [];
    this.imageList.forEach(element => {
      req.push({productId:productid,pictureId:element.pictureId});
    });

    this.productService.addProductImagesMapping(req).subscribe(
      (res)=>{
        console.log("addProductImagesMapping");
      }
    );

  }
  get f() {return this.prdMstForm.controls;}
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  get featureJson() {
    const control = this.prdMstForm.get('featureJsonForm') as FormArray;
    return control;
  }
  get pricingForm() {
    const control = this.prdMstForm.get('pricingForm') as FormArray;
    return control;
  }
  get attributeForm() {
    const control = this.prdMstForm.get('attributeForm') as FormArray;
    return control;
  }

  addPricing()
  {
    const priceForm = this.fb.group({
      countryValue: [{value: this.f.countryIdSingle.value, disabled: true}, Validators.required],
      mrpValue: [{value: this.f.mrpSingle.value, disabled: true}, Validators.required],
      sellPriceValue: [{value: this.f.sellPriceSingle.value, disabled: true}, Validators.required],
    });
    this.pricingForm.push(priceForm);
    this.f.countryIdSingle.setValue('');
    this.f.mrpSingle.setValue('');
    this.f.sellPriceSingle.setValue('');
  }
  addAttribute()
  {
    const attributeFormSingle = this.fb.group({
      attributeId: [{value: this.f.attributeIdSingle.value, disabled: true}, Validators.required],
      attributeValueId: [{value: this.f.attributeValueIdSingle.value,disabled: true}, Validators.required],
    });
    console.log("attributeValueList",this.f.attributeValueIdSingle.value,this.attributeValueList);
    this.attributeForm.push(attributeFormSingle);
    this.f.attributeIdSingle.setValue('');
    this.f.attributeValueIdSingle.setValue('');
  }
  addFeature() {
    const featureForm = this.fb.group({
      featureValue: [{value: this.f.featureSingle.value, disabled: true}, Validators.required],
    });
    this.featureJson.push(featureForm);
    this.f.featureSingle.setValue('');
  }

  deleteFeature(featureIndex: number) {
    this.featureJson.removeAt(featureIndex);
  }
  deletePricing(pricindIndex: number) {
    this.pricingForm.removeAt(pricindIndex);
  }
  deleteAttribute(attributeIndex: number) {
    this.attributeForm.removeAt(attributeIndex);
  }

  fillAttributeValueByAttributeId(attributeId)
  {
    this.attributeValueFormList = this.attributeValueList.filter(x => x.AttributeId === attributeId);
    console.log("attributeValueFormList",this.attributeValueFormList);
  }

  fileBrowseHandler(file)
  {
   let res:any = this.productService.addImages(file.item(0),'','');
      if(res){
        if(res.success===true)
        {
          this.showToast(this.types[1],"Success","Media Added successfully!")
          this.imageList.push(res.data);
        }
        else
        {
          this.showToast(this.types[4],"Error","Error while uploading media!")
        }
      }
  }
  initializeForm()
  {
    this.prdMstForm = this.fb.group({
      id: this.fb.control(0),
      name: this.fb.control("", [Validators.required]),
      metaKeywords: this.fb.control(""),
      metaTitle: this.fb.control(""),
      metaDescription: this.fb.control(""),
      productCode: this.fb.control(""),
      categoryId: this.fb.control(0),
      categoryName: this.fb.control(""),
      doc: this.fb.control(""),
      brandName: this.fb.control(""),
      brandId: this.fb.control(0),
      gtin: this.fb.control(""),
      requiredProductIds: this.fb.control(""),
      allowedQuantities: this.fb.control(""),
      productTypeId: this.fb.control(0),
      visibleIndividually: this.fb.control(false),
      careInstruction: this.fb.control(""),
      fullDescription: this.fb.control(""),
      featureSingle: this.fb.control(""),
      featureJson: this.fb.control(""),
      featureJsonForm: this.fb.array([]),
      countryIdSingle: this.fb.control(""),
      mrpSingle: this.fb.control(""),
      sellPriceSingle: this.fb.control(""),
      pricingForm:this.fb.array([]),
      attributeIdSingle: this.fb.control(""),
      attributeValueIdSingle: this.fb.control(""),
      attributeForm:this.fb.array([]),
      boxContentsDesc: this.fb.control(""),
      sixDigitHSNCode: this.fb.control(0),
      guranteeMonth: this.fb.control(0),
      eightDigitHSNCode: this.fb.control(0),
      allowCustomerReviews: this.fb.control(true),
      deliveryDateId: this.fb.control(0),
      isTaxExempt: this.fb.control(true),
      manageInventoryMethodId: this.fb.control(0),
      stockQuantity: this.fb.control(0),
      displayStockAvailability: this.fb.control(false),
      displayStockQuantity: this.fb.control(false),
      minStockQuantity: this.fb.control(0),
      notifyAdminForQuantityBelow: this.fb.control(0),
      orderMinimumQuantity: this.fb.control(0),
      orderMaximumQuantity: this.fb.control(0),
      notReturnable: this.fb.control(false),
      disableBuyButton: this.fb.control(false),
      disableWishlistButton: this.fb.control(false),
      salePrice: this.fb.control(0),
      mrp: this.fb.control(0),
      markAsNew: this.fb.control(false),
      markAsNewStartDateTimeUtc: this.fb.control(new Date()),
      markAsNewEndDateTimeUtc: this.fb.control(new Date()),
      weightInKg: this.fb.control(0),
      lengthInCm: this.fb.control(0),
      widthInCm: this.fb.control(0),
      heightInCm: this.fb.control(0),
      cartonWeightInKg: this.fb.control(0),
      cartonLengthInCm: this.fb.control(0),
      cartonWidthInCm: this.fb.control(0),
      cartonHeightInCm: this.fb.control(0),
      baseThicknessInMM: this.fb.control(0),
      casePack: this.fb.control(0),
      createdOnUtc: this.fb.control(new Date()),
      updatedOnUtc: this.fb.control(new Date()),
      availableStartDateTimeUtc: this.fb.control(new Date()),
      availableEndDateTimeUtc: this.fb.control(new Date()),
      published: this.fb.control(false),
      deleted: this.fb.control(false),
      displayOrder: this.fb.control(0),
    });

    // load category
    let reqCat:Category = {operation: "GA"};
    this.categoryService.getCategory(reqCat).subscribe(
      (res)=>{
        if(res.success===true)
        {
          this.categoryList = res.data;
        }
      }
    );

    // load country
    let reqCountry:Country = {operation: "GA",name:"load",twoLetterIsoCode:"load",currency:"load",symbol:"load",id:0};
    this.countryService.getCountry(reqCountry).subscribe(
      (res)=>{
        if(res.success===true)
        {
          this.countryList = res.data;
        }
      }
    );

    // load brand
    let reqBrand:BrandEntity = {operation: "GA",createdBy:"",name:"load"};
    this.brandService.getBrand(reqBrand).subscribe(
      (res)=>{
        if(res.success===true)
        {
          this.brandList = res.data;
        }
      }
    );
    // load attribute
    this.loadAttribute();
    this.loadAttributeValue();
  }

  loadAttribute()
  {
    this.attributeList=[];
    let req:BrandEntity = {operation: "GA",createdBy:"",name:"load",description:"load",attributeFor:"",shape:"",controlType:""};
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
