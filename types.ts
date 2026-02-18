export interface ProductPoint {
  id: number;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Review {
  id: number;
  user: string;
  date: string;
  rating: number;
  content: string;
  image: string;
}
