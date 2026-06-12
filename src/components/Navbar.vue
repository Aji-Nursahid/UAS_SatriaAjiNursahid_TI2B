<script setup lang="ts">
defineProps<{
  currentPage: string
}>()

const emit = defineEmits<{
  (e: 'change-page', page: string): void
}>()

const navItems = [
  { name: 'Home', value: 'home' },
  { name: 'Our Menu', value: 'menu' },
  { name: 'Promos', value: 'promos' },
  { name: 'About Us', value: 'about' }
]
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <!-- Left: Logo -->
      <button 
        @click="emit('change-page', 'home')" 
        class="flex items-center gap-2 group focus:outline-none"
      >
        <div class="bg-chikuro-red text-white font-extrabold text-xl sm:text-2xl px-5 py-2 rounded-full tracking-wider shadow-md group-hover:bg-chikuro-redHover group-hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-1.5">
          <span>CHIKURO</span>
          <span class="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse"></span>
        </div>
      </button>

      <!-- Right: Pill Navigations -->
      <nav class="flex items-center gap-1.5 sm:gap-3">
        <button 
          v-for="item in navItems" 
          :key="item.value" 
          @click="emit('change-page', item.value)"
          :class="[
            'px-3 py-1.5 sm:px-5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 focus:outline-none',
            currentPage === item.value 
              ? 'bg-chikuro-red text-white shadow-md shadow-chikuro-red/20 border border-chikuro-red' 
              : 'border border-chikuro-red/10 text-chikuro-red hover:border-chikuro-red hover:bg-chikuro-red/5'
          ]"
        >
          {{ item.name }}
        </button>
      </nav>
    </div>
  </header>
</template>
