import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ListingDetailResponse } from '../../interface/listing-detail.interface';

@Component({
  selector: 'app-listing-detail-host-block',
  imports: [],
  templateUrl: './listing-detail-host-block.html',
  styleUrl: './listing-detail-host-block.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingDetailHostBlock {
  listing = input<ListingDetailResponse | undefined>();
}
