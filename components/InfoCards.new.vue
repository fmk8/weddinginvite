<template>
  <div class="flex flex-col items-center mb-3 sm:mb-4 py-2 sm:py-3">
    <div class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gold font-decorative mb-3 sm:mb-4 md:mb-6 tracking-wider px-2 text-center" v-motion="{ initial: { opacity: 0 }, enter: { opacity: 1, transition: { duration: 600, delay: 150 } } }">
      Wedding Details
    </div>
    
    <!-- Islamic decorative divider -->
    <div class="w-64 h-4 mb-4 mx-auto">
      <img src="/img/seperator.png" alt="" class="w-full h-full" />
    </div>
    
    <div class="max-w-4xl mx-auto px-3 sm:px-4 relative"
      v-motion="{ initial: { opacity: 0, y: 15 }, enter: { opacity: 1, y: 0, transition: { duration: 800, delay: 250 } } }"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-3xl mx-auto">
      <!-- Venue Card -->
      <div 
        class="bg-cream border-2 border-gold/40 rounded-lg p-4 sm:p-6 text-center shadow-elegant group hover:shadow-gold-glow transition-all duration-500 overflow-hidden relative"
        v-motion="{
          initial: { opacity: 0, y: 30 },
          enter: { opacity: 1, y: 0, transition: { duration: 600 } }
        }"
      >
        <!-- Ornate corner elements using corner.png - using CountdownTimer implementation -->
        <div class="absolute top-0 left-0 w-10 h-10 opacity-100">
          <CornerImage :rotation="90" />
        </div>
        <div class="absolute top-0 right-0 w-10 h-10 opacity-100">
          <CornerImage :rotation="180" />
        </div>
        <div class="absolute bottom-0 left-0 w-10 h-10 opacity-100">
          <CornerImage :rotation="0" />
        </div>
        <div class="absolute bottom-0 right-0 w-10 h-10 opacity-100">
          <CornerImage :rotation="-90" />
        </div>
        
        <div 
          class="text-3xl sm:text-4xl mb-2 sm:mb-3 text-gold group-hover:scale-110 transition-transform duration-500"
          v-motion="{ initial: { scale: 0.8 }, enter: { scale: 1, transition: { delay: 400, duration: 500 } } }"
        >
          <span class="w-12 h-12 sm:w-16 sm:h-16 bg-burgundy text-gold rounded-full flex items-center justify-center mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#d4af37">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>
        </div>
        
        <h3 class="text-lg sm:text-xl font-secondary text-burgundy mb-2 sm:mb-3 islamic-text-shadow">Venue</h3>
        <div class="space-y-1 text-black mb-3 sm:mb-4 text-sm sm:text-base enhanced-text">
          <p class="font-medium">Skihallen</p>
          <p>Åsveien 11A</p>
          <p>1424 Ski, Norway</p>
        </div>
        
        <a 
          href="https://www.google.com/maps/place/Ski+Hall+-+The+Palace+banquet+hall/@59.7142126,10.8322138,17z/data=!3m1!4b1!4m6!3m5!1s0x46415dd26b0fd0af:0x38eb2ac1a4b7cad3!8m2!3d59.7142099!4d10.8347887!16s%2Fg%2F11pdmfx0dt?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D" 
          target="_blank" 
          class="inline-block mt-2 px-4 sm:px-5 py-1.5 sm:py-2 bg-gold/90 text-burgundy rounded-full text-xs sm:text-sm font-medium shadow-elegant hover:bg-burgundy hover:text-gold transition-all duration-300 border border-gold/30 hover:shadow-gold-glow relative overflow-hidden group"
        >
          <span class="relative z-10">View Map</span>
          <span class="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
        </a>
      </div>
      
      <!-- Parking Card -->
      <div 
        class="bg-cream border-2 border-gold/40 rounded-lg p-6 text-center shadow-elegant group hover:shadow-gold-glow transition-all duration-500 overflow-hidden relative"
        v-motion="{
          initial: { opacity: 0, y: 30 },
          enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 150 } }
        }"
      >
        <!-- Ornate corner elements using corner.png - using CountdownTimer implementation -->
        <div class="absolute top-0 left-0 w-10 h-10 opacity-100">
          <CornerImage :rotation="90" />
        </div>
        <div class="absolute top-0 right-0 w-10 h-10 opacity-100">
          <CornerImage :rotation="180" />
        </div>
        <div class="absolute bottom-0 left-0 w-10 h-10 opacity-100">
          <CornerImage :rotation="0" />
        </div>
        <div class="absolute bottom-0 right-0 w-10 h-10 opacity-100">
          <CornerImage :rotation="-90" />
        </div>
        
        <div 
          class="text-4xl mb-3 text-gold group-hover:scale-110 transition-transform duration-500"
          v-motion="{ initial: { scale: 0.8 }, enter: { scale: 1, transition: { delay: 500, duration: 500 } } }"
        >
          <span class="w-12 h-12 sm:w-16 sm:h-16 bg-burgundy text-gold rounded-full flex items-center justify-center mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#d4af37">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
          </span>
        </div>
        
        <h3 class="text-lg sm:text-xl font-secondary text-burgundy mb-2 sm:mb-3 islamic-text-shadow">Parking</h3>
        <div class="space-y-1 text-black mb-3 sm:mb-4 text-sm sm:text-base enhanced-text">
          <p>Free parking available on-site</p>
        </div>
        
        <button 
          @click="openParkingModal = true"
          class="mt-1 px-4 sm:px-5 py-1.5 sm:py-2 bg-gold/90 text-burgundy rounded-full text-xs sm:text-sm font-medium shadow-elegant hover:bg-burgundy hover:text-gold transition-all duration-300 border border-gold/30 hover:shadow-gold-glow relative overflow-hidden group"
        >
          <span class="relative z-10">View Parking Map</span>
          <span class="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
        </button>
      </div>
    </div>
  </div>
</div>
  <!-- Parking Map Modal -->
  <div v-if="openParkingModal" class="fixed inset-0 flex items-center justify-center z-50 bg-black/70" @click.self="openParkingModal = false">
    <div class="bg-cream p-3 sm:p-4 rounded-lg max-w-2xl w-full mx-4 relative border-2 border-gold shadow-gold-glow">
      <button 
        @click="openParkingModal = false"
        class="absolute top-2 right-2 text-burgundy hover:text-gold transition-colors duration-200"
        aria-label="Close modal"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <h3 class="text-lg sm:text-xl font-secondary text-burgundy text-center mb-3 islamic-border pb-2">Parking Information</h3>
      
      <div class="flex items-center justify-center">
        <img src="/img/parking.png" alt="Parking Map" class="max-w-full h-auto rounded-md max-h-[70vh] object-contain" />
      </div>
      
      <div class="mt-3 text-center">
        <button 
          @click="openParkingModal = false"
          class="px-4 py-1.5 bg-burgundy text-beige rounded-full text-sm transition-colors hover:bg-gold hover:text-burgundy border border-gold/30"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CornerImage from '~/components/CornerImage.vue';

const openParkingModal = ref(false);
</script>
