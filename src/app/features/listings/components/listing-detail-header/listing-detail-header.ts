import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ListingDetailResponse } from '../../interface/listing-detail.interface';

@Component({
  selector: 'app-listing-detail-header',
  imports: [],
  templateUrl: './listing-detail-header.html',
  styleUrl: './listing-detail-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingDetailHeader {
  listing = input<ListingDetailResponse | undefined>();
}
