import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ListingDetailResponse } from '../interface/listing-detail.interface';
import { Listing } from '../interface/listing.interface';

@Injectable({
    providedIn: 'root'
})
export class ListingService {
    private http = inject(HttpClient);
    private apiUrl = 'http://127.0.0.1:8000/api/listings/';
    private mediaUrl = 'http://127.0.0.1:8000/';

    getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>(this.apiUrl).pipe(
      map((listings: Listing[]) =>
        listings.map(listing => ({
          ...listing,
          cover_image: listing.cover_image
            ? this.resolveCoverImageUrl(listing.cover_image)
            : null
        }))
      )
    );
  }

    getListingById(id: number): Observable<ListingDetailResponse> {
        return this.http
            .get<ListingDetailResponse>(`${this.apiUrl}${id}/`)
            .pipe(map((detail) => this.normalizeListingDetail(detail)));
    }

    private normalizeListingDetail(detail: ListingDetailResponse): ListingDetailResponse {
        return {
            ...detail,
            cover_image: detail.cover_image
                ? this.resolveCoverImageUrl(detail.cover_image)
                : '',
            images: detail.images.map((img) => ({
                ...img,
                image_url: this.resolveCoverImageUrl(img.image_url),
            })),
            host_info: {
                ...detail.host_info,
                profile_image: this.resolveCoverImageUrl(detail.host_info.profile_image),
            },
        };
    }

    private resolveCoverImageUrl(pathOrUrl: string): string {
      if (!pathOrUrl) {
        return pathOrUrl;
      }
      if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
        return pathOrUrl;
      }
      return this.mediaUrl + pathOrUrl.replace(/^\//, '');
    }

}
