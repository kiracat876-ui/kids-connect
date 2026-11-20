<template>
  <div class="page-wrapper">
    <AppHeader :is-detail="true" />
    
    <main class="main-container">
      <div class="top-nav">
        <router-link to="/" class="nav-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
          Назад
        </router-link>
        <button class="nav-btn">
          На карте
          <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-primary)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
        </button>
      </div>

      <h1 class="main-title">Лёгкая атлетика (в Юбилейном мкр.)</h1>

      <div class="card info-card">
        <div class="info-card__image">
           <img src="/track.jpg" alt="Легкая атлетика" class="detail-img" />
        </div>
        <div class="info-card__content">
          <div class="info-card__header">
            <span class="badge badge--outline">Набор открыт</span>
            <span class="badge badge--filled">Бесплатно</span>
          </div>
          <div class="info-card__details">
            <div class="info-row">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-primary)"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              10-18 лет
            </div>
            <div class="info-row">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-primary)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
              г. Иркутск, Юбилейный мкр., стр. 49/1
            </div>
            <div class="info-row">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-primary)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              ФОК "Юбилейный"
            </div>
          </div>
          <button class="btn-signup">Записаться</button>
        </div>
      </div>

      <div class="card details-card">
        <div class="details-grid">
          <div class="groups-col">
            <h3 class="block-title">ГРУППЫ</h3>
            <p class="group-stage">Этап начальной подготовки</p>
            <div class="group-info">
              <div class="info-row">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-primary)"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                Петрова Елена Александровна
              </div>
              <div class="info-row">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-primary)"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                15 из 20
              </div>
              <div class="info-row">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-primary)"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                12 месяцев
              </div>
            </div>
          </div>
          <div class="schedule-col">
            <h3 class="block-title">РАСПИСАНИЕ ЗАНЯТИЙ</h3>
            <div class="schedule-row">
              <div class="info-row">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-primary)"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                Пн, Вт, Чт, Сб
              </div>
            </div>
            <div class="schedule-row">
              <div class="info-row">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-primary)"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                Пн, Вт, Чт, Сб
              </div>
              <div class="times">
                <span class="time-badge">08:00 - 10:00</span>
                <span class="time-badge">18:00 - 19:30</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card text-card">
        <h3 class="block-title">ОПИСАНИЕ</h3>
        <p class="description-text">
          Легкая атлетика - олимпийский вид спорта, объединяющий беговые виды, спортивную ходьбу , технические виды (прыжки и метания), многоборья, пробеги (бег по шоссе), кроссы (бег по пересеченной местности).
        </p>
      </div>

      <div class="card text-card program-card">
        <div class="program-header" @click="isProgramOpen = !isProgramOpen">
          <h3 class="block-title">СОДЕРЖАНИЕ ПРОГРАММЫ</h3>
          <svg :class="{ 'rotated': isProgramOpen }" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
        
        <div v-show="isProgramOpen" class="program-content">
          <div class="level-box">
            <div class="level-header" @click="isBaseOpen = !isBaseOpen">
              <h4>Базовый уровень</h4>
              <svg :class="{ 'rotated': isBaseOpen }" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
            <div v-show="isBaseOpen" class="level-text">
              <p>Базовый уровень сложности первый-второй год обучения, 252 часа.</p>
              <ul>
                <li>Обязательные предметы области (количество часов – 15);</li>
                <li>Вариативные предметные области (количество часов –10);</li>
                <li>Теория (количество часов –5);</li>
                <li>Практика (количество часов – 216);</li>
                <li>Самостоятельная работа (количество часов –2);</li>
                <li>Аттестация (количество часов – 4).</li>
              </ul>
              <p>Базовый уровень сложности третий-четвертый год обучения, 416 часов.</p>
              <ul>
                <li>Обязательные предметы области (количество часов – 25);</li>
                <li>Вариативные предметные области (количество часов – 15);</li>
                <li>Теория (количество часов – 7);</li>
                <li>Практика (количество часов – 361);</li>
                <li>Самостоятельная работа (количество часов – 4);</li>
                <li>Аттестация (количество часов – 4).</li>
              </ul>
              <p>Базовый уровень сложности пятый-шестой год обучения, 420 часов.</p>
              <ul>
                <li>Обязательные предметы области (количество часов – 27);</li>
                <li>Вариативные предметные области (количество часов – 15);</li>
                <li>Теория (количество часов – 8);</li>
                <li>Практика (количество часов – 360);</li>
                <li>Самостоятельная работа (количество часов – 6);</li>
                <li>Аттестация (количество часов – 4).</li>
              </ul>
            </div>
          </div>

          <div class="level-box">
            <div class="level-header" @click="isAdvancedOpen = !isAdvancedOpen">
              <h4>Углубленный уровень</h4>
              <svg :class="{ 'rotated': isAdvancedOpen }" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
            <div v-show="isAdvancedOpen" class="level-text">
               <p>Углубленный уровень сложности первый-второй год обучения, 504.</p>
               <ul>
                 <li>Обязательные предметы области (количество часов – 30);</li>
                 <li>Вариативные предметные области (количество часов – 20);</li>
                 <li>Теория (количество часов – 9);</li>
                 <li>Практика (количество часов – 433);</li>
                 <li>Самостоятельная работа (количество часов – 8);</li>
                 <li>Аттестация (количество часов – 4).</li>
               </ul>
               <p>Углубленный уровень сложности третий-четвертый год обучения, 588 часов.</p>
               <ul>
                 <li>Обязательные предметы области (количество часов – 35);</li>
                 <li>Вариативные предметные области (количество часов – 23);</li>
                 <li>Теория (количество часов – 10);</li>
                 <li>Практика (количество часов – 506);</li>
                 <li>Самостоятельная работа (количество часов – 10);</li>
                 <li>Аттестация (количество часов – 4).</li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppHeader from '../components/AppHeader.vue'

const isProgramOpen = ref(true)
const isBaseOpen = ref(true)
const isAdvancedOpen = ref(false)
</script>

<style scoped>
.page-wrapper { min-height: 100vh; background-color: #FFFFFF; padding-bottom: 50px; }
.main-container { max-width: 1480px; margin: 20px auto 0; background: var(--color-bg); border-radius: 15px; padding: 40px; display: flex; flex-direction: column; gap: 20px; }

.top-nav { display: flex; justify-content: space-between; margin-bottom: 20px; }
.nav-btn { display: flex; align-items: center; gap: 8px; background: #fff; border: none; padding: 10px 15px; border-radius: 5px; cursor: pointer; font-family: inherit; font-size: 14px; color: var(--color-text); text-decoration: none; }
.nav-btn:first-child { padding: 10px 20px 10px 15px; }

.main-title { font-size: 24px; font-weight: 600; color: var(--color-text); margin-bottom: 20px; }

.card { background: #fff; border-top: 3px solid var(--color-primary); border-radius: 5px; padding: 20px; }

.info-card { display: flex; gap: 20px; align-items: flex-start; }
.info-card__image { width: 200px; height: 200px; border-radius: 10px; flex-shrink: 0; overflow: hidden; }
.detail-img { width: 100%; height: 100%; object-fit: cover; }

.info-card__content { flex: 1; display: flex; flex-direction: column; height: 200px; }
.info-card__header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; }
.badge { padding: 5px 15px; border-radius: 5px; font-size: 12px; font-weight: 600; }
.badge--outline { border: 1px solid var(--color-accent); color: var(--color-primary); }
.badge--filled { background: var(--color-accent); color: #fff; }

.info-card__details { display: flex; flex-direction: column; gap: 10px; }
.info-row { display: flex; align-items: center; gap: 10px; font-size: 14px; color: var(--color-text); }

.btn-signup { margin-top: auto; align-self: flex-end; background: var(--color-primary); color: #fff; border: none; padding: 10px 30px; border-radius: 5px; font-family: inherit; font-size: 14px; font-weight: 600; cursor: pointer; }

.details-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
.block-title { font-size: 16px; font-weight: 600; color: var(--color-primary); text-transform: uppercase; margin-bottom: 15px; }
.group-stage { font-size: 14px; font-weight: 500; margin-bottom: 10px; }
.group-info { display: flex; flex-direction: column; gap: 8px; }

.schedule-row { display: flex; align-items: center; gap: 20px; margin-bottom: 10px; }
.times { display: flex; gap: 10px; }
.time-badge { background: var(--color-beige); padding: 4px 10px; border-radius: 5px; font-size: 14px; }

.text-card { display: flex; flex-direction: column; }
.description-text { font-size: 14px; line-height: 1.6; color: var(--color-text); }

.program-header { display: flex; justify-content: space-between; align-items: center; cursor: pointer; }
.program-header svg { transition: transform 0.3s; color: var(--color-text); }
.program-header svg.rotated { transform: rotate(180deg); }

.program-content { margin-top: 20px; display: flex; flex-direction: column; gap: 15px; }
.level-box { border-bottom: 1px solid #eee; padding-bottom: 15px; }
.level-box:last-child { border-bottom: none; }
.level-header { display: flex; justify-content: space-between; align-items: center; cursor: pointer; color: var(--color-primary); }
.level-header h4 { font-size: 14px; font-weight: 600; }
.level-header svg { transition: transform 0.3s; }
.level-header svg.rotated { transform: rotate(180deg); }

.level-text { margin-top: 15px; font-size: 14px; line-height: 1.6; color: var(--color-text); }
.level-text p { margin-bottom: 5px; font-weight: 500;}
.level-text ul { margin-bottom: 15px; padding-left: 20px; }
.level-text li { margin-bottom: 2px; }
</style>