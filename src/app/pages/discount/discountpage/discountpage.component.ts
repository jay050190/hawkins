import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DiscountService } from '../../../@core/services/discount.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { Discount } from '../../../@core/data/discount';

@Component({
  selector: 'ngx-discountpage',
  templateUrl: './discountpage.component.html',
  styleUrls: ['./discountpage.component.scss']
})

export class DiscountpageComponent implements OnInit {
  types: NbComponentStatus[] = [
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ];

  isChecked: boolean = false;
  buttontext: string = "Save";
  submitted: boolean = false;
  DiscountForm: FormGroup;
  selectedDiscountTypeId: number;
  Paramid: any;
  couponCodeValue: any;
  editData: any = [];
  minDate:any = "";
  public discountTypes = [];

  constructor(private fb: FormBuilder, private apiDiscount: DiscountService, private actRout: ActivatedRoute, private toastrService: NbToastrService, private router: Router) {
  }

  ngOnInit(): void {
    this.getDate();
    this.initializeForm();
    this.actRout.params.subscribe(params => {
      this.Paramid = params['id']
      console.log(this.Paramid);
      if (this.Paramid) {
        this.loadDiscountData(this.Paramid);
      }
    });

    let d = ''
    this.apiDiscount.getDiscountType(d).subscribe((res: any) => {
      res.data.forEach((val: any) => {
        this.discountTypes.push(val)
      });
    })
  }

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
    console.log(this.isChecked)
    if (!this.isChecked) {
      this.f.maximumDiscountAmount.setValue(null);
    }
  }

  initializeForm() {
    this.DiscountForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      couponCode: this.fb.control('', [Validators.required]),
      discountPercentage: this.fb.control(null, [Validators.required]),
      maximumDiscountAmount: this.fb.control(null),
      startDateUtc: this.fb.control('', [Validators.required]),
      endDateUtc: this.fb.control('', [Validators.required]),
      adminComment: this.fb.control('', [Validators.required]),
      id: this.fb.control(0, [Validators.required]),
      discountTypeId: this.fb.control(0, [Validators.required]),
      usePercentage: this.fb.control(false),
      discountAmount: this.fb.control(0),
      requiresCouponCode: this.fb.control(true),
      isCumulative: this.fb.control(true),
      discountLimitationId: this.fb.control(0),
      limitationTimes: this.fb.control(0),
      maximumDiscountedQuantity: this.fb.control(0),
      appliedToSubCategories: this.fb.control(true),
      deleted: this.fb.control(true),
      createdBy: this.fb.control('string'),
      createdOnUtc: this.fb.control("2023-07-18"),
      updatedOnUtc: this.fb.control("2023-07-18"),
    });
  }

  onSave(): void {
    this.submitted = true;
    if (!this.DiscountForm.valid) {
      return;
    }
    let req: Discount = this.DiscountForm.value;
    if (this.buttontext === "Save")
      req.operation = "I";
    else
      req.operation = "U";
    console.log(req);
    this.apiDiscount.AddDiscount(req).subscribe((res: any) => {
      console.log(res);
      if (res.success === true) {
        this.showToast(this.types[1], "Success", "Add Discount Action Executed Successfully!")
        this.DiscountForm.reset();
        this.f.id.setValue(0);
        this.submitted = false;
        this.isChecked = false;
      }
      else {
        this.showToast(this.types[4], "Error", "Add Discount Insertion Failed!")
      }
    })
  }

  onClear(pageName: string) {
    this.DiscountForm.reset();
    this.f.id.setValue(0);
    this.buttontext = "Save";
    this.submitted = false;
    this.router.navigate([`${pageName}`]);
    this.isChecked = false;
  }

  setForm(editData: any) {
    this.f.name.setValue(editData.Name);
    this.f.couponCode.setValue(editData.CouponCode);
    this.f.discountPercentage.setValue(editData.DiscountPercentage);
    this.f.maximumDiscountAmount.setValue(editData.MaximumDiscountAmount);
    this.f.startDateUtc.setValue(editData.StartDateUtc);
    this.f.endDateUtc.setValue(editData.EndDateUtc);
    this.f.adminComment.setValue(editData.AdminComment);
    this.f.id.setValue(editData.Id);
    this.f.discountTypeId.setValue(editData.DiscountTypeId);
    this.buttontext = "Update";
  }

  loadDiscountData(e: any) {
    let req = { id: this.Paramid, operation: "G" }
    this.apiDiscount.AddDiscount(req).subscribe((res: any) => {
      this.editData = res.data[0];
      console.log(this.editData);
      if (res.success === true) {
        this.setForm(this.editData);
      }
      else {
        this.showToast(this.types[4], "Error", "Invalid Recipe,Redirecting to recipe list");
      }
    })
  }

  saveData(e: any) {
    this.selectedDiscountTypeId = parseInt(e.target.value);
  }

  /*Coupan Code Generator*/
  generateDiscountCoupon(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let coupon = '';

    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      coupon += characters.charAt(randomIndex);
    }
    coupon += '-';

    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      coupon += characters.charAt(randomIndex);
    }
    return coupon;
  }

  generateDiscountCouponCode() {
    const couponPattern = /^[A-Z0-9]{5}-[A-Z0-9]{5}$/;
    let couponCode1 = this.generateDiscountCoupon();

    while (!couponPattern.test(couponCode1)) {
      couponCode1 = this.generateDiscountCoupon();
    }
    console.log(couponCode1)
    this.couponCodeValue = couponCode1;
    console.log(this.couponCodeValue)
    this.f.couponCode.setValue(this.couponCodeValue);
    return couponCode1;
  }

  formatDate(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  getDate() {
    const currentDate = new Date();
    const minDate = this.formatDate(currentDate);
    console.log(minDate);
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

  get f() { return this.DiscountForm.controls; }
}