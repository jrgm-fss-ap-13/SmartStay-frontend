import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ListingDetailResponse } from '../../interface/listing-detail.interface';

@Component({
  selector: 'app-listing-detail-amenities-section',
  imports: [],
  templateUrl: './listing-detail-amenities-section.html',
  styleUrl: './listing-detail-amenities-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingDetailAmenitiesSection {
  listing = input<ListingDetailResponse | undefined>();
}
