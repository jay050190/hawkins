export interface Quote {
    id?: number,
    customerName?: string;
    couponCode?: string;
    emailId?: string;
    mobileNo?: number;
    deliveryAddress?: string;
    remark?: string;
    modeOfCommunication?: string;
    createdOn?: string;
    operation?: string;
}

export abstract class QuoteData {
    abstract getAllQuote(req: Quote): Promise<any>;

}
