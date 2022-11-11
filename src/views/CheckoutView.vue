<script setup lang="ts">
import type { GoodsDetailData, ShopCheckoutData } from "@/models/shop.model";
import { Checkout, GetGoodsById } from "@/services/shop.service";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();

const goodsID = route.params.id;

const quantity = ref(1);
const firstName = ref("");
const lastName = ref("");
const address = ref("");

const goods = ref<GoodsDetailData>();

GetGoodsById(Number(goodsID)).then((value) => (goods.value = value));

const router = useRouter();

const onNavigateBack = () => router.back();

const submit = () => {
  const checkoutData: ShopCheckoutData = {
    firstname: firstName.value,
    lastname: lastName.value,
    productId: Number(goodsID),
    quantity: quantity.value,
    address: address.value,
  };
  console.log(checkoutData);
  Checkout(checkoutData)
    .then(function (response) {
      router.push({ name: "success" });
    })
    .catch(function (error) {
      console.log(error);
      alert("Error: Some input isn't filled.");
    });
};
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
            v-model="quantity"
            type="number"
            min="1"
            class="input input-bordered border-black"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-col" style="width: 90%">
      <div class="flex gap-4">
        <input
          v-model="firstName"
          type="text"
          placeholder="First Name"
          class="input w-full input-bordered max-w-sm flex-1"
        />
        <input
          type="text"
          v-model="lastName"
          placeholder="Last Name"
          class="input w-full input-bordered max-w-sm flex-1"
        />
      </div>
    </div>
    <textarea
      v-model="address"
      class="textarea input-bordered"
      style="width: 90%; height: 100px"
      placeholder="Address"
    ></textarea>
    <button class="btn btn-primary" @click="submit()">Submit</button>
  </div>
</template>
