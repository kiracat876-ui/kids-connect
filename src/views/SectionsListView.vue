<script setup>
import { ref } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import SectionCard from '../components/SectionCard.vue'

const mockSections = [
  { title: 'Тяжелая атлетика (в Юбилейном мкр.)', isFree: true, age: '10-18 лет', address: 'г. Иркутск, Юбилейный мкр., стр. 49/1', place: 'ФОК "Юбилейный"', days: 'Пн, Ср, Пт', times: ['09:00 - 10:30', '12:00 - 13:30', '18:00 - 19:30'] },
  { title: 'Тяжелая атлетика (на ул. Боткина)', isFirstFree: true, price: '500 руб.', age: '10-18 лет', address: 'г. Иркутск, Юбилейный мкр., стр. 49/1', place: 'ФОК "Юбилейный"', days: 'Пн, Ср, Пт', times: ['09:00 - 10:30', '12:00 - 13:30'] },
  { title: 'Тяжелая атлетика (на ул. Норильской)', isFirstFree: true, price: '3200 руб.  8 занятий', age: '10-18 лет', address: 'г. Иркутск, Юбилейный мкр., стр. 49/1', place: 'ФОК "Юбилейный"', days: 'Пн, Ср, Пт', times: ['09:00 - 10:30', '12:00 - 13:30', '18:00 - 19:30'] },
  { title: 'Пауэрлифтинг', isFree: true, age: '10-18 лет', address: 'г. Иркутск, Юбилейный мкр., стр. 49/1', place: 'ФОК "Юбилейный"', days: 'Пн, Ср, Пт', times: ['09:00 - 10:30', '12:00 - 13:30', '18:00 - 19:30'] },
]

const martialArts = [
  { title: 'Дзюдо', isFree: true, age: '6-18 лет', address: 'г. Иркутск, ул. Трудовая, д. 11Б', place: 'СК "Вымпел"', days: 'Пн, Ср, Пт', times: ['09:00 - 10:30', '12:00 - 13:30', '18:00 - 19:30'] },
  { title: 'Вольная борьба (на ул. Норильская)', isFirstFree: true, price: '3200 руб. в месяц', age: '6-18 лет', address: 'г. Иркутск, ул. Трудовая, д. 11Б', place: 'СК "Вымпел"', days: 'Пн, Ср, Пт', times: ['09:00 - 10:30', '12:00 - 13:30', '18:00 - 19:30'] },
]

const martialArtsNoFree = [
  { title: 'Дзюдо', isFree: true, age: '6-18 лет', address: 'г. Иркутск, ул. Трудовая, д. 11Б', place: 'СК "Вымпел"', days: 'Пн, Ср, Пт', times: ['09:00 - 10:30', '12:00 - 13:30', '18:00 - 19:30'] },
  { title: 'Вольная борьба (на ул. Норильская)', price: '3200 руб. в месяц', age: '6-18 лет', address: 'г. Иркутск, ул. Трудовая, д. 11Б', place: 'СК "Вымпел"', days: 'Пн, Ср, Пт', times: ['09:00 - 10:30', '12:00 - 13:30', '18:00 - 19:30'] },
]

const isAgeOpen = ref(false)
const isCatalogOpen = ref(true)

const filters = [
  { title: 'ДПИ и ремесла' },
  { title: 'Техническое конструирование' },
  { title: 'Словесность' },
  { title: 'Иностранные языки' },
  { title: 'Развитие интеллекта' },
  { title: 'Информационные технологии' },
  { title: 'История и Традиции' },
  { title: 'Педагогика' },
  { title: 'Музыка и звук' },
  { title: 'Пение' },
  { title: 'Хореография(танцы)' },
  { title: 'Зрелищные искусства' },
  { title: 'Мода и стиль' },
  { title: 'Познавательные развлечения' },
  { title: 'Туризм' },
  { title: 'Естественные науки' },
  { title: 'Люди и животные' },
  { title: 'Эстетические виды спорта' },
  { title: 'Технические виды спорта' },
  { title: 'Командно-игровой спорт' },
  { title: 'Индивидуально игровой спорт' },
  { title: 'Водные виды спорта' },
  { title: 'Лёгкая атлетика и гимнастика' },
  { title: 'Физкультура' },
]
</script>

<template>
  <div class="page-wrapper">
    <AppHeader />
    
    <main class="main-container">
      <div class="top-bar">
        <div class="search-box">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" placeholder="Поиск" />
        </div>
        
        <div class="tabs">
          <button class="tab active">Все</button>
          <button class="tab">Платные</button>
          <button class="tab">Бесплатные</button>
        </div>
        
        <button class="map-btn">
          На карте 
          <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-primary)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
        </button>
      </div>

      <div class="content-wrapper">
        <div class="sections-list">
          <h2 class="section-title">Силовой спорт</h2>
          <SectionCard v-for="(section, index) in mockSections" :key="index" v-bind="section" />
          
          <h2 class="section-title">Единоборства</h2>
          <SectionCard v-for="(section, index) in martialArts" :key="'m1-'+index" v-bind="section" />
          
          <h2 class="section-title">Единоборства</h2>
          <SectionCard v-for="(section, index) in martialArtsNoFree" :key="'m2-'+index" v-bind="section" />
          
          <h2 class="section-title">Единоборства</h2>
          <SectionCard v-for="(section, index) in martialArts" :key="'m3-'+index" v-bind="section" />
        </div>

        <aside class="sidebar">
          <h2 class="section-title">Фильтры</h2>
          <div class="filters-box">
            <div class="filter-group">
              <div class="filter-header" @click="isAgeOpen = !isAgeOpen">
                Возраст 
                <span class="arrow" :class="{ 'rotated': isAgeOpen }">⌄</span>
              </div>
              <div v-show="isAgeOpen" class="filter-content">
                <p>Любой</p>
              </div>
            </div>
            
            <div class="filter-group">
              <div class="filter-header">Пол</div>
              <div class="filter-content checkboxes">
                <label><input type="checkbox" checked> Мужской</label>
                <label><input type="checkbox" checked> Женский</label>
              </div>
            </div>

            <div class="filter-group">
              <div class="filter-header" @click="isCatalogOpen = !isCatalogOpen">
                Каталог
                <span class="arrow" :class="{ 'rotated': isCatalogOpen }">⌄</span>
              </div>
              <div v-show="isCatalogOpen" class="filter-content">
                <div class="catalog-item main">
                  Силовой спорт <span class="count">3</span> 
                </div>
                <ul class="catalog-sub">
                  <li>Тяжелая атлетика <span class="count">3</span></li>
                  <li>Пауэрлифтинг <span class="count">1</span></li>
                </ul>
                
                <div class="catalog-item main">
                  Единоборства <span class="count">2</span> 
                </div>
                <ul class="catalog-sub">
                  <li>Вольная борьба <span class="count">1</span></li>
                  <li>Дзюдо <span class="count">1</span></li>
                </ul>
              </div>
            </div>

            <div v-for="(filter, index) in filters" :key="index" class="filter-group simple">
              <div class="filter-header">
                {{ filter.title }} <span class="arrow">⌄</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  </div>
</template>

<style scoped>
.page-wrapper { min-height: 100vh; background-color: #FFFFFF; padding-bottom: 50px; }
.main-container { max-width: 1480px; margin: 20px auto 0; background: var(--color-bg); border-radius: 15px; padding: 40px; }

.top-bar { display: flex; align-items: center; gap: 20px; margin-bottom: 30px; }
.search-box { display: flex; align-items: center; background: #fff; padding: 10px 15px; border-radius: 5px; width: 240px; }
.search-box input { border: none; outline: none; margin-left: 10px; font-family: inherit; font-size: 14px; width: 100%; color: var(--color-accent); }
.search-box input::placeholder { color: var(--color-accent); }

.tabs { display: flex; gap: 10px; }
.tab { background: #fff; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-family: inherit; font-size: 14px; }
.tab.active { font-weight: 600; }

.map-btn { margin-left: auto; background: #fff; border: none; padding: 10px 15px; border-radius: 5px; cursor: pointer; font-family: inherit; font-size: 14px; display: flex; align-items: center; gap: 8px; color: var(--color-text); }

.content-wrapper { display: flex; gap: 30px; align-items: flex-start; }
.sections-list { flex: 1; }
.section-title { font-size: 20px; font-weight: 600; color: var(--color-text); margin-bottom: 20px; margin-top: 10px; }
.section-title:first-child { margin-top: 0; }

.sidebar { width: 330px; flex-shrink: 0; }
.filters-box { background: #fff; border-radius: 5px; padding: 20px; }

.filter-group { margin-bottom: 15px; border-bottom: 1px solid #f0f0f0; padding-bottom: 15px; }
.filter-group:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
.filter-group.simple { border-bottom: none; margin-bottom: 5px; padding-bottom: 5px; }

.filter-header { font-weight: 600; font-size: 14px; display: flex; justify-content: space-between; margin-bottom: 10px; color: var(--color-text); }
.filter-content { font-size: 14px; color: #666; line-height: 1.6; }
.checkboxes { display: flex; gap: 15px; }
.checkboxes label { display: flex; align-items: center; gap: 5px; }

.catalog-item { display: flex; align-items: center; font-size: 14px; color: #666; margin-bottom: 5px; }
.catalog-item.main { font-weight: 500; color: var(--color-text); justify-content: flex-start; gap: 5px; }
.catalog-sub { list-style: none; padding-left: 15px; margin-bottom: 10px; font-size: 13px; color: #666; }
.catalog-sub li { margin-bottom: 3px; display: flex; gap: 5px; }
.catalog-sub li::before { content: '•'; color: #9886BA; }

.arrow { font-size: 14px; color: #999; transition: transform 0.3s; }
.arrow.rotated { transform: rotate(180deg); }

.count { font-size: 12px; color: #9886BA; margin-left: 5px; }
</style>