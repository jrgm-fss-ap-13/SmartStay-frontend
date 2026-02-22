import { Routes } from "@angular/router";
import { ListingsPage } from "./pages/listings-page/listings-page";
import { MyListingsPage } from "./pages/my-listings-page/my-listings-page";
import { ListingCreatePage } from "./pages/listing-create-page/listing-create-page";
import { ListingEditPage } from "./pages/listing-edit-page/listing-edit-page";
import { ListingDetailPage } from "./pages/listing-detail-page/listing-detail-page";
import { MainLayout } from "../../layout/pages/main-layout/main-layout";



export const LISTINGS_ROUTES: Routes = [

    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                component: ListingsPage
              },
            
              {
                path: 'my',
                component: MyListingsPage
              },
            
              {
                path: 'create',
                component: ListingCreatePage
              },
            
              {
                path: 'edit/:id',
                component: ListingEditPage
              },
            
              {
                path: ':id',
                component: ListingDetailPage
              }
        ]
    }
]

export default LISTINGS_ROUTES;