import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ListingDetailResponse } from '../../interface/listing-detail.interface';

@Component({
  selector: 'app-listing-detail-gallery',
  imports: [],
  templateUrl: './listing-detail-gallery.html',
  styleUrl: './listing-detail-gallery.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingDetailGallery {
  listing = input<ListingDetailResponse | undefined>();

  /** Hasta 5 URLs para el layout fijo de la galería (repite la última si faltan fotos). */
  protected galleryUrls = computed(() => {
    const l = this.listing();
    if (!l) return [] as string[];
    const seen = new Set<string>();
    const urls: string[] = [];
    for (const u of [l.cover_image, ...l.images.map((i) => i.image_url)]) {
      if (u && !seen.has(u)) {
        seen.add(u);
        urls.push(u);
      }
    }
    const base = urls[0] ?? '';
    while (urls.length < 5) {
      urls.push(urls[urls.length - 1] ?? base);
    }
    return urls.slice(0, 5);
  });
}
