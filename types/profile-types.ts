export interface Profile {
  given_name: string;
  family_name: string;
  country: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  sub: string;
  picture: string;
  role?: string;
}

export interface UsersType extends Profile {
  id: number;
}

export interface ReviewsType extends Profile {
  id: number;
  prod_id: number;
  user_id: number;
  rating: number;
  comment: string;
}

export interface ReviewType {
  prod_id: number;
  user_id: number;
  rating: number;
  comment: string;
}

export interface AuthUser extends Profile {
  id: number;
}

export interface CheckoutProfile {
  city: string;
  address: string;
  phone: string;
  sub: string;
}

export interface OrderMetadata {
  id: string;
  address: string;
  city: string;
  phone: string;
}

export interface LatestCharge {
  id: string;
  receipt_url: string;
  refunded: boolean;
  receipt_number: string;
}

export interface Order {
  amount: number;
  currency: string;
  latest_charge: LatestCharge;
  metadata: OrderMetadata;
}
