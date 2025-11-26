import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quote, QuoteData } from '../data/quote';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuoteService extends QuoteData {

  async getAllQuote(req: Quote): Promise<any> {
    let model: any;
    await this.http.post(environment.apiURL + `/Master/Quote`, req)
      .toPromise()
      .then(res => { model = res })
      .catch(err => { model = undefined });
    return model;
  }
  constructor(private http: HttpClient) {
    super();
  }
}
