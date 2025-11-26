import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbComponentStatus, NbDialogService, NbGlobalLogicalPosition, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { Category, CategoryData } from '../../@core/data/category';
import { ImageControlComponent } from '../../ecommerce/widget/image-control/image-control.component';

@Component({
  selector: 'ngx-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryList:Category[];
  categoryMstForm: FormGroup;
  submitted:boolean = false;
  buttontext:string = "Save";

  types: NbComponentStatus[] = [
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ];

  cussettings = {
    columns: {   
      name: {
        title: 'Category',
        type: 'string',
        filter: true
      },
      categoryName: {
        title: 'Hierarchy',
        type: 'string',
        filter: true
      }
    },
    actions: {
    add: false,
    edit: false,
    delete: false,
    custom: [
      { name: 'onCustomEdit', title: '<i class="fa fa-edit fa-xs"></i>' },
      { name: 'OnCustomDelete', title: '<i class="fa fa-trash fa-xs"></i>'},
      { name: 'OnCustomUpload', title: '<i class="fa fa-picture-o fa-xs">'}
    ],
    position: 'left'
    }
  };

  cussource: LocalDataSource = new LocalDataSource();
 
  constructor(private fb: FormBuilder, private categoryService: CategoryData,private toastrService: NbToastrService,private dialogService:NbDialogService) {
    this.categoryMstForm = this.fb.group({
      id: this.fb.control(0),
      name: this.fb.control("", [Validators.required]),
      description: this.fb.control(""),
      parentCategoryId: this.fb.control(0)
    });

    this.loadCategory();
  }
  ngOnInit()
  {

  }
  get f()
  {
    return this.categoryMstForm.controls;
  }
  loadCategory()
  {
    this.categoryList=[];
    let req:Category = {operation: "GA"};
    this.categoryService.getCategory(req).subscribe(
      (res)=>{
        if(res.success===true)
        {
          this.categoryList = res.data;
          this.cussource.load(this.categoryList);
        }
      }
    );
  }
  onClear()
  {
    this.categoryMstForm.reset();
    this.f.parentCategoryId.setValue(0);
    this.buttontext = "Save";
    this.submitted = false;
  }
  onSave()
  {
    this.submitted=true;
    if (!this.categoryMstForm.valid) {
      return;
    }
    let req:Category = this.categoryMstForm.value;
    if(this.buttontext === "Save")
      req.operation = "I";
    else
      req.operation = "U";

    req.deleted = false;

    if(req.parentCategoryId===0)
    {
      req.parentCategoryId = null;
    }
    this.categoryService.dmlCategory(req).subscribe(
      (res)=>{
        if(res.success===true)
        {
          this.showToast(this.types[1],"Success","Category Inserted Successfully!")
          this.onClear();
          this.loadCategory();
        }
        else
        {
          this.showToast(this.types[4],"Error","Category Insertion Failed!")
        }
      }
    );
  }

  onCustomAction(event) {
    switch ( event.action) {
      case 'onCustomEdit':
        this.onEditClick(event);
        break;
     case 'OnCustomDelete':
        this.onDeleteConfirm(event);
     case 'OnCustomUpload':
        this.onUploadConfirm(event);
    }
  }

  onEditClick(event): void {
    this.buttontext = "Update";
    this.f.id.setValue(event.data.id);
    this.f.name.setValue(event.data.name);
    this.f.description.setValue(event.data.description);
    this.f.parentCategoryId.setValue(event.data.parentCategoryId);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      let req:Category = event.data;
      req.operation = "D";
      this.categoryService.dmlCategory(req).subscribe(
        (res)=>{
          if(res.success===true)
          {
            this.showToast(this.types[1],"Success","Category Deleted Successfully!")
            this.loadCategory();
          }
          else
          {
            this.showToast(this.types[4],"Error","Category Deletion Failed!")
          }
        }
      );
    } 
  }

  onUploadConfirm(event): void {
    let params = event.data;
    this.dialogService.open(ImageControlComponent, {
      context: {
        title: 'Category Images',
        data: params
      },
    });
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
