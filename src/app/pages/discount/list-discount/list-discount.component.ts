import { Component, OnInit } from '@angular/core';
import { DiscountService } from '../../../@core/services/discount.service';
import { Discount } from '../../../@core/data/discount';
import { LocalDataSource } from 'ng2-smart-table';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-list-discount',
  templateUrl: './list-discount.component.html',
  styleUrls: ['./list-discount.component.scss']
})

export class ListDiscountComponent implements OnInit {
  types: NbComponentStatus[] = [
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ];

  DiscountList = []
  discountlist = []
  cussource: LocalDataSource = new LocalDataSource();

  cussettings = {
    columns: {
      Name: {
        title: 'Name',
        type: 'string',
        filter: true
      },
      MaximumDiscountAmount: {
        title: 'Max discount',
        type: 'number',
        filter: true
      },
      StartDateUtc: {
        title: 'Start date',
        type: 'Date',
        filter: true
      },
      EndDateUtc: {
        title: 'End date',
        type: 'Date',
        filter: true
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
      custom: [{ name: 'onCustomEdit', title: '<i class="nb-edit"></i>' }, { name: 'OnCustomDelete', title: '<i class="nb-trash"></i>' }],
      position: 'left'
    }
  };

  constructor(private apiData: DiscountService, private toastrService: NbToastrService, private router: Router) {
    let req = { operation: "GA" }
    console.log(req)
    this.apiData.getAllDiscount(req).then((res: any) => {
      console.log(res)
      if (res["success"] === true) {
        console.log(res['data'])
        this.DiscountList = res["data"];
        console.log(this.DiscountList)
        this.cussource.load(this.DiscountList);
      }
    })
  }

  async loadDiscount() {
    this.DiscountList = [];
    let req: any = { operation: "GA" };
    await this.apiData.getAllDiscount(req).then((res: any) => {
      console.log(res)
      if (res.success === true) {
        console.log(res.data)
        this.DiscountList = res.data;
        console.log(this.DiscountList)
        this.cussource.load(this.DiscountList);
      }
    })
  }

  onDeleteConfirm(e: any) {
    if (window.confirm('Are you sure you want to delete?')) {
      console.log(e)
      let req: Discount = { operation: "D", id: e.data.Id }
      this.apiData.DeleteDiscount(req).subscribe(
        (res) => {
          if (res.success === true) {
            this.loadDiscount();
            this.showToast(this.types[1], "Success", "Product discount Deleted Successfully!")
          }
          else {
            this.showToast(this.types[4], "Error", "Product discount Deletion Failed!")
          }
        }
      );
    }
  }

  onUpdate(e: any) {
    this.router.navigate([`/pages/discount/discountpage/${e.data.Id}`])
  }

  onCustomAction(event) {
    switch (event.action) {
      case 'OnCustomDelete':
        this.onDeleteConfirm(event);
        break;
      case 'onCustomEdit':
        this.onUpdate(event);
    }
  }

  ngOnInit(): void {
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