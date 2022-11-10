<script setup lang="ts">
import ShopCard from "@/component/ShopCard.vue";
import type { GoodsData } from "@/models/shop.model";
import { GetGoodsesData } from "@/services/shop.service";
import { ref } from "vue";

const goodsesData = ref<GoodsData[]>([]);

GetGoodsesData().then((value) => (goodsesData.value = value));

console.log(goodsesData);
</script>

<template>
  <div class="container mw-[1024px] mx-auto">
    <div class="flex flex-col gap-8 items-center">
      <div class="flex gap-8 flex-wrap justify-center">
        <ShopCard
          v-for="goods of goodsesData"
          :key="goods.id"
          :id="goods.id"
          :category="goods.category"
          :title="goods.title"
          :price="goods.price"
          :image="goods.image"
        >
        </ShopCard>
        <!-- <PokemonCard
          v-for="pokemon of pokemons"
          :key="pokemon.name"
          :name="pokemon.name"
          :img="pokemon.img"
          @view-detail="onViewDetail"
        ></PokemonCard> -->
      </div>
    </div>
  </div>
</template>
