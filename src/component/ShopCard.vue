<script setup lang="ts">
import { useRouter } from "vue-router";

const props = defineProps<{
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}>();

const emits = defineEmits<{
  (e: "viewDetail", id: number): void;
}>();

const onClickViewDetail = (id: number) => {
  emits("viewDetail", id);
};
</script>

<template>
  <div class="card w-80 bg-base-100 shadow-xl">
    <figure>
      <img :src="props.image" :alt="props.title" width="70" height="70" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ props.title }}</h2>
      <p>${{ props.price }}</p>
    </div>
    <button class="btn btn-primary" @click="onClickViewDetail(props.id)">
      View More
    </button>
  </div>
</template>
