export interface GoodsAPIData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export interface GoodsData {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}
