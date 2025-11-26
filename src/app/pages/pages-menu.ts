import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'MASTER',
    group: true,
  },
  {
    title: 'Category',
    icon: 'layers-outline',
    link: '/pages/category',
    home: true,
  },
  {
    title: 'Recipe',
    icon: 'cube-outline',
    children: [
      {
        title: 'List',
        link: '/pages/recipe/list-recipe',
      },
      {
        title: 'Add New',
        link: '/pages/recipe/add-recipe',
      }
    ]
  },
  {
    title: 'Product',
    icon: 'cube-outline',
    children: [
      {
        title: 'List',
        link: '/pages/product/list-product',
      },
      {
        title: 'Add New',
        link: '/pages/product/add-product',
      },
      {
        title: 'Variation Mapping',
        link: '/pages/product/add-product',
      },
      {
        title: 'Export Product',
        link: '/pages/product/export-product',
      }
    ]
  },
  {
    title: 'Brand',
    icon: 'award-outline',
    link: '/pages/brand',
    home: true,
  },
  {
    title: 'Country',
    icon: 'globe-outline',
    link: '/pages/country',
    home: true,
  },
  {
    title: 'Attribute',
    icon: 'file-text-outline',
    children: [
      {
        title: 'Options',
        link: '/pages/option',
      },
      {
        title: 'Values',
        link: '/pages/value',
      }
    ]
  },
  // {
  //   title: 'Orders',
  //   icon: 'shopping-bag-outline',
  //   link: '/pages/dashboard',
  //   home: true,
  // },
  {
    title: 'Customers',
    icon: 'person-outline',
    link: '/pages/customer',
    home: true,
  },
  {
    title: 'Product-discount',
    icon: 'percent-outline',
      children: [
      {
        title: 'Product Discount List',
        link: '/pages/discount/list-discount',
      },
      {
        title: 'Add Product Discount',
        link: '/pages/discount/discountpage',
      }
    ]
  },
  {
    title: 'Quote',
    icon: 'pricetags-outline',
      children: [
      {
        title: 'Quote List',
        link: '/pages/Quote/list-quote',
      }
    ]
  },

  
  // {
  //   title: 'Blog',
  //   icon: 'clipboard-outline',
  //   link: '/pages/dashboard',
  //   home: true,
  // },
  // {
  //   title: 'Gift Card',
  //   icon: 'gift-outline',
  //   link: '/pages/dashboard',
  //   home: true,
  // },
  // {
  //   title: 'Auth',
  //   icon: 'lock-outline',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
