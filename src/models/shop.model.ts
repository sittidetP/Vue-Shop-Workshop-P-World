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

export interface GoodsDetailData {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface ShopCheckoutData {
  firstname: string;
  lastname: string;
  productId: number;
  quantity: number;
  address: string;
}

export interface CheckoutAPIResponse {
  status: string;
  error: string;
}
