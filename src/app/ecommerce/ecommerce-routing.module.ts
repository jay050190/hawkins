import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce.component';

const routes: Routes = [{
  path: '',
  component: EcommerceComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule),
    },
    {
      path: 'home',
      loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule),
    },
    {
      path: 'product-list',
      loadChildren: () => import('./product-list/product-list.module')
      .then(m => m.ProductListModule),
    },
    {
      path: 'product-detail',
      loadChildren: () => import('./product-detail/product-detail.module')
      .then(m => m.ProductDetailModule),
    },
    {
      path: 'my-cart',
      loadChildren: () => import('./my-cart/my-cart.module')
      .then(m => m.MyCartModule),
    },
    {
      path: 'quote-cart',
      loadChildren: () => import('./quote-cart/quote-cart.module')
      .then(m => m.QuoteCartModule),
    },
    {
      path: 'about',
      loadChildren: () => import('./about/about.module')
      .then(m => m.AboutModule),
    },
    {
      path: 'checkout',
      loadChildren: () => import('./checkout/checkout.module')
      .then(m => m.CheckoutModule),
    },
    {
      path: 'user-login',
      loadChildren: () => import('./web-login/web-login.module')
      .then(m => m.WebLoginModule),
    },
    {
      path: 'user-register',
      loadChildren: () => import('./web-register/web-register.module')
      .then(m => m.WebRegisterModule),
    },
    {
      path: 'customer-address',
      loadChildren: () => import('./customer-address/customer-address.module')
      .then(m => m.CustomerAddressModule),
    },
    {
      path: 'send-enquiry',
      loadChildren: () => import('./send-enquiry/send-enquiry.module')
      .then(m => m.SendEnquiryModule),
    },
    {
      path: 'sales-service',
      loadChildren: () => import('./sales-service/sales-service.module')
      .then(m => m.SalesServiceModule),
    },
    {
      path: 'product-registration',
      loadChildren: () => import('./product-registration/product-registration.module')
      .then(m => m.ProductRegistrationModule),
    },
    {
      path: 'current-opening',
      loadChildren: () => import('./current-opening/current-opening.module')
      .then(m => m.CurrentOpeningModule),
    },
    {
      path: 'get-a-quote',
      loadChildren: () => import('./get-a-quote/get-a-quote.module')
      .then(m => m.GetAQuoteModule),
    },

    {
      path: 'request-for-quote',
      loadChildren: () => import('./request-for-quote/request-for-quote.module')
      .then(m => m.RequestForQuoteModule),
    },
    {
      path: 'terms',
      loadChildren: () => import('./terms/terms.module')
      .then(m => m.TermsModule),
    },
    {
      path: 'contact',
      loadChildren: () => import('./contact/contact.module')
      .then(m => m.ContactModule),
    },
    {
      path: 'in-the-beginning',
      loadChildren: () => import('./in-the-beginning/in-the-beginning.module')
      .then(m => m.InTheBeginningModule),
    }
    ,
    {
      path: 'growth-expansion',
      loadChildren: () => import('./growth-expansion/growth-expansion.module')
      .then(m => m.GrowthExpansionModule),
    },
    {
      path: 'our-mission',
      loadChildren: () => import('./our-mission/our-mission.module')
      .then(m => m.OurMissionModule),
    },
    {
      path: 'financial-results',
      loadChildren: () => import('./financial-results/financial-results.module')
      .then(m => m.FinancialResultsModule),
    },
    {
      path: 'contact-details',
      loadChildren: () => import('./contact-details/contact-details.module')
      .then(m => m.ContactDetailsModule),
    },
    {
      path: 'other-information',
      loadChildren: () => import('./other-information/other-information.module')
      .then(m => m.OtherInformationModule),
    },
    {
      path: 'corporate-governance',
      loadChildren: () => import('./corporate-governance/corporate-governance.module')
      .then(m => m.CorporateGovernanceModule),
    },
    {
      path: 'agm',
      loadChildren: () => import('./agm/agm.module')
      .then(m => m.AGMModule),
    },
    {
      path: 'growth-expansion',
      loadChildren: () => import('./growth-expansion/growth-expansion.module')
      .then(m => m.GrowthExpansionModule),
    },
    {
      path: 'shareholding-information',
      loadChildren: () => import('./shareholding-information/shareholding-information.module')
      .then(m => m.ShareholdingInformationModule),
    },
    {
      path: 'vigil-mechanism',
      loadChildren: () => import('./vigil-mechanism/vigil-mechanism.module')
      .then(m => m.VigilMechanismModule),
    },
    {
      path: 'annual-reports',
      loadChildren: () => import('./annual-reports/annual-reports.module')
      .then(m => m.AnnualReportsModule),
    },
    {
      path: 'shareholder-offer',
      loadChildren: () => import('./shareholder-offer/shareholer-offer.module')
      .then(m => m.ShareholderOfferModule),
    },
    {
      path: 'product-part',
      loadChildren: () => import('./product-part/product-part.module')
      .then(m => m.ProductPartModule),
    },
    {
      path: 'authorised-dealers',
      loadChildren: () => import('./authorised-dealers/authorised-dealers.module')
      .then(m => m.AuthorisedDealersModule),
    },
    {
      path: 'rest-world',
      loadChildren: () => import('./rest-world/rest-world.module')
      .then(m => m.RestWorldModule),
    },
    {
      path: 'yourself-repairs',
      loadChildren: () => import('./yourself-repairs/yourself-repairs.module')
      .then(m => m.YourselfRepairsModule),
    },
    {
      path: 'experts2009',
      loadChildren: () => import('./experts2009/experts2009.module')
      .then(m => m.Experts2009Module),
    },
    {
      path: 'experts2010',
      loadChildren: () => import('./experts2010/experts2010.module')
      .then(m => m.Experts2010Module),
    },
    {
      path: 'list-recipie',
      loadChildren: () => import('./recipe-listing/recipe-list.module')
      .then(m => m.RecipeListingModule),
    },
    {
      path: 'recipe-details',
      loadChildren: () => import('./recipe-details/recipe-details.module')
      .then(m => m.RecipeDetailsModule),
    }
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
