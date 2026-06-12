<script setup lang="ts">
import { ref, computed } from 'vue'

const activeOutletIndex = ref(0)

const values = [
  {
    title: 'Quality Ingredients',
    description: 'We use only premium mozzarella, grade-A chicken, and imported Belgian chocolate to ensure premium taste.',
    icon: '🌾'
  },
  {
    title: 'Passionate Baking',
    description: 'Every crispy roll is hand-crafted, rolled, and freshly fried upon order to guarantee hot and crispy delivery.',
    icon: '👨‍🍳'
  },
  {
    title: 'Infinite Innovation',
    description: 'Our culinary R&D team continuously blends Japanese-inspired concepts with local Indonesian spices.',
    icon: '💡'
  },
  {
    title: 'Customer Love',
    description: 'We strive to provide outstanding customer experience, quick order processing, and top-tier services.',
    icon: '❤️'
  }
]

const outlets = ref([
  {
    city: 'Jakarta',
    name: 'Chikuro Kelapa Gading (Flagship Outlet)',
    address: 'Jl. Kelapa Gading Boulevard Blok WA2 No. 12-14, Kelapa Gading Barat, DKI Jakarta 14240',
    phone: '+62 21 4584 7226',
    openHour: 10,
    closeHour: 22,
    mapLink: 'https://www.google.com/maps/place/Chikuro+moi/@-6.15124,106.8893217,751m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e69f5e8cbd50bbb:0x3fa7dec4d0d665e!8m2!3d-6.1512453!4d106.8918966!16s%2Fg%2F11kqr2yj7v?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D'
  },
  {
    city: 'Bandung',
    name: 'Chikuro Paskal 23',
    address: '23 Paskal Shopping Center, Lantai 2 Unit 45, Jl. Pasir Kaliki No. 25-27, Bandung 40181',
    phone: '+62 22 2056 1234',
    openHour: 10,
    closeHour: 22,
    mapLink: 'https://www.google.com/maps/place/Chikuro+23+Paskal/@-6.9151675,107.591991,750m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e68e7000865fc79:0x984fa57752cafd65!8m2!3d-6.9151728!4d107.5945659!16s%2Fg%2F11z1y_s5m2?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D'
  },
  {
    city: 'Surabaya',
    name: 'Chikuro Tunjungan Plaza',
    address: 'Tunjungan Plaza 3, Lantai 5 Food Court, Jl. Jenderal Basuki Rahmat No. 8-12, Surabaya 60261',
    phone: '+62 31 5459 5678',
    openHour: 10,
    closeHour: 22,
    mapLink: 'https://www.google.com/maps/place/Chikuro+Tunjungan+Plaza/@-7.2634561,112.7381259,749m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2dd7f9170fc68905:0x4772f91995d02252!8m2!3d-7.2634614!4d112.7407008!16s%2Fg%2F11ty4w67b5?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D'
  },
  {
    city: 'Tangerang',
    name: 'Chikuro Summarecon Mall Serpong',
    address: 'Chikuro Summarecon Mall Bekasi 2, Sentra Summarecon, Jl. Boulevard Ahmad Yani No.Blok M LT LG-IC 16,17, RT.006/RW.002, Marga Mulya, Kec. Bekasi Utara, Kota Bks, Jawa Barat 17142',
    phone: '+62 21 5420 9876',
    openHour: 10,
    closeHour: 22,
    mapLink: 'https://www.google.com/maps/place/Chikuro+Summarecon+Mall+Bekasi/@-6.2264008,106.9963603,751m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e698d006e9b61b1:0xeb3677fa9599c5cb!8m2!3d-6.2264061!4d106.9989352!16s%2Fg%2F11yz5fs86c?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D'
  }
])

const activeOutlet = computed(() => outlets.value[activeOutletIndex.value])

const isOutletOpen = (outlet: any) => {
  const currentHour = new Date().getHours()
  return currentHour >= outlet.openHour && currentHour < outlet.closeHour
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      
      <!-- Page Header -->
      <div class="text-center mb-16">
        <span class="text-xs font-black uppercase tracking-widest text-chikuro-red">Who We Are</span>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-chikuro-dark mt-2 mb-4 uppercase">
          OUR STORY & OUTLETS
        </h1>
        <p class="max-w-xl mx-auto text-sm sm:text-base text-gray-500 leading-relaxed">
          Bringing you the ultimate fusion snack experience. Read about our journey and find our nearest store.
        </p>
        <div class="w-24 h-1.5 bg-chikuro-red mx-auto mt-4 rounded-full"></div>
      </div>

      <!-- Brand Story Section -->
      <div class="bg-white rounded-3xl p-6 sm:p-10 mb-16 shadow-card border border-gray-100 flex flex-col lg:flex-row gap-10 items-center">
        <!-- Story Image -->
        <div class="w-full lg:w-1/2 aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden shadow-md relative bg-gray-100 shrink-0">
          <img src="/images/Chikuro_Indonesia.png" alt="Chikuro rolls on a board" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-tr from-chikuro-red/10 to-transparent"></div>
        </div>

        <!-- Story Content -->
        <div class="text-left">
          <span class="text-xs font-bold text-chikuro-red uppercase tracking-wider block mb-1">Establishment</span>
          <h2 class="text-2xl sm:text-3xl font-black text-chikuro-dark mb-4 uppercase leading-none">
            THE CHIKURO JOURNEY
          </h2>
          <div class="space-y-4 text-sm sm:text-base text-gray-500 leading-relaxed">
            <p>
              Chikuro was founded with a single mission: to redefine street food snacking. Inspired by the meticulous crust-baking art of Japan, we set out to build a culinary product that combines an extremely crispy exterior shell with rich, overflowing molten fillings inside.
            </p>
            <p>
              We experimented for months to develop our custom breading formula. By incorporating traditional local Indonesian spices and seasoning toppings, we crafted a taste profile that is bold, savory, sweet, and absolutely addictive.
            </p>
            <p>
              Today, Chikuro operates multiple busy outlets across metropolitan cities in Indonesia. We serve thousands of hot, melting rolls daily to culinary lovers who value premium taste, texture, and creativity.
            </p>
          </div>
        </div>
      </div>

      <!-- Core Values Section -->
      <div class="mb-16">
        <div class="text-center mb-10">
          <h3 class="text-2xl font-black text-chikuro-dark uppercase">OUR CORE VALUES</h3>
          <div class="w-16 h-1 bg-chikuro-red mx-auto mt-3 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="val in values" 
            :key="val.title"
            class="group bg-white p-6 sm:p-8 rounded-2xl shadow-card border border-gray-100 hover:border-chikuro-red/20 hover:shadow-premium-hover hover:-translate-y-1.5 transition-all duration-300 text-center"
          >
            <div class="w-14 h-14 bg-chikuro-red/5 rounded-full flex items-center justify-center text-2xl mx-auto mb-5 group-hover:bg-chikuro-red group-hover:scale-110 transition-all duration-300">
              <span>{{ val.icon }}</span>
            </div>
            <h4 class="text-base font-extrabold text-chikuro-dark mb-2 group-hover:text-chikuro-red transition-colors duration-300">
              {{ val.title }}
            </h4>
            <p class="text-xs sm:text-sm text-gray-500 leading-relaxed">
              {{ val.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Outlets Locator Section -->
      <div>
        <div class="text-center mb-10">
          <h3 class="text-2xl font-black text-chikuro-dark uppercase">FIND OUR STORE</h3>
          <div class="w-16 h-1 bg-chikuro-red mx-auto mt-3 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Outlets Navigation List -->
          <div class="lg:col-span-1 flex flex-col gap-3">
            <button 
              v-for="(outlet, index) in outlets" 
              :key="outlet.name"
              @click="activeOutletIndex = index"
              :class="[
                'p-4 sm:p-5 rounded-2xl text-left border transition-all duration-300 focus:outline-none flex flex-col justify-between gap-1 w-full',
                activeOutletIndex === index 
                  ? 'bg-white border-chikuro-red shadow-md shadow-chikuro-red/5' 
                  : 'bg-white/50 hover:bg-white border-gray-200'
              ]"
            >
              <div class="flex items-center justify-between gap-2 w-full">
                <span class="text-xs font-bold text-gray-400 uppercase tracking-wider">{{ outlet.city }}</span>
                <!-- Live Opening Status Badge -->
                <span 
                  :class="[
                    'text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-widest',
                    isOutletOpen(outlet) 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  ]"
                >
                  {{ isOutletOpen(outlet) ? 'Open Now' : 'Closed' }}
                </span>
              </div>
              <h4 :class="[
                'text-sm sm:text-base font-black transition-colors',
                activeOutletIndex === index ? 'text-chikuro-red' : 'text-chikuro-dark'
              ]">
                {{ outlet.name }}
              </h4>
            </button>
          </div>

          <!-- Outlet Display Details -->
          <div class="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-card flex flex-col justify-between text-left">
            <div v-if="activeOutlet">
              <div class="flex items-center justify-between gap-4 border-b border-gray-100 pb-5 mb-5">
                <div>
                  <span class="text-xs font-bold text-chikuro-red uppercase tracking-widest">Active Outlet</span>
                  <h3 class="text-xl sm:text-2xl font-black text-chikuro-dark mt-1">
                    {{ activeOutlet.name }}
                  </h3>
                </div>
                <div class="text-center font-sans font-black text-sm text-gray-400 shrink-0">
                  10:00 - 22:00
                </div>
              </div>

              <!-- Address Detail -->
              <div class="flex items-start gap-4 mb-6">
                <div class="w-10 h-10 rounded-full bg-chikuro-red/5 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-chikuro-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xs font-bold text-chikuro-dark uppercase tracking-wider mb-1">Outlet Address</h4>
                  <p class="text-sm text-gray-500 leading-relaxed">
                    {{ activeOutlet.address }}
                  </p>
                </div>
              </div>

              <!-- Phone Contact Detail -->
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-chikuro-red/5 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-chikuro-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 00.906.671l2.583-.797a1 1 0 011.168.49L17.333 11a1 1 0 01-.453 1.168l-2.583.797a1 1 0 00-.671.906l.548 2.2a1 1 0 01-.725.94H15A2 2 0 0113 21h-3a9 9 0 01-9-9V5z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xs font-bold text-chikuro-dark uppercase tracking-wider mb-1">Outlet Phone</h4>
                  <a :href="`tel:${activeOutlet.phone.replace(/[^+\d]/g, '')}`" class="text-sm text-gray-500 hover:text-chikuro-red font-semibold transition-colors duration-300">
                    {{ activeOutlet.phone }}
                  </a>
                </div>
              </div>
            </div>

            <!-- Action buttons -->
            <div v-if="activeOutlet" class="pt-6 border-t border-gray-100 mt-6 flex items-center gap-3.5">
              <a 
                :href="activeOutlet.mapLink"
                target="_blank"
                class="px-5 py-2.5 rounded-full bg-chikuro-red hover:bg-chikuro-redHover text-white text-xs font-bold shadow-md shadow-chikuro-red/20 transition-all duration-300"
              >
                OPEN IN MAPS
              </a>
              <a 
                href="https://wa.me/6281234567890"
                target="_blank"
                class="px-5 py-2.5 rounded-full border border-gray-200 hover:border-chikuro-red hover:text-chikuro-red text-chikuro-dark text-xs font-bold transition-all duration-300"
              >
                CONTACT STORE
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
