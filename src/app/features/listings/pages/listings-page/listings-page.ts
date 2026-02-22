import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListingPopularDestination } from "../../components/listing-popular-destination/listing-popular-destination";
import { ListingRecommended } from "../../components/listing-recommended/listing-recommended";
import { ListingPlaceCategory } from "../../components/listing-place-category/listing-place-category";
import { ListingFormIndex } from "../../components/listing-form-index/listing-form-index";

@Component({
  selector: 'app-listings-page',
  imports: [ListingPopularDestination, ListingRecommended, ListingPlaceCategory, ListingFormIndex],
  templateUrl: './listings-page.html',
  styleUrl: './listings-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingsPage { }
