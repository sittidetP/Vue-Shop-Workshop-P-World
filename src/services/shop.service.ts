import type {
  GoodsAPIData,
  GoodsData,
  GoodsDetailData,
  ShopCheckoutData,
} from "@/models/shop.model";

import axios from "axios";

export const GetGoodsesData = async (): Promise<GoodsData[]> => {
  const { data } = await axios.get<GoodsAPIData[]>(
    "https://e-commerce-workshop-api.vercel.app/api/products"
  );
  return data.map((goodsAPI) => ({
    id: goodsAPI.id,
    title: goodsAPI.title,
    price: goodsAPI.price,
    category: goodsAPI.category,
    image: goodsAPI.image,
  }));
};

export const GetGoodsById = async (id: number): Promise<GoodsDetailData> => {
  const { data } = await axios.get<GoodsAPIData>(
    `https://e-commerce-workshop-api.vercel.app/api/products/${id}`
  );
  return {
    id: data.id,
    title: data.title,
    price: data.price,
    description: data.description,
    image: data.image,
    category: data.category,
  };
};

export const Checkout = async (checkoutData: ShopCheckoutData) => {
  const response = await axios.post(
    "https://e-commerce-workshop-api.vercel.app/api/checkout",
    checkoutData
  );

  return response.data;
};
