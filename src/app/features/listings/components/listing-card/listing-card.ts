import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Listing } from '../../interface/listing.interface';

@Component({
  selector: 'app-listing-card',
  imports: [RouterLink],
  templateUrl: './listing-card.html',
  styleUrl: './listing-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingCard {

  listing = input<Listing>();

 }
