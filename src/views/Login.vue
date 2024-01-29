<template>
  <div class="flex container justify-between w-full max-h-full">
    <div class="w-1/2">
      <router-link to="/"><img src="../assets/icons/Group.svg" alt="" /></router-link>
      <div class="login">
        <h2 class="text-2xl font-semibold">Login</h2>
        <span class="text-sm text-gray-500">Login to access your Golobe account</span>
        <n-button> Success </n-button>
        <n-button native type="error"> Error </n-button>
        <n-button tertiary type="primary"> Primary </n-button>

        <n-button color="#8a2be2">
          <template #icon>
            <n-icon>
              <cash-icon />
            </n-icon>
          </template>
          #8a2be2
        </n-button>
        <n-button strong secondary type="tertiary"> Tertiary </n-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import img1 from '../assets/1.png'
import img2 from '../assets/2.jpeg'
import img3 from '../assets/3.jpeg'
import { NButton } from 'naive-ui'

const images = [img1, img2, img3]
</script>

<style scoped></style>
