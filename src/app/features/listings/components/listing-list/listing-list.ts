import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ListingCard } from "../listing-card/listing-card";
import { Listing } from '../../interface/listing.interface';

@Component({
  selector: 'app-listing-list',
  imports: [ListingCard],
  templateUrl: './listing-list.html',
  styleUrl: './listing-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingList {

  listings_list = input<Listing[]>();

 }
