<template>
  <div class="flex justify-between w-full h-full">
    <div>
      <router-link to="/"><img src="../assets/icons/Group.svg" alt="" /></router-link>
    </div>
    <div class="w-1/2">
      <el-carousel interval="4000" class="rounded-3xl bg-no-repeat bg-center" height="800px">
        <el-carousel-item v-for="image of images" :key="image">
          <img style="height: 100%" :src="image" alt="" />{{ image }}
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: ''
})
import img1 from '../assets/bench.jpeg'
import img2 from '../assets/pool.jpeg'
import img3 from '../assets/maldives.jpeg'

const images = [img1, img2, img3]
</script>

<style scoped></style>
