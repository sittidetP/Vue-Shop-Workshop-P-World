<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const onNavigateHome = () => router.push({ name: "home" });
</script>

<template>
  <h1 class="text-xl">Checkout Success!!</h1>
  <button class="btn btn-link" @click="onNavigateHome">Back To Home</button>
</template>
