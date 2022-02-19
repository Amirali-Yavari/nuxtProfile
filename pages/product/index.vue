<template>
<Title>Products</Title>
    <div ref="el" class="flex flex-col items-center h-screen z-20">
        <div
        class="w-full gap-8 relative flex flex-col items-center justify-center p-5"
        >
            <h1 class="text-center md:text-5xl text-3xl mt-2 text-blue-800">
                Products
            </h1>
            <transition name="product" v-for="data in proddatas" :key="data.key">
            <Product
                :title="data.title"
                v-if="show === data.key"
                :show="show"
                :text="data.text"
                :image="data.image"
            />
            </transition>
        </div>
    </div>
</template>
<script setup>
import {breakpointsTailwind} from "@vueuse/core"
//break points
const breakepoints = useBreakpoints(breakpointsTailwind);
const smLarger = breakepoints.isGreater("sm");
const el = ref(null);
//data
let show = ref(proddatas[0].key);
let firstProduct = ref(proddatas[0].key);
let lastProduct = ref(proddatas[proddatas.length - 1].key);
import proddatas from "@/data/Products"
//change title
const title=useTitle();
title.value="Product"
//function
    function NextProduct() {
      if (show.value != lastProduct.value) {
        show.value += 1;
      } else {
        show.value = proddatas[0].key;
      }
    }
    function PrevProduct() {
      if (show.value != firstProduct.value) {
        show.value -= 1;
      } else {
        show.value = lastProduct.value;
      }
    }
    //onKey
    onKeyStroke("ArrowRight", NextProduct);
    onKeyStroke("ArrowLeft", PrevProduct);
    //use pointer swipe for larger than phone
    if (smLarger) {
      const { direction } = usePointerSwipe(el, {
        onSwipeEnd() {
          if (direction.value == "LEFT") {
            if (show.value != firstProduct.value) {
              show.value -= 1;
            } else {
              show.value = lastProduct.value;
            }
          }
          if (direction.value == "RIGHT") {
            if (show.value != lastProduct.value) {
              show.value += 1;
            } else {
              show.value = proddatas[0].key;
            }
          }
        },
      });
    }
    //use swipe for phone size
    if (smLarger === false) {
      const { direction } = useSwipe(el, {
        onSwipeEnd() {
          if (direction.value == "RIGHT") {
            if (show.value != firstProduct.value) {
              show.value -= 1;
            } else {
              show.value = lastProduct.value;
            }
          }
          if (direction.value == "LEFT") {
            if (show.value != lastProduct.value) {
              show.value += 1;
            } else {
              show.value = proddatas[0].key;
            }
          }
        },
      });
    }
</script>
<style scoped>
.product-enter-from {
  opacity: 0;
  transform: translateY(-50px);
  transition: all 1s ease;
}
.product-enter-to {
  opacity: 1;
  transform: translateY(0);
  transition: all 1s ease;
}
</style>>