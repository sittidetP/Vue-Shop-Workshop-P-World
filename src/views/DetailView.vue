<script setup lang="ts">
import type { GoodsDetailData } from "@/models/shop.model";
import { GetGoodsById } from "@/services/shop.service";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();

const route = useRoute();

const goodsID = route.params.id;

const goods = ref<GoodsDetailData>();

GetGoodsById(Number(goodsID)).then((value) => (goods.value = value));

const onNavigateBack = () => router.back();

const onCheckoutPage = (id: number | undefined) => {
  if (id != undefined) router.push({ name: "checkout", params: { id: id } });
};
</script>

<template>
  <button class="btn btn-link" @click="onNavigateBack">Back</button>

  <div class="flex flex-col gap-4 items-center">
    <div class="flex">
      <figure>
        <img :src="goods?.image" :alt="goods?.title" width="300" height="300" />
      </figure>
      <div class="flex flex-col p-6 justify-between">
        <article class="prose prose-xl">
          <h3>{{ goods?.title }}</h3>
          <p>{{ goods?.description }}</p>
          <p class="text-sky-500">${{ goods?.price }}</p>
        </article>
        <div class="flex justify-end">
          <div>
            <button
              class="btn btn-primary text-white"
              @click="onCheckoutPage(goods?.id)"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
