import { Observable } from 'rxjs';
export interface Discount {
    id?: number,
    name?: string;
    couponCode?: string;
    maximumDiscountAmount?: number;
    startDateUtc?: Date;
    endDateUtc?: Date;
    adminComment?: string;
    discountTypeId?: number;
    usePercentage?: boolean;
    discountPercentage?: number;
    discountAmount?: number;
    requiresCouponCode?: boolean;
    isCumulative?: boolean;
    discountLimitationId?: number;
    limitationTimes?: number;
    maximumDiscountedQuantity?: number;
    appliedToSubCategories?: boolean;
    deleted?: boolean;
    createdBy?: string;
    createdOnUtc?: Date;
    updatedOnUtc?: Date;
    operation?: string;
}

export abstract class DiscountData {
    abstract getAllDiscount(req: Discount): Promise<any>;
    abstract AddDiscount(req: Discount): Observable<any>;
    abstract DeleteDiscount (req:Discount): Observable<any>;
}
