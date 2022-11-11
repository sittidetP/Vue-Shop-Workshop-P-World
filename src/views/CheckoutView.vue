<script setup lang="ts">
import type { GoodsDetailData } from "@/models/shop.model";
import { GetGoodsById } from "@/services/shop.service";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();

const goodsID = route.params.id;

const goods = ref<GoodsDetailData>();

GetGoodsById(Number(goodsID)).then((value) => (goods.value = value));

const router = useRouter();

const onNavigateBack = () => router.back();
</script>
<template>
  <button class="btn btn-link" @click="onNavigateBack">Back</button>
  <div class="flex flex-col gap-4 items-center">
    <article class="prose prose-xl">
      <h2>Checkout</h2>
    </article>
    <div class="flex justify-between" style="width: 90%">
      <figure>
        <img
          class="pr-16"
          :src="goods?.image"
          :alt="goods?.title"
          width="200"
          height="200"
        />
      </figure>
      <div class="flex flex-col gap-4 items-end">
        <h4 class="text-2xl font-bold">{{ goods?.title }}</h4>
        <div class="flex gap-5 items-center">
          <h6 class="text-xl">Quantity:</h6>
          <input
            type="number"
            value="1"
            class="input input-bordered border-black"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-col" style="width: 90%">
      <div class="flex gap-4">
        <input
          type="text"
          placeholder="First Name"
          class="input w-full input-bordered max-w-sm flex-1"
        />
        <input
          type="text"
          placeholder="Last Name"
          class="input w-full input-bordered max-w-sm flex-1"
        />
      </div>
    </div>
    <textarea
      class="textarea input-bordered"
      style="width: 90%; height: 100px"
      placeholder="Address"
    ></textarea>
    <button class="btn btn-primary">Submit</button>
  </div>
</template>
