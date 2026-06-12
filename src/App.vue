<script setup lang="ts">
import { ref, computed } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import HomeView from './views/HomeView.vue'
import MenuView from './views/MenuView.vue'
import PromosView from './views/PromosView.vue'
import AboutView from './views/AboutView.vue'

const currentPage = ref('home')
const showToast = ref(false)
const toastMessage = ref('')
let toastTimeout: any = null

// Map view names to components
const activeView = computed(() => {
  switch (currentPage.value) {
    case 'home':
      return HomeView
    case 'menu':
      return MenuView
    case 'promos':
      return PromosView
    case 'about':
      return AboutView
    default:
      return HomeView
  }
})

// Handle page switching
const changePage = (page: string) => {
  currentPage.value = page
  // Smooth scroll to top when changing pages
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Display floating toast message
const triggerToast = (message: string) => {
  if (toastTimeout) clearTimeout(toastTimeout)
  
  toastMessage.value = message
  showToast.value = true
  
  toastTimeout = setTimeout(() => {
    showToast.value = false
  }, 3500)
}
</script>

<template>
  <div class="min-h-screen bg-white text-chikuro-dark antialiased flex flex-col justify-between">
    <div>
      <!-- 1. NAVBAR (Sticky Header) -->
      <Navbar :current-page="currentPage" @change-page="changePage" />

      <!-- Main Contents Router-like area -->
      <main>
        <Transition name="page-fade" mode="out-in">
          <component 
            :is="activeView" 
            @change-page="changePage" 
            @show-toast="triggerToast"
          />
        </Transition>
      </main>
    </div>

    <!-- 6. FOOTER (Keterangan Chikuro) -->
    <Footer />

    <!-- Toast Notification System -->
    <Transition name="toast-fade">
      <div 
        v-if="showToast" 
        class="fixed bottom-6 right-6 z-50 bg-chikuro-dark text-white px-5 py-3.5 rounded-2xl shadow-premium border border-white/10 flex items-center gap-3 max-w-sm text-left"
      >
        <div class="w-8 h-8 rounded-full bg-chikuro-red flex items-center justify-center shrink-0 text-white font-black text-sm">
          ✓
        </div>
        <div>
          <h5 class="text-[10px] font-black uppercase tracking-widest text-chikuro-red">Chikuro Promo</h5>
          <p class="text-xs text-gray-300 font-medium leading-relaxed mt-0.5">
            {{ toastMessage }}
          </p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* Toast Transition */
.toast-fade-enter-active {
  animation: toast-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.toast-fade-leave-active {
  animation: toast-in 0.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) reverse;
}

@keyframes toast-in {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
