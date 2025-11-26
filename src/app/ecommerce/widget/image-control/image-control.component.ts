import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbComponentStatus, NbDialogRef, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { BannerData } from '../../../@core/data/banner';
import { ProductData } from '../../../@core/data/product';

@Component({
  selector: 'ngx-image-control',
  templateUrl: './image-control.component.html',
  styleUrls: ['./image-control.component.scss']
})
export class ImageControlComponent implements OnInit {

  @Input() title: string;
  @Input() data: any;
  mediaGalleryList=[];
  galPIndex:number=0;
  galPSize:number=50;
  imageForm: FormGroup;
  buttontext="Save";
  imageSrc:any;
  selectedFile:any;
  types: NbComponentStatus[] = [
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ];
  constructor(protected ref: NbDialogRef<ImageControlComponent>,
    private prdService:ProductData,
    private bannerService:BannerData,
    private fb: FormBuilder,
    private toastrService:NbToastrService) 
  {
    this.imageForm = this.fb.group({
      id: this.fb.control(0),
      imagename: this.fb.control(""),
      alt: this.fb.control(""),
      title: this.fb.control("")
    });
  }

  // @HostListener("window:scroll", [])
  // onScroll(event): void {
  //   alert('end');
  //   console.log("x: ",window.innerHeight + window.scrollY,"y: ",document.body.offsetHeight);
  //   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
  //     alert('end');
  //   }
  // }


  @HostListener('window:scroll', ['$event']) 
    scrollHandler(event) {
      console.debug("Scroll Event");
    }
  
  dismiss() {
    this.ref.close();
  }


  async ngOnInit() {

    await this.loadMediaGallery();
  }

  async onSave()
  {
    let req:any = this.imageForm.value;
    let res:any = await this.prdService.addImages(this.selectedFile,req.alt,req.title);
    if(res)
    {
      let catres= await this.prdService.updateCategoryImagesMapping(this.data.id,res.data.pictureId);
      if(catres.data.flag == 'true')
      {
        this.showToast(this.types[1],"Success","Image Added successfully!");
      }
      else
      {
        this.showToast(this.types[2],"Error","Error occured while adding image!");
      }
    }
  }
  async onClear()
  {

  }

  get f()
  {
    return this.imageForm.controls;
  }
  readURL(event: any): void {
    this.selectedFile = event.target.files.item(0);
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = e => this.imageSrc = reader.result;

    }
}

  async loadMediaGallery()
  {
    let res = await this.prdService.getMediaGallery(this.galPIndex,this.galPSize);
    this.mediaGalleryList = res.data;
    this.mediaGalleryList.forEach(element => {
        if(element.ThumbnailDoc)
        element.ThumbnailDoc = this.bannerService.getSanitizedImagePath(element.ThumbnailDoc);
        else
        element.ThumbnailDoc = '../../../assets/images/no-image.png'
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
