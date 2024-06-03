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
  role?: string
}

export interface AuthUser extends Profile {
  id: number;
}
