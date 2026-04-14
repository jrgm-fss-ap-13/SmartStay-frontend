import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ListingDetailResponse } from '../../interface/listing-detail.interface';

@Component({
  selector: 'app-listing-detail-booking-sidebar',
  imports: [],
  templateUrl: './listing-detail-booking-sidebar.html',
  styleUrl: './listing-detail-booking-sidebar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingDetailBookingSidebar {
  listing = input<ListingDetailResponse | undefined>();
  /** Placeholder hasta selector de fechas */
  nights = input(5);

  protected subtotal = computed(() => {
    const l = this.listing();
    if (!l) return 0;
    return parseFloat(l.base_price) * this.nights();
  });

  protected cleaningAmount = computed(() => parseFloat(this.listing()?.cleaning_fee ?? '0'));

  protected serviceFeeAmount = computed(() => {
    const l = this.listing();
    if (!l) return 0;
    const pct = parseFloat(l.service_fee_percent);
    if (Number.isNaN(pct)) return 0;
    return (this.subtotal() * pct) / 100;
  });

  protected total = computed(
    () => this.subtotal() + this.cleaningAmount() + this.serviceFeeAmount(),
  );
}
