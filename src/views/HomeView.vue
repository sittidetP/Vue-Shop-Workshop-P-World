<script setup lang="ts">
import type { GoodsData } from "@/models/shop.model";
import { GetGoodsesData } from "@/services/shop.service";
import { ref } from "vue";

const goodsesData = ref<GoodsData[]>([]);

GetGoodsesData().then((value) => (goodsesData.value = value));

console.log(goodsesData);
</script>

<template>
  <div class="container mw-[1024px] mx-auto">
    <div class="text-center text-4xl">Welcome to Shop project !</div>
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
</template>
