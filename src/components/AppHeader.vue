<template>
  <header class="header">
    <div class="header__logo">
      <img :src="logoSrc" alt="" class="header__logo-img" />
    </div>
  </header>
</template>

<script setup>
defineProps({
  logoSrc: {
    type: String,
    default: '/logo.png'
  }
})
</script>

<style scoped>
.header {
  max-width: 1480px;
  margin: 20px auto 0;
  background: var(--color-primary);
  border-radius: 15px;
  padding: 12px 40px;
  display: flex;
  align-items: center;
  min-height: 100px;
}

.header__logo {
  display: flex;
  align-items: center;
}

.header__logo-img {
  height: 55px;
  width: auto;
  max-width: 300px;
  object-fit: contain;
}
</style>