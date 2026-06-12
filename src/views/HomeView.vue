<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Swiper from 'swiper'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'

const emit = defineEmits<{
  (e: 'change-page', page: string): void
}>()

const heroSwiper = ref<Swiper | null>(null)
const dealsSwiper = ref<Swiper | null>(null)

// Navigation Cards Data
const promoCards = [
  {
    title: 'Explore Our Menu',
    description: 'Discover our wide selection of premium crispy rolls, savory beef, and sweet treats.',
    icon: '🍴',
    category: 'Full Catalog',
    page: 'menu'
  },
  {
    title: 'Hot Promos & Deals',
    description: 'Get exclusive discounts, buy-one-get-one offers, and claim limited vouchers here.',
    icon: '🎁',
    category: 'Save Big',
    page: 'promos'
  },
  {
    title: 'Our Story & Outlets',
    description: 'Learn about our journey, values, and find the nearest Chikuro outlet near you.',
    icon: '✨',
    category: 'Get in Touch',
    page: 'about'
  },
  {
    title: 'Order via WhatsApp',
    description: 'Skip the queue and order directly via WhatsApp for fast and hot delivery to your door.',
    icon: '💬',
    category: 'Easy Order',
    link: 'https://wa.me/6281234567890'
  }
]

// Hero Banner Slides (Duplicated to 6 to ensure smooth infinite loop with slidesPerView > 1)
const heroSlides = [
  {
    image: '/images/Chikuro_HeroSection1.png',
    title: 'Taste is the most important things for us',
    description: 'we blend taste with innovation, crafting premium snacks that keep you coming back for more.'
  },
  {
    image: '/images/Chikuro_HeroSection2.png',
    title: 'Your Snackmate on the Move',
    description: 'Reflects a grab-and-go eating style.'
  },
  {
    image: '/images/Chikuro_HeroSection3.png',
    title: 'Long crispy chicken roll, every mood',
    description: 'We have born to fulfill your desire on snack.'
  },
  // Duplication for loop support
  {
    image: '/images/Chikuro_HeroSection1.png',
    title: 'Taste is the most important things for us',
    description: 'we blend taste with innovation, crafting premium snacks that keep you coming back for more.'
  },
  {
    image: '/images/Chikuro_HeroSection2.png',
    title: 'Your Snackmate on the Move',
    description: 'Reflects a grab-and-go eating style.'
  },
  {
    image: '/images/Chikuro_HeroSection3.png',
    title: 'Long crispy chicken roll, every mood',
    description: 'We have born to fulfill your desire on snack.'
  }
]

// Deals Data (Duplicated to 6 to ensure smooth infinite loop on desktop with slidesPerView 2.2)
const deals = [
  {
    title: 'HAPPY HOUR COMBO',
    subtitle: 'BUY 1 Satsuro Age + Chikuro',
    description: 'Buy 1 Chikuro rolls and 1 Satsuro Age only 60k! Valid Monday - Thursday, 2 PM - 5 PM.',
    price: 'IDR 60.000',
    image: '/images/Chikuro_Deals_1.jpg',
    badge: 'Single Combo'
  },
  {
    title: 'DELICIOUS SAVINGS',
    subtitle: 'DUO TROUBLE PACK',
    description: 'Get 2 premium Chikuro rolls of your choice 72k! More saving money on this special deal.',
    price: 'IDR 72.000',
    image: '/images/Chikuro_Deals_2.jpg',
    badge: 'Duo Wombo'
  },
  {
    title: 'CHEESY FESTIVAL',
    subtitle: 'FLAMIN\' HOT 30% OFF',
    description: 'Dare to try our cheesy series? Enjoy the discount on all cheesy variant purchases. Bring the cheese!',
    price: 'IDR 130.000',
    image: '/images/Chikuro_Deals_3.jpg',
    badge: 'Limited Offer'
  },
  // Duplication for loop support
  {
    title: 'HAPPY HOUR COMBO',
    subtitle: 'BUY 1 Satsuro Age + Chikuro',
    description: 'Buy 1 Chikuro rolls and 1 Satsuro Age only 60k! Valid Monday - Thursday, 2 PM - 5 PM.',
    price: 'IDR 60.000',
    image: '/images/Chikuro_Deals_1.jpg',
    badge: 'Single Combo'
  },
  {
    title: 'DELICIOUS SAVINGS',
    subtitle: 'DUO TROUBLE PACK',
    description: 'Get 2 premium Chikuro rolls of your choice 72k! More saving money on this special deal.',
    price: 'IDR 72.000',
    image: '/images/Chikuro_Deals_2.jpg',
    badge: 'Duo Wombo'
  },
  {
    title: 'CHEESY FESTIVAL',
    subtitle: 'FAMILY PACK',
    description: 'Dare to try our cheesy series? Enjoy the discount on all cheesy variant purchases. Bring the cheese!',
    price: 'IDR 130.000',
    image: '/images/Chikuro_Deals_3.jpg',
    badge: 'Limited Offer'
  }
]

// Gallery Images
const baseUrl = import.meta.env.BASE_URL;
const galleryImages = [
  { src: 'images/Chikuro_Gallery1.jpg', alt: 'Gathering eating chikuro!' },
  { src: 'images/Chikuro_Gallery2.jpg', alt: 'Together with chikuro!' },
  { src: 'images/Chikuro_Gallery3.jpg', alt: 'Chikuro everyday!' },
  { src: 'images/Chikuro_Gallery4.jpg', alt: 'Duo chikuro for day!' },
  { src: 'images/Chikuro_Gallery5.jpg', alt: 'Triple chikuro to save cravings' },
  { src: 'images/Chikuro_Gallery6.jpg', alt: 'Spicy chikuro, more hot and raise your adrenaline' }
]

onMounted(() => {
  // Initialize Swiper for Hero Banner
  heroSwiper.value = new Swiper('.hero-swiper', {
    modules: [Navigation, Autoplay],
    slidesPerView: 1.1,
    centeredSlides: true,
    spaceBetween: 12,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.hero-next',
      prevEl: '.hero-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 1.4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 1.6,
        spaceBetween: 28,
      }
    }
  })

  // Initialize Swiper for Deals Promo
  dealsSwiper.value = new Swiper('.deals-swiper', {
    modules: [Navigation, Autoplay],
    slidesPerView: 1.1,
    centeredSlides: true,
    spaceBetween: 16,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.deals-next',
      prevEl: '.deals-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 1.8,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 2.2,
        spaceBetween: 32,
      }
    }
  })
})
</script>

<template>
  <div>
    <!-- 2. HERO SECTION (Image Slider with unique text overlays) -->
    <section class="relative bg-white pt-6 pb-12 overflow-hidden">
      <!-- Slider Wrapper -->
      <div class="relative w-full max-w-[1600px] mx-auto px-4">
        <!-- Swiper -->
        <div class="swiper hero-swiper swiper-overflow-visible">
          <div class="swiper-wrapper">
            <div 
              v-for="(slide, index) in heroSlides" 
              :key="index"
              class="swiper-slide rounded-3xl overflow-hidden shadow-premium relative aspect-[16/9] md:aspect-[21/9]"
            >
              <img :src="baseUrl+slide.image" :alt="slide.title" class="w-full h-full object-cover brightness-[0.65]" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35"></div>
              
              <!-- unique text overlay -->
              <div class="absolute inset-0 flex items-center justify-center p-4 sm:p-8 text-center pointer-events-none select-none">
                <div class="max-w-3xl bg-black/45 backdrop-blur-[4px] p-5 sm:p-10 rounded-2xl border border-white/10 shadow-2xl">
                  <h2 class="text-xl sm:text-3xl md:text-5xl font-black text-white leading-tight uppercase tracking-tight mb-2 sm:mb-4 font-sans">
                    {{ slide.title }}
                  </h2>
                  <p class="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed font-medium">
                    {{ slide.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Custom Navigation Buttons -->
        <button class="hero-prev custom-prev absolute left-6 sm:left-12 top-1/2 -translate-y-1/2" aria-label="Previous slide">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" style="transform: rotate(180deg);">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <button class="hero-next custom-next absolute right-6 sm:right-12 top-1/2 -translate-y-1/2" aria-label="Next slide">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>

    <!-- 3. SECTION NAVIGASI (Dolor Sit Amet) -->
    <section class="bg-chikuro-red py-16 px-4 relative">
      <div class="max-w-7xl mx-auto">
        <!-- Title -->
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-widest uppercase">
            GET IN TOUCH WITH US
          </h2>
          <div class="w-24 h-1.5 bg-white mx-auto mt-4 rounded-full"></div>
        </div>

        <!-- 4 White Navigation Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <template v-for="(card, index) in promoCards" :key="index">
            <!-- Link to Internal Pages -->
            <button 
              v-if="card.page"
              @click="emit('change-page', card.page)"
              class="group block bg-white rounded-2xl p-6 sm:p-8 text-center shadow-card hover:shadow-premium-hover hover:-translate-y-3 transition-all duration-300 border border-transparent hover:border-white/20 w-full focus:outline-none"
            >
              <!-- Card Icon/Emoji -->
              <div class="w-16 h-16 bg-chikuro-red/10 rounded-full flex items-center justify-center text-3xl mx-auto mb-6 group-hover:bg-chikuro-red group-hover:scale-110 transition-all duration-300">
                <span class="group-hover:filter-none">{{ card.icon }}</span>
              </div>
              
              <!-- Category Tag -->
              <span class="text-xs font-bold uppercase tracking-wider text-chikuro-red/60 group-hover:text-chikuro-red transition-colors duration-300 block mb-2">
                {{ card.category }}
              </span>
              
              <!-- Card Title -->
              <h3 class="text-xl font-bold text-chikuro-dark mb-3 group-hover:text-chikuro-red transition-colors duration-300">
                {{ card.title }}
              </h3>
              
              <!-- Card Description -->
              <p class="text-sm text-gray-500 leading-relaxed">
                {{ card.description }}
              </p>
              
              <!-- Arrow Indicator -->
              <div class="mt-6 flex items-center justify-center text-chikuro-red font-bold text-xs gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>EXPLORE</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            <!-- Link to External / Whatsapp -->
            <a 
              v-else-if="card.link"
              :href="card.link"
              target="_blank"
              class="group block bg-white rounded-2xl p-6 sm:p-8 text-center shadow-card hover:shadow-premium-hover hover:-translate-y-3 transition-all duration-300 border border-transparent hover:border-white/20"
            >
              <!-- Card Icon/Emoji -->
              <div class="w-16 h-16 bg-chikuro-red/10 rounded-full flex items-center justify-center text-3xl mx-auto mb-6 group-hover:bg-chikuro-red group-hover:scale-110 transition-all duration-300">
                <span class="group-hover:filter-none">{{ card.icon }}</span>
              </div>
              
              <!-- Category Tag -->
              <span class="text-xs font-bold uppercase tracking-wider text-chikuro-red/60 group-hover:text-chikuro-red transition-colors duration-300 block mb-2">
                {{ card.category }}
              </span>
              
              <!-- Card Title -->
              <h3 class="text-xl font-bold text-chikuro-dark mb-3 group-hover:text-chikuro-red transition-colors duration-300">
                {{ card.title }}
              </h3>
              
              <!-- Card Description -->
              <p class="text-sm text-gray-500 leading-relaxed">
                {{ card.description }}
              </p>
              
              <!-- Arrow Indicator -->
              <div class="mt-6 flex items-center justify-center text-chikuro-red font-bold text-xs gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>ORDER NOW</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </template>
        </div>
      </div>
    </section>

    <!-- 4. SECTION "OUR DEALS" (Horizontal Carousel) -->
    <section id="deals" class="bg-white py-16 px-4 overflow-hidden relative">
      <div class="max-w-7xl mx-auto">
        <!-- Title -->
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-chikuro-red tracking-wide uppercase">
            OUR DEALS
          </h2>
          <div class="w-24 h-1.5 bg-chikuro-red mx-auto mt-4 rounded-full"></div>
        </div>

        <!-- Carousel Container -->
        <div class="relative w-full px-4 pt-4">
          <!-- Swiper -->
          <div class="swiper deals-swiper swiper-overflow-visible">
            <div class="swiper-wrapper">
              <div 
                v-for="(deal, index) in deals" 
                :key="index"
                class="swiper-slide bg-chikuro-light rounded-3xl overflow-hidden shadow-card border border-gray-100 flex flex-col md:flex-row h-auto min-h-[400px] md:min-h-[320px]"
              >
                <!-- Promo Image Area -->
                <div class="w-full md:w-1/2 relative aspect-video md:aspect-auto">
                  <img :src="baseUrl + deal.image" :alt="deal.title" class="w-full h-full object-cover" />
                  <div class="absolute top-4 left-4 bg-chikuro-red text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    {{ deal.badge }}
                  </div>
                </div>

                <!-- Promo Text Area -->
                <div class="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between items-start text-left">
                  <div>
                    <span class="text-xs font-bold uppercase tracking-widest text-chikuro-red">
                      {{ deal.subtitle }}
                    </span>
                    <h3 class="text-xl sm:text-2xl font-black text-chikuro-dark mt-2 mb-4 leading-tight">
                      {{ deal.title }}
                    </h3>
                    <p class="text-sm text-gray-500 leading-relaxed mb-6">
                      {{ deal.description }}
                    </p>
                  </div>
                  
                  <div class="w-full flex items-center justify-between pt-4 border-t border-gray-200/80">
                    <span class="text-lg font-black text-chikuro-red">{{ deal.price }}</span>
                    <button 
                      @click="emit('change-page', 'promos')"
                      class="px-5 py-2.5 rounded-full bg-chikuro-dark text-white text-xs font-bold hover:bg-chikuro-red transition-all duration-300 shadow-md hover:shadow-premium focus:outline-none"
                    >
                      CLAIM DEAL
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation Arrow Buttons -->
          <button class="deals-prev custom-prev absolute -left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-chikuro-dark/80 hover:bg-chikuro-red text-white border-none shadow-md" aria-label="Previous deal">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" style="transform: rotate(180deg);">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button class="deals-next custom-next absolute -right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-chikuro-dark/80 hover:bg-chikuro-red text-white border-none shadow-md" aria-label="Next deal">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- 5. SECTION "OUR GALLERY" (Grid 3x2) -->
    <section id="gallery" class="bg-chikuro-red py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <!-- Title -->
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-wide uppercase">
            OUR GALLERY
          </h2>
          <div class="w-24 h-1.5 bg-white mx-auto mt-4 rounded-full"></div>
        </div>

        <!-- 3x2 Photo Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(img, index) in galleryImages" 
            :key="index"
            class="group relative overflow-hidden rounded-2xl shadow-lg aspect-square bg-black border-4 border-white"
          >
            <!-- Image -->
            <img 
              :src="img.src" 
              :alt="img.alt" 
              class="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-500" 
            />

            <!-- Hover overlay -->
            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
              <div class="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span class="inline-block px-2.5 py-1 bg-chikuro-red text-white text-[10px] font-bold uppercase rounded-full mb-3 tracking-widest">
                  Chikuro Taste
                </span>
                <p class="text-sm font-semibold text-white">
                  {{ img.alt }}
                </p>
                <div class="flex items-center gap-1.5 mt-3 text-red-500 text-xs font-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current animate-pulse" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span>Chikuro Love</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
