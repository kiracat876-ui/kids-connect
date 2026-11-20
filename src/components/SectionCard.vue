<template>
  <div class="card">
    <div class="card__image">
      <svg viewBox="0 0 24 24" fill="none" stroke="#bbb" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
    </div>
    
    <div class="card__content">
      <div class="card__header">
        <h3 class="card__title">{{ title }}</h3>
        <div class="card__badges">
          <span v-if="isFirstFree" class="badge badge--outline">Первое бесплатно</span>
          <span v-if="price" class="badge badge--filled">{{ price }}</span>
          <span v-if="isFree" class="badge badge--filled">Бесплатно</span>
        </div>
      </div>
      
      <div class="card__tags">
        <span class="tag">#{{ title.split('(')[0].trim() }}</span>
      </div>
      
      <div class="card__info">
        <div class="info-row">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-primary)"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          {{ age }}
        </div>
        <div class="info-row">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-primary)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
          {{ address }}
        </div>
        <div class="info-row">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-primary)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          {{ place }}
        </div>
      </div>
      
      <div class="card__footer">
        <div class="card__schedule">
          <div class="info-row">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-primary)"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
            {{ days }}
          </div>
          <div class="times">
            <span v-for="time in times" :key="time" class="time-badge">{{ time }}</span>
          </div>
        </div>
        <router-link :to="`/section/1`" class="btn-detail">Подробнее</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  isFree: Boolean,
  isFirstFree: Boolean,
  price: String,
  age: String,
  address: String,
  place: String,
  days: String,
  times: Array
})
</script>

<style scoped>
.card {
  display: flex;
  gap: 20px;
  background: #fff;
  border-top: 3px solid var(--color-primary);
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}

.card__image {
  width: 200px;
  height: 200px;
  background: #e0e0e0;
  border-radius: 10px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card__image svg { width: 60px; height: 60px; }

.card__content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
  gap: 15px;
}

.card__title {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text);
  max-width: 300px;
}

.card__badges {
  display: flex;
  gap: 10px;
  flex-shrink: 0;
}

.badge {
  padding: 5px 15px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}
.badge--outline { border: 1px solid var(--color-accent); color: var(--color-primary); }
.badge--filled { background: var(--color-accent); color: #fff; }

.card__tags { margin-bottom: 15px; }
.tag { color: var(--color-accent); font-size: 14px; }

.card__info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}

.info-row {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--color-text);
}

.card__footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
}

.card__schedule {
  display: flex;
  align-items: center;
  gap: 15px;
}

.times {
  display: flex;
  gap: 10px;
}

.time-badge {
  background: var(--color-beige);
  padding: 4px 10px;
  border-radius: 5px;
  font-size: 12px;
}

.btn-detail {
  background: var(--color-primary);
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  transition: opacity 0.2s;
}
.btn-detail:hover { opacity: 0.9; }
</style>