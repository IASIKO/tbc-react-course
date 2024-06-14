export interface Blog {
  picture: string;
  given_name: string;
  title: string;
  description: string;
  ingredients: string;
  instructions: string;
  prep_min: number;
}

export interface EditBlog extends Blog {
  thumbnail: string;
}

export interface BlogInfo extends Blog {
  thumbnail: string;
  id: number;
  user_id: number;
  email: string;
  sub: string;
  added_on: string
}
