import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ListingFormIndex } from "../../components/listing-form-index/listing-form-index";
import { ListingPlaceCategory } from "../../components/listing-place-category/listing-place-category";
import { ListingPopularDestination } from "../../components/listing-popular-destination/listing-popular-destination";
import { ListingRecommended } from "../../components/listing-recommended/listing-recommended";
import { ListingService } from '../../services/listing.service';
import { ListingList } from "../../components/listing-list/listing-list";

@Component({
  selector: 'app-listing-index',
  imports: [ListingPlaceCategory, ListingPopularDestination, ListingRecommended, ListingList],
  templateUrl: './listing-index.html',
  styleUrl: './listing-index.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingIndex implements OnInit {

  private listingService = inject(ListingService);

  listingsResource = rxResource({
    stream: () => this.listingService.getListings(),
    defaultValue: []
  });

  ngOnInit(): void {
    console.log(this.listingsResource.value());
  }

}
