<template>
  <header class="header">
    <div class="header__logo">
      <!-- Подставляем нужную картинку в зависимости от пропса isDetail -->
      <img :src="isDetail ? '/kids-connect/logo-detail.png' : '/kids-connect/logo.png'" alt="KidsConnect" class="header__logo-img" />
    </div>
  </header>
</template>

<script setup>
defineProps({
  isDetail: {
    type: Boolean,
    default: false
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