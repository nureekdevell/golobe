<template>
  <header class="max-w-full">
    <div>
      <div>
        <router-link :to="{ name: 'home' }"
          ><img src="../assets/icons/airplane.svg" alt="" />Find Flight</router-link
        >
        <router-link :to="{ name: 'stays' }"
          ><img src="../assets/icons/airplane.svg" alt="" />Find Stays</router-link
        >
      </div>
      <div class="logo">
        <router-link :to="{ name: 'home' }"
          ><img src="../assets/icons/Group.svg" alt="Home"
        /></router-link>
      </div>
      <div>
        <router-link to=""></router-link>
        <router-link to=""></router-link>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style scoped></style>
