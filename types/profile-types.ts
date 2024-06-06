export interface Profile {
  id: number;
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
