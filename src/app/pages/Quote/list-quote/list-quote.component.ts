import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { QuoteService } from '../../../@core/services/quote.service';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-list-quote',
  templateUrl: './list-quote.component.html',
  styleUrls: ['./list-quote.component.scss']
})
export class ListQuoteComponent implements OnInit {

  cussource: LocalDataSource = new LocalDataSource();
  dataSource: LocalDataSource = new LocalDataSource();

  QuoteList: any = [];
  jsonData: any = [];
  minDate: any = "";

  cussettings = {
    columns: {
      customerName: {
        title: 'Customer Name',
        type: 'string',
        filter: true
      },
      emailId: {
        title: 'Email Id',
        type: 'string',
        filter: true
      },
      mobileNo: {
        title: 'Mobile Number',
        type: 'number',
        filter: true
      },
      deliveryAddress: {
        title: 'Delivery Address',
        type: 'string ',
        filter: true
      },
      remark: {
        title: 'Remark',
        type: 'string',
        filter: true
      },
      modeOfCommunication: {
        title: 'Mode Of Communication',
        type: 'string',
        filter: true
      },
      createdOn: {
        title: 'Created On',
        type: 'Date',
        filter: true
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
      custom: [{ name: 'onCustomShow', title: '<i class="fa fa-eye fa-xs"></i>' }],
      position: 'left'
    }
  };

  details = {
    columns: {
      ProductId: {
        title: 'Product Id',
        type: 'number',
        filter: true
      },
      ProductName: {
        title: 'Product Name',
        type: 'number',
        filter: true
      },
      Qty: {
        title: 'Quantity',
        type: 'string',
        filter: true
      },
      QuoteOrderId: {
        title: 'QuoteOrder Id',
        type: 'number',
        filter: true
      },
      SalePrice: {
        title: 'Sale Price',
        type: 'number',
        filter: true
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    }
  };

  constructor(private apiData: QuoteService, private dialogService: NbDialogService) {
    let req = { "id": 0, operation: "GA" }
    console.log(req)
    this.apiData.getAllQuote(req).then((res: any) => {
      console.log(res)
      if (res["success"] === true) {
        console.log(res['data'])
        this.QuoteList = res["data"];
        console.log(this.QuoteList)
        this.cussource.load(this.QuoteList);
        this.jsonData = res.data.map(item => item.detail ? JSON.parse(item.detail) : null)
        console.log(this.jsonData);
      }
    })
  }

  ngOnInit(): void {
    this.getDate();
  }

  onCustomAction(event: any) {
    switch (event.action) {
      case 'onCustomShow':
        this.dialogService.open(event.template);
        console.log(this.jsonData);
        this.jsonData.forEach((element, index) => {
          element != null ? this.dataSource.load(this.jsonData[index]) : null;
        });
        console.log(this.dataSource);
        break;
    }
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
  }
}