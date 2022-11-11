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
</script>

<template>
  <p>This is Detail Page</p>

  <button class="btn btn-link" @click="onNavigateBack">Back</button>

  <div class="flex flex-col gap-4 items-center">
    <p>Detail</p>
    <div class="card shadow-xl"></div>
  </div>
</template>
