<template>
  <footer id="footer" class="bg-white pt-16 pb-8 border-t border-gray-100 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- 3 Columns Layout -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-left mb-12">
        <!-- Column 1: Address -->
        <div class="flex flex-col gap-4">
          <h4 class="text-base font-extrabold tracking-wider text-chikuro-dark uppercase border-l-4 border-chikuro-red pl-3">
            ADDRESS
          </h4>
          <div class="flex items-start gap-3 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-chikuro-red mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p class="text-sm text-gray-500 leading-relaxed">
              Chikuro Head Office & Flagship Outlet,<br />
              Jl. Kelapa Gading Boulevard Blok WA2 No. 12-14,<br />
              Kelapa Gading Barat, DKI Jakarta 14240
            </p>
          </div>
        </div>

        <!-- Column 2: Contact -->
        <div class="flex flex-col gap-4">
          <h4 class="text-base font-extrabold tracking-wider text-chikuro-dark uppercase border-l-4 border-chikuro-red pl-3">
            CONTACT
          </h4>
          <div class="flex flex-col gap-3.5 mt-2">
            <div class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-chikuro-red shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@chikuro.co.id" class="text-sm text-gray-500 hover:text-chikuro-red transition-colors duration-300">
                info@chikuro.co.id
              </a>
            </div>
            <div class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-chikuro-red shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 00.906.671l2.583-.797a1 1 0 011.168.49L17.333 11a1 1 0 01-.453 1.168l-2.583.797a1 1 0 00-.671.906l.548 2.2a1 1 0 01-.725.94H15A2 2 0 0113 21h-3a9 9 0 01-9-9V5z" />
              </svg>
              <a href="tel:+622145847226" class="text-sm text-gray-500 hover:text-chikuro-red transition-colors duration-300">
                +62 21 4584 7226
              </a>
            </div>
            <div class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-chikuro-red shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <a href="https://wa.me/6281234567890" target="_blank" class="text-sm text-gray-500 hover:text-chikuro-red transition-colors duration-300">
                +62 812 3456 7890 (WhatsApp)
              </a>
            </div>
          </div>
        </div>

        <!-- Column 3: Opening Hours -->
        <div class="flex flex-col gap-4">
          <h4 class="text-base font-extrabold tracking-wider text-chikuro-dark uppercase border-l-4 border-chikuro-red pl-3">
            OPENING HOURS
          </h4>
          <div class="flex items-start gap-3 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-chikuro-red mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div class="text-sm text-gray-500 flex flex-col gap-2">
              <div class="flex justify-between w-48 border-b border-gray-100 pb-1">
                <span class="font-semibold text-chikuro-dark">Mon - Fri:</span>
                <span>10:00 - 22:00</span>
              </div>
              <div class="flex justify-between w-48 pb-1">
                <span class="font-semibold text-chikuro-dark">Sat - Sun:</span>
                <span>09:00 - 23:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Copyright separator -->
      <div class="border-t border-gray-100 pt-8 mt-4">
        <p class="text-xs text-gray-400 text-center font-medium uppercase tracking-widest">
          © Copyright Chikuro. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
