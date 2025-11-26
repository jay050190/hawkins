import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
 selector: 'img-thumbnail',
 styles:['.circular-portrait { position: relative; width: 40px; height: 40px; overflow: hidden; border-radius: 50%; }'],
 template: `
   <div>
     <img [src]="convImage"  class="circular-portrait"/>
   </div>
`,
})
export class ImgThumbnail implements OnInit {
  @Input() value: string;
  @Input() rowData: any;
  convImage:any;
  constructor(private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    if(this.value)
    {
    let objectURL = 'data:image/png;base64,' + this.value;
    this.convImage = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    console.log(this.rowData);
    }
    else
    {
      this.convImage = "assets/images/no-image.png";
    }
    // const reader = new FileReader();
    // reader.onload = (e) => this.convImage = e.target.result;
    // reader.readAsDataURL(new Blob([this.value]));
}
}