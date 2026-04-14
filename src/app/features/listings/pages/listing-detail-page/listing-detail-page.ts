import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, map, switchMap } from 'rxjs';
import { ListingDetailAmenitiesSection } from '../../components/listing-detail-amenities-section/listing-detail-amenities-section';
import { ListingDetailBookingSidebar } from '../../components/listing-detail-booking-sidebar/listing-detail-booking-sidebar';
import { ListingDetailDescriptionBlock } from '../../components/listing-detail-description-block/listing-detail-description-block';
import { ListingDetailGallery } from '../../components/listing-detail-gallery/listing-detail-gallery';
import { ListingDetailHeader } from '../../components/listing-detail-header/listing-detail-header';
import { ListingDetailHighlights } from '../../components/listing-detail-highlights/listing-detail-highlights';
import { ListingDetailHostBlock } from '../../components/listing-detail-host-block/listing-detail-host-block';
import { ListingDetailLocalRecommendations } from '../../components/listing-detail-local-recommendations/listing-detail-local-recommendations';
import { ListingService } from '../../services/listing.service';

@Component({
  selector: 'app-listing-detail-page',
  imports: [
    ListingDetailHeader,
    ListingDetailGallery,
    ListingDetailHostBlock,
    ListingDetailHighlights,
    ListingDetailDescriptionBlock,
    ListingDetailAmenitiesSection,
    ListingDetailLocalRecommendations,
    ListingDetailBookingSidebar,
  ],
  templateUrl: './listing-detail-page.html',
  styleUrl: './listing-detail-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly listingService = inject(ListingService);

  listingResource = rxResource({
    stream: () =>
      this.route.paramMap.pipe(
        map((p) => p.get('id')),
        switchMap((id) =>
          id ? this.listingService.getListingById(Number(id)) : EMPTY,
        ),
      ),
  });
}
