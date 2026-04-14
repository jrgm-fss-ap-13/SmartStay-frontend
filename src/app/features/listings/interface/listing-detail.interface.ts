/** Categoría de amenity (anidada en Amenity). */
export interface Category {
  id: number;
  name: string;
  display_name: string;
}

/** Amenity con nombre legible (respuesta API). */
export interface Amenity {
  id: number;
  name: string;
  category: Category;
}

/** Imagen de galería del listing. */
export interface ListingImage {
  id: number;
  image_url: string;
  is_primary: boolean;
}

/** Alias del nombre típico en API (`Image`). */
export type Image = ListingImage;

/** Datos públicos del anfitrión embebidos en el detalle del listing. */
export interface HostInfo {
  profile_image: string;
  full_name: string;
  description: string;
  months_hosting: number;
  profession: string;
  /** Puede venir null desde API */
  rating: string | null;
  total_reviews: number;
  average_rating: number;
}

/** Detalle completo de un listing (GET /api/listings/{id}/). */
export interface ListingDetailResponse {
  id: number;
  host: number;
  host_info: HostInfo;
  title: string;
  description: string;
  property_type: string;
  status: string;
  country: string;
  city: string;
  address: string;
  latitude: string;
  longitude: string;
  base_price: string;
  guests: number;
  max_guests: number;
  bedrooms: number;
  bathrooms: number;
  cleaning_fee: string;
  service_fee_percent: string;
  is_active: boolean;
  /** ISO 8601 en JSON (string) */
  created_at: string;
  /** ISO 8601 en JSON (string) */
  updated_at: string;
  rating: string;
  total_reviews: number;
  cover_image: string;
  images: ListingImage[];
  amenities: Amenity[];
}
