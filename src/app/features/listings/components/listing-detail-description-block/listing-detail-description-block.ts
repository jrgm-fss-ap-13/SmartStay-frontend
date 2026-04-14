import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ListingDetailResponse } from '../../interface/listing-detail.interface';

@Component({
  selector: 'app-listing-detail-description-block',
  imports: [],
  templateUrl: './listing-detail-description-block.html',
  styleUrl: './listing-detail-description-block.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingDetailDescriptionBlock {
  listing = input<ListingDetailResponse | undefined>();
}
