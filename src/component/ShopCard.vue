<script setup lang="ts">
import type { GoodsData } from "@/models/shop.model";

const props = defineProps<GoodsData>();
</script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure><img :src="props.image" :alt="props.title" /></figure>
    <div class="card-body">
      <h2 class="card-title">{{ props.title }}</h2>
      <p>${{ props.price }}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</template>
