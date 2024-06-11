export interface Blog {
  picture: string;
  given_name: string;
  title: string;
  description: string;
  thumbnail: string;
  ingredients: string;
  instructions: string;
  prep_min: number;
}

export interface BlogInfo extends Blog {
  id: number
}
