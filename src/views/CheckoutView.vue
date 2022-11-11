<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const onNavigateBack = () => router.back();
</script>
<template>
  <button class="btn btn-link" @click="onNavigateBack">Back</button>
  <p>This is Checkout Page</p>
</template>
