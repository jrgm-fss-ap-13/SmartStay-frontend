import { Routes } from "@angular/router";

import { ListingDetailPage } from "./pages/listing-detail-page/listing-detail-page";
import { MainLayout } from "../../layout/pages/main-layout/main-layout";
import { ListingIndex } from "./pages/listing-index/listing-index";
import { ListingsPage } from "./pages/listings-page/listings-page";



export const LISTINGS_ROUTES: Routes = [

{
  path: '',
  component: MainLayout,
  children: [

    // INDEX
    {
      path: '',
      component: ListingIndex
    },

    // SEARCH PAGE (TIPO AIRBNB)
    {
      path: 's/:location/homes',
      component: ListingsPage
    },
    // DETAIL (SIEMPRE AL FINAL)
    {
      path: 'rooms/:id',
      component: ListingDetailPage
    },
  ]
}

]

export default LISTINGS_ROUTES;