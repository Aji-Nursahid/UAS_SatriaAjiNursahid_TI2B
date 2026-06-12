<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits<{
  (e: 'show-toast', message: string): void
}>()

// Countdown state
const hours = ref('00')
const minutes = ref('00')
const seconds = ref('00')
let timerInterval: any = null

const updateCountdown = () => {
  const now = new Date()
  const midnight = new Date()
  midnight.setHours(24, 0, 0, 0) // Next midnight
  
  const diff = midnight.getTime() - now.getTime()
  if (diff <= 0) {
    hours.value = '00'
    minutes.value = '00'
    seconds.value = '00'
    return
  }
  
  const h = Math.floor(diff / (1000 * 60 * 60))
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const s = Math.floor((diff % (1000 * 60)) / 1000)
  
  hours.value = h.toString().padStart(2, '0')
  minutes.value = m.toString().padStart(2, '0')
  seconds.value = s.toString().padStart(2, '0')
}

// Voucher codes copy state
const copiedVoucher = ref<string | null>(null)

const copyVoucher = (code: string) => {
  navigator.clipboard.writeText(code).then(() => {
    copiedVoucher.value = code
    emit('show-toast', `Promo code "${code}" copied successfully to clipboard!`)
    
    setTimeout(() => {
      if (copiedVoucher.value === code) {
        copiedVoucher.value = null
      }
    }, 3000)
  }).catch((err) => {
    console.error('Could not copy text: ', err)
  })
}

// Promo Cards Data
const vouchers = ref([
  {
    code: 'CHIKURO40',
    title: '40% DISCOUNT',
    subtitle: 'CHEESE FEVER SPECIAL',
    description: 'Get flat 40% discount up to IDR 40.000 with a minimum purchase of IDR 80.000. Valid for Mozzarella Series.',
    claimed: 85,
    expiry: 'Expires in 4 hours'
  },
  {
    code: 'FREESHIP',
    title: 'FREE DELIVERY',
    subtitle: 'DELIVERED HOT & CRISPY',
    description: 'Free shipping fee up to IDR 15.000 with a minimum purchase of IDR 50.000. Valid for online orders.',
    claimed: 62,
    expiry: 'Expires in 10 hours'
  },
  {
    code: 'MEALDEAL',
    title: 'BUY 2 GET 1 FREE',
    subtitle: 'CHIKURO WEEKLY COMBO',
    description: 'Claim this code to get 1 free Classic Chicken roll for every buy of 2 mozzarella rolls of any variant.',
    claimed: 94,
    expiry: 'Expires in 2 hours'
  },
  {
    code: 'SWEET15',
    title: '15% CASHBACK',
    subtitle: 'SWEET TOOTH DELIGHT',
    description: 'Enjoy 15% cashback up to IDR 20.000. No minimum purchase required. Applicable for Sweet Lava category.',
    claimed: 40,
    expiry: 'Expires tomorrow'
  }
])

onMounted(() => {
  updateCountdown()
  timerInterval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval)
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      
      <!-- Page Header -->
      <div class="text-center mb-12">
        <span class="text-xs font-black uppercase tracking-widest text-chikuro-red">Exclusive Promos</span>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-chikuro-dark mt-2 mb-4 uppercase">
          CHIKURO DEALS & VOUCHERS
        </h1>
        <p class="max-w-xl mx-auto text-sm sm:text-base text-gray-500 leading-relaxed">
          Grab your exclusive voucher code, copy it, and claim your discounts on checkout. Hurry, deals are limited!
        </p>
        <div class="w-24 h-1.5 bg-chikuro-red mx-auto mt-4 rounded-full"></div>
      </div>

      <!-- Midnight Flash Deal Banner with Live Countdown -->
      <div class="bg-chikuro-dark text-white rounded-3xl p-6 sm:p-10 mb-12 relative overflow-hidden shadow-xl border border-gray-800">
        <!-- Background decorative elements -->
        <div class="absolute -top-12 -right-12 w-64 h-64 bg-chikuro-red rounded-full blur-[80px] opacity-40"></div>
        <div class="absolute -bottom-12 -left-12 w-48 h-48 bg-yellow-400 rounded-full blur-[80px] opacity-25"></div>

        <div class="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <!-- Promo text -->
          <div class="text-center lg:text-left">
            <span class="inline-block px-3 py-1 bg-chikuro-red text-white text-xs font-black uppercase rounded-full mb-4 tracking-widest animate-pulse">
              ⚡ FLASH DEAL OF THE DAY
            </span>
            <h2 class="text-2xl sm:text-4xl font-black uppercase tracking-tight leading-none mb-3">
              MIDNIGHT MOZZARELLA FEAST
            </h2>
            <p class="text-sm text-gray-400 max-w-md">
              Grab a flat 50% discount on all double mozzarella rolls. Coupon becomes active only during flash sale hours.
            </p>
          </div>

          <!-- Countdown Timer Display -->
          <div class="flex flex-col items-center shrink-0">
            <span class="text-xs text-gray-400 font-extrabold uppercase tracking-widest mb-3">Ends In:</span>
            <div class="flex items-center gap-2.5 sm:gap-4">
              <!-- Hours -->
              <div class="flex flex-col items-center">
                <div class="bg-chikuro-red text-white font-extrabold text-2xl sm:text-4xl w-14 sm:w-20 h-14 sm:h-20 rounded-2xl flex items-center justify-center shadow-lg border border-red-500/20">
                  {{ hours }}
                </div>
                <span class="text-[10px] text-gray-400 uppercase font-bold mt-1.5">Hours</span>
              </div>
              
              <span class="text-xl sm:text-3xl font-black text-chikuro-red animate-pulse">:</span>

              <!-- Minutes -->
              <div class="flex flex-col items-center">
                <div class="bg-chikuro-red text-white font-extrabold text-2xl sm:text-4xl w-14 sm:w-20 h-14 sm:h-20 rounded-2xl flex items-center justify-center shadow-lg border border-red-500/20">
                  {{ minutes }}
                </div>
                <span class="text-[10px] text-gray-400 uppercase font-bold mt-1.5">Minutes</span>
              </div>

              <span class="text-xl sm:text-3xl font-black text-chikuro-red animate-pulse">:</span>

              <!-- Seconds -->
              <div class="flex flex-col items-center">
                <div class="bg-chikuro-red text-white font-extrabold text-2xl sm:text-4xl w-14 sm:w-20 h-14 sm:h-20 rounded-2xl flex items-center justify-center shadow-lg border border-red-500/20">
                  {{ seconds }}
                </div>
                <span class="text-[10px] text-gray-400 uppercase font-bold mt-1.5">Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Voucher Cards List -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div 
          v-for="voucher in vouchers" 
          :key="voucher.code"
          class="bg-white rounded-3xl overflow-hidden shadow-card border border-gray-100 flex flex-col justify-between hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300 relative"
        >
          <!-- Left color band tag -->
          <div class="absolute top-0 left-0 bottom-0 w-3 bg-chikuro-red"></div>

          <!-- Content Area -->
          <div class="pl-8 pr-6 pt-8 pb-6 flex-1 flex flex-col justify-between text-left">
            <div>
              <!-- Subtitle & expiry -->
              <div class="flex items-center justify-between gap-4 mb-2">
                <span class="text-xs font-bold text-chikuro-red uppercase tracking-wider">
                  {{ voucher.subtitle }}
                </span>
                <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  ⏱️ {{ voucher.expiry }}
                </span>
              </div>

              <!-- Title -->
              <h3 class="text-2xl font-black text-chikuro-dark mb-3">
                {{ voucher.title }}
              </h3>

              <!-- Description -->
              <p class="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6">
                {{ voucher.description }}
              </p>
            </div>

            <!-- Progress Bar & Claims -->
            <div class="mt-4">
              <div class="flex items-center justify-between text-xs font-bold text-gray-500 mb-1.5">
                <span>Voucher Status</span>
                <span :class="voucher.claimed >= 90 ? 'text-chikuro-red animate-pulse' : 'text-gray-500'">
                  {{ voucher.claimed }}% Claimed
                </span>
              </div>
              <div class="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  class="h-full bg-chikuro-red rounded-full transition-all duration-1000"
                  :style="{ width: `${voucher.claimed}%` }"
                ></div>
              </div>
            </div>
          </div>

          <!-- Bottom Code Claim Action -->
          <div class="pl-8 pr-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
            <div class="flex flex-col">
              <span class="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Voucher Code</span>
              <span class="text-base font-black text-chikuro-dark tracking-wide font-mono select-all">{{ voucher.code }}</span>
            </div>
            
            <button 
              @click="copyVoucher(voucher.code)"
              :class="[
                'px-4 py-2 rounded-full text-xs font-black tracking-wider transition-all duration-300 focus:outline-none flex items-center gap-1.5 shadow-sm',
                copiedVoucher === voucher.code
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-chikuro-red hover:bg-chikuro-redHover text-white'
              ]"
            >
              <!-- Success Tick Icon -->
              <svg 
                v-if="copiedVoucher === voucher.code"
                xmlns="http://www.w3.org/2000/svg" 
                class="h-3.5 w-3.5 fill-current animate-bounce" 
                viewBox="0 0 24 24"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              <!-- Copy Icon -->
              <svg 
                v-else
                xmlns="http://www.w3.org/2000/svg" 
                class="h-3.5 w-3.5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                stroke-width="2.5"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              <span>{{ copiedVoucher === voucher.code ? 'COPIED!' : 'COPY CODE' }}</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
