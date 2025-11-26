import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
  <strong>Copyright &copy; {{ financialyear }} <a href="http://www.hoawkinscookers.com/" target="_blank">Hawkins Cookers Limited</a>.</strong> All rights reserved.
  `,
})
export class FooterComponent {
  financialyear = "";
  ngOnInit(): void {

    let currentData = new Date();
    let currentYear = currentData.getFullYear();
    if (currentData.getMonth() < 3) {
      this.financialyear = (currentYear - 1) + "-" + currentYear;
    }
    else {
      this.financialyear = currentYear + "-" + (currentYear + 1);
    }
  }
}
