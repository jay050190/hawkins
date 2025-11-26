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
  selector: 'ngx-export-product',
  templateUrl: './export-product.component.html',
  styleUrls: ['./export-product.component.scss']
})
export class ExportProductComponent implements OnInit {

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

  
  downloadTemplate()
  {
    this.productService.getBulkUploadTemplate().subscribe(respData => {
      this.downLoadFile(respData, "ProductUploadTemplate.xlsx");
  }, error => {

  });
  }
  downLoadFile(data: any, fileName: string,) {
    const blob = new Blob([data], { type: 'application/octet-stream' });
    const downloadURL= window.URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = downloadURL;
    link.download = fileName;
    link.click();
    //window.open(url);
}
public base64ToBlob(b64Data, sliceSize=512) {
  let byteCharacters = atob(b64Data); //data.file there
  let byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      let slice = byteCharacters.slice(offset, offset + sliceSize);
  
      let byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
      }
      let byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
  }
  return new Blob(byteArrays, {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
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



  fillAttributeValueByAttributeId(attributeId)
  {
    this.attributeValueFormList = this.attributeValueList.filter(x => x.AttributeId === attributeId);
    console.log("attributeValueFormList",this.attributeValueFormList);
  }

  fileBrowseHandler(file)
  {
    this.productService.uploadProduct(file.item(0)).subscribe(
      (res)=>{
        if(res.success===true)
        {
          let blob = this.base64ToBlob(res.data);
          this.downLoadFile(blob, "ProductUploadResponse.xlsx");
          this.showToast(this.types[1],"Success",res.message)
          this.imageList.push(res.data);
        }
        else
        {
          this.showToast(this.types[4],"Error",res.message)
        }
      }
    );
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
