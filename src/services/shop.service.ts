import type { GoodsAPIData, GoodsData } from "@/models/shop.model";

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
