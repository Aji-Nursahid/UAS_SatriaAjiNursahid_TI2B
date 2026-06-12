<script setup lang="ts">
import { ref, computed } from 'vue'

const searchQuery = ref('')
const selectedCategory = ref('All')
const activeItemDetails = ref<any | null>(null)

const categories = ['All', 'Chiro', 'Gyuro', 'Norimaki Bites', 'Satsuro - Age', 'Dezaro']

const baseUrl = import.meta.env.BASE_URL;
const menuItems = [
  {
    id: 1,
    name: 'Chikuro',
    category: 'Chiro',
    price: 'IDR 38.000',
    description: 'Long, crunchy chicken rolls filled with tender chicken and Chikuros signature spices. Available in various sizes, including Chiro Medium (18 cm), Chiro Large (25 cm), and Chiro Super Large (35 cm).',
    icon: '🐔',
    image: '/images/Produk_Chikuro_1.jpg',
    spicy: false,
    bestSeller: true,
    ingredients: ['Juicy Chicken', 'Signature Sauce', 'Premium Flour', 'Seasoning']
  },
  {
    id: 2,
    name: 'Gyuro',
    category: 'Gyuro',
    price: 'IDR 32.000',
    description: 'Beef roll with a creamy sauce filling that melts inside, with special seasoning, available in sizes (18cm).',
    icon: '🐮',
    image: '/images/Produk_Gyuro_2.jpg',
    spicy: true,
    bestSeller: true,
    ingredients: ['Premium Beef', 'Hot Chili Paste', 'Melting Cheddar Cheese', 'Spicy Herbs']
  },
  {
    id: 3,
    name: 'Norimaki Beef',
    category: 'Norimaki Bites',
    price: 'IDR 28.000',
    description: 'The beef version of Norimaki Bites, with quality beef combined with a crispy layer of nori.',
    icon: '🐮',
    image: '/images/Produk_Norimaki_Beef.jpg',
    spicy: true,
    bestSeller: false,
    ingredients: ['Minced Beef', 'Fresh Nori', 'Chili Powder', 'Shredded Cheese']
  },
  {
    id: 4,
    name: 'Norimaki Chicken',
    category: 'Norimaki Bites',
    price: 'IDR 25.000',
    description: 'Crispy chicken snacks wrapped in nori, with special seasoning.',
    icon: '🐔',
    image: '/images/Produk_Norimaki_Chicken.jpg',
    spicy: false,
    bestSeller: false,
    ingredients: ['Minced Chicken', 'Nori Powder', 'Cheese Glaze']
  },
  {
    id: 5,
    name: 'Satsuro - Age',
    category: 'Satsuro - Age',
    price: 'IDR 24.000',
    description: 'Fish cake made from dory fish with a soft and chewy texture.',
    icon: '🦈๋࣭⭑',
    image: '/images/Produk_Satsuroage.jpg',
    spicy: false,
    bestSeller: false,
    ingredients: ['Frehs Fish', 'Premium Flour', 'Herbs']
  },
  {
    id: 6,
    name: 'Japanese Ocha Lychee',
    category: 'Dezaro',
    price: 'IDR 13.000',
    description: 'Typical Japanese green tea combined with the sweet and fresh taste of lychee fruit.',
    icon: '🍵',
    image: '/images/Produk_Leci.jpg',
    spicy: false,
    bestSeller: false,
    ingredients: ['Premium Tea Leaf', 'Fresh Lychee', 'Sugar Powder']
  },
  {
    id: 7,
    name: 'Japanese Ocha Green Tea',
    category: 'Dezaro',
    price: 'IDR 13.000',
    description: 'Made from selected tea leaves, it provides a light, slightly bitter, and refreshing sensation.',
    icon: '🍵',
    image: '/images/Produk_Ocha.jpg',
    spicy: false,
    bestSeller: false,
    ingredients: ['Premium Green Tea', 'Sugar Powder']
  },
  {
    id: 8,
    name: 'Japanese Ocha Yakult Strawberry',
    category: 'Dezaro',
    price: 'IDR 18.000',
    description: 'A Japanese green tea blended with Yakult and strawberries. Its sweet and refreshing.',
    icon: '🍵',
    image: '/images/Produk_Stroberi_Yakult.jpg',
    spicy: false,
    bestSeller: true,
    ingredients: ['Premium Tea Leaf', 'Fresh Strawberry', 'Sugar Syrup', 'Yakult']
  },
  {
    id: 9,
    name: 'Umami Matcha With Cream Cheese Glaze',
    category: 'Dezaro',
    price: 'IDR 22.000',
    description: 'Premium matcha drink with a distinctive taste that is slightly bitter and slightly sweet, combined with creamy cream cheese glaze.',
    icon: '🍵',
    image: '/images/Produk_Matcha.jpg',
    spicy: false,
    bestSeller: true,
    ingredients: ['Uji-Matcha Quality', 'Fresh Ice Cream', 'Cream Cheese']
  },
  {
    id: 10,
    name: 'Umami Taro With Cream Cheese Glaze',
    category: 'Dezaro',
    price: 'IDR 23.000',
    description: 'Taro drink with a sweet, creamy, and smooth taste, combined with a savory and creamy cream cheese glaze.',
    icon: '🍠',
    image: '/images/Produk_Taro.jpg',
    spicy: false,
    bestSeller: true,
    ingredients: ['Fresh Cream', 'Fresh Taro', 'Sugar Syrup', 'Cheese Glaze']
  },
]

// Filter and search logic
const filteredItems = computed(() => {
  return menuItems.filter(item => {
    const matchesCategory = selectedCategory.value === 'All' || item.category === selectedCategory.value
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCategory && matchesSearch
  })
})

const openDetails = (item: any) => {
  activeItemDetails.value = item
}

const closeDetails = () => {
  activeItemDetails.value = null
}

const getWhatsAppLink = (itemName: string) => {
  const message = `Halo Chikuro! Saya tertarik untuk memesan menu: ${itemName}. Mohon informasinya untuk pemesanan online.`
  return `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      
      <!-- Page Header -->
      <div class="text-center mb-12">
        <span class="text-xs font-black uppercase tracking-widest text-chikuro-red">Our Menu</span>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-chikuro-dark mt-2 mb-4 uppercase">
          CHIKURO CULINARY CATALOG
        </h1>
        <p class="max-w-xl mx-auto text-sm sm:text-base text-gray-500 leading-relaxed">
          Premium crispy rolls with delicious melting contents. Filter by categories to discover your favorite taste!
        </p>
        <div class="w-24 h-1.5 bg-chikuro-red mx-auto mt-4 rounded-full"></div>
      </div>

      <!-- Filters & Search Bar -->
      <div class="flex flex-col lg:flex-row items-center justify-between gap-6 mb-10 bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100">
        <!-- Search Input -->
        <div class="relative w-full lg:max-w-md">
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Search items name or flavor..."
            class="w-full pl-11 pr-10 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-chikuro-red focus:ring-2 focus:ring-chikuro-red/10 text-sm transition-all duration-300"
          />
          <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <button 
            v-if="searchQuery" 
            @click="searchQuery = ''"
            class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-chikuro-red transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Categories Filters -->
        <div class="flex flex-wrap items-center justify-center gap-2">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="selectedCategory = cat"
            :class="[
              'px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 focus:outline-none',
              selectedCategory === cat 
                ? 'bg-chikuro-red text-white shadow-md shadow-chikuro-red/20' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Menu Grid -->
      <div v-if="filteredItems.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <div 
          v-for="item in filteredItems" 
          :key="item.id"
          @click="openDetails(item)"
          class="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-premium-hover hover:-translate-y-2 border border-gray-100 transition-all duration-300 cursor-pointer flex flex-col justify-between"
        >
          <!-- Product Image & Badges -->
          <div class="relative aspect-[4/3] bg-gray-100 overflow-hidden">
            <img 
              :src="baseUrl + item.image" 
              :alt="item.name" 
              class="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <!-- Best Seller / Spicy Badges -->
            <div class="absolute top-3 left-3 flex flex-col gap-1.5">
              <span v-if="item.bestSeller" class="bg-yellow-400 text-chikuro-dark font-extrabold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                ⭐ BEST SELLER
              </span>
              <span v-if="item.spicy" class="bg-red-600 text-white font-extrabold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-0.5">
                🔥 FLAMIN HOT
              </span>
            </div>
            
            <div class="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold text-chikuro-red uppercase tracking-wider shadow-sm border border-gray-100">
              {{ item.category }}
            </div>
          </div>

          <!-- Product Details -->
          <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-1.5 mb-2">
                <span class="text-xl">{{ item.icon }}</span>
                <h3 class="text-lg font-black text-chikuro-dark group-hover:text-chikuro-red transition-colors duration-300">
                  {{ item.name }}
                </h3>
              </div>
              <p class="text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">
                {{ item.description }}
              </p>
            </div>
            
            <div class="flex items-center justify-between pt-4 border-t border-gray-100">
              <span class="text-base font-extrabold text-chikuro-red">{{ item.price }}</span>
              <span class="text-xs font-bold text-chikuro-dark group-hover:text-chikuro-red flex items-center gap-1 transition-colors">
                VIEW
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- No Results State -->
      <div v-else class="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
        <span class="text-5xl">🔍</span>
        <h3 class="text-xl font-bold text-chikuro-dark mt-4 mb-2">No Items Found</h3>
        <p class="text-gray-500 text-sm max-w-xs mx-auto">
          We couldn't find any products matching "{{ searchQuery }}". Try searching for another keyword or select a different category.
        </p>
        <button 
          @click="searchQuery = ''; selectedCategory = 'All'"
          class="mt-6 px-5 py-2.5 bg-chikuro-red text-white text-xs font-bold rounded-full hover:bg-chikuro-redHover shadow-md transition-all duration-300 focus:outline-none"
        >
          Reset Filters
        </button>
      </div>

    </div>

    <!-- Product Detail Modal (Overlay) -->
    <Transition name="modal-fade">
      <div 
        v-if="activeItemDetails" 
        class="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        @click.self="closeDetails"
      >
        <div 
          class="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full border border-white/20 transform scale-100 transition-all duration-300 flex flex-col md:flex-row max-h-[90vh] md:max-h-[500px]"
          @click.stop
        >
          <!-- Left: Image (Top on mobile) -->
          <div class="w-full md:w-1/2 relative bg-gray-100 min-h-[200px] md:min-h-full">
            <img 
              :src="activeItemDetails.image" 
              :alt="activeItemDetails.name" 
              class="w-full h-full object-cover"
            />
            <div class="absolute top-4 left-4 flex flex-col gap-1.5">
              <span v-if="activeItemDetails.bestSeller" class="bg-yellow-400 text-chikuro-dark font-extrabold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                ⭐ BEST SELLER
              </span>
            </div>
            <!-- Mobile Close Button -->
            <button 
              @click="closeDetails"
              class="md:hidden absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full transition-colors border border-white/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Right: Details (Bottom on mobile) -->
          <div class="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto text-left">
            <div>
              <!-- Header -->
              <div class="flex items-center justify-between mb-4">
                <span class="text-xs font-bold text-chikuro-red uppercase tracking-widest">{{ activeItemDetails.category }}</span>
                <!-- Desktop Close Button -->
                <button 
                  @click="closeDetails"
                  class="hidden md:block text-gray-400 hover:text-chikuro-red transition-colors p-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <!-- Title -->
              <h2 class="text-2xl font-black text-chikuro-dark mb-3 flex items-center gap-2">
                <span>{{ activeItemDetails.icon }}</span>
                <span>{{ activeItemDetails.name }}</span>
              </h2>

              <!-- Description -->
              <p class="text-sm text-gray-500 leading-relaxed mb-5">
                {{ activeItemDetails.description }}
              </p>

              <!-- Ingredients -->
              <div class="mb-6">
                <h4 class="text-xs font-bold text-chikuro-dark uppercase tracking-wider mb-2">Ingredients:</h4>
                <div class="flex flex-wrap gap-1.5">
                  <span 
                    v-for="ing in activeItemDetails.ingredients" 
                    :key="ing"
                    class="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full font-medium"
                  >
                    {{ ing }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Footer Price & WhatsApp -->
            <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
              <div class="flex flex-col">
                <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Price</span>
                <span class="text-xl font-black text-chikuro-red">{{ activeItemDetails.price }}</span>
              </div>
              <a 
                :href="getWhatsAppLink(activeItemDetails.name)"
                target="_blank"
                class="flex items-center gap-1.5 px-5 py-3 rounded-full bg-chikuro-red hover:bg-chikuro-redHover text-white text-xs font-bold shadow-md shadow-chikuro-red/20 transition-all duration-300"
              >
                <span>ORDER VIA WA</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.747 1.451 5.436.002 9.858-4.384 9.86-9.775.002-2.611-1.015-5.066-2.868-6.92C16.48 2.056 14.04 1.04 11.43 1.04 5.992 1.04 1.573 5.427 1.57 10.816c-.001 1.701.447 3.362 1.3 4.8l-.996 3.639 3.773-.989z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* Modal Transition */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active > div {
  animation: modal-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal-fade-leave-active > div {
  animation: modal-zoom 0.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) reverse;
}

@keyframes modal-zoom {
  0% {
    transform: scale(0.9) translateY(10px);
  }
  100% {
    transform: scale(1) translateY(0);
  }
}
</style>
