<template>
  <section 
    class="max-w-4xl mx-auto px-4 py-10 relative"
    v-motion="{ initial: { opacity: 0 }, enter: { opacity: 1, transition: { duration: 800 } } }"
  >
    <!-- Decorative top element -->
    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-8 opacity-40">
      <img src="/img/ornate-divider.png" alt="" class="w-full h-full" />
    </div>
    
    <h2 
      class="text-2xl md:text-3xl font-decorative text-gold mb-12 text-center tracking-wider"
      v-motion="{ initial: { opacity: 0, y: -10 }, enter: { opacity: 1, y: 0, transition: { delay: 200, duration: 600 } } }"
    >
      Wedding Details
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Venue Card -->
      <div 
        class="bg-cream border-2 border-gold/40 rounded-lg p-6 text-center shadow-elegant group hover:shadow-gold-glow transition-all duration-500 overflow-hidden relative"
        v-scroll-animate="{ 
          initial: { opacity: 0, y: 50 }, 
          visible: { opacity: 1, y: 0, transition: { duration: 800, damping: 25 } } 
        }"
      >
        <!-- Ornate corner element -->
        <div class="absolute top-0 left-0 w-10 h-10 opacity-20">
          <img src="/img/corner-ornament.png" alt="" class="w-full h-full" />
        </div>
        <div class="absolute bottom-0 right-0 w-10 h-10 opacity-20 transform rotate-180">
          <img src="/img/corner-ornament.png" alt="" class="w-full h-full" />
        </div>
        
        <div 
          class="text-4xl mb-3 text-gold opacity-80 group-hover:scale-110 transition-transform duration-500"
          v-motion="{ initial: { scale: 0.8 }, enter: { scale: 1, transition: { delay: 400, duration: 500 } } }"
        >
          <span class="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>
        </div>
        
        <h3 class="text-xl font-secondary text-burgundy mb-3">Venue</h3>
        <div class="space-y-1 text-black mb-4">
          <p class="font-medium">Skihallen</p>
          <p>Åsveien 11A</p>
          <p>1424 Ski, Norway</p>
        </div>
        
        <a 
          href="https://maps.google.com" 
          target="_blank" 
          class="inline-block mt-2 px-5 py-2 bg-gold/90 text-burgundy rounded-full text-sm font-medium shadow hover:bg-burgundy hover:text-gold transition-colors duration-300 border border-gold/30"
        >
          View Map
        </a>
      </div>
      
      <!-- Parking Card -->
      <div 
        class="bg-cream border-2 border-gold/40 rounded-lg p-6 text-center shadow-elegant group hover:shadow-gold-glow transition-all duration-500 overflow-hidden relative"
        v-scroll-animate="{ 
          initial: { opacity: 0, y: 50 }, 
          visible: { opacity: 1, y: 0, transition: { duration: 800, delay: 200, damping: 25 } } 
        }"
      >
        <!-- Ornate corner element -->
        <div class="absolute top-0 left-0 w-10 h-10 opacity-20">
          <img src="/img/corner-ornament.png" alt="" class="w-full h-full" />
        </div>
        <div class="absolute bottom-0 right-0 w-10 h-10 opacity-20 transform rotate-180">
          <img src="/img/corner-ornament.png" alt="" class="w-full h-full" />
        </div>
        
        <div 
          class="text-4xl mb-3 text-gold opacity-80 group-hover:scale-110 transition-transform duration-500"
          v-motion="{ initial: { scale: 0.8 }, enter: { scale: 1, transition: { delay: 500, duration: 500 } } }"
        >
          <span class="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
          </span>
        </div>
        
        <h3 class="text-xl font-secondary text-burgundy mb-3">Parking</h3>
        <div class="space-y-1 text-black mb-4">
          <p>Free parking available on-site</p>
          <p>Additional parking at City Garage</p>
          <p>2 blocks away, $10 flat rate</p>
        </div>
      </div>
      
      <!-- Schedule Card -->
      <div 
        class="bg-cream border-2 border-gold/40 rounded-lg p-6 text-center shadow-elegant group hover:shadow-gold-glow transition-all duration-500 overflow-hidden relative"
        v-scroll-animate="{ 
          initial: { opacity: 0, y: 50 }, 
          visible: { opacity: 1, y: 0, transition: { duration: 800, delay: 400, damping: 25 } } 
        }"
      >
        <!-- Ornate corner element -->
        <div class="absolute top-0 left-0 w-10 h-10 opacity-20">
          <img src="/img/corner-ornament.png" alt="" class="w-full h-full" />
        </div>
        <div class="absolute bottom-0 right-0 w-10 h-10 opacity-20 transform rotate-180">
          <img src="/img/corner-ornament.png" alt="" class="w-full h-full" />
        </div>
        
        <div 
          class="text-4xl mb-3 text-gold opacity-80 group-hover:scale-110 transition-transform duration-500"
          v-motion="{ initial: { scale: 0.8 }, enter: { scale: 1, transition: { delay: 600, duration: 500 } } }"
        >
          <span class="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
        </div>
        
        <h3 class="text-xl font-secondary text-burgundy mb-3">Schedule</h3>
        <div class="space-y-1 text-black mb-4">
          <p><span class="text-burgundy font-medium">5:00 PM</span> - Arrival & Welcome</p>
          <p><span class="text-burgundy font-medium">6:00 PM</span> - Dinner Service</p>
          <p><span class="text-burgundy font-medium">8:00 PM</span> - Festivities</p>
          <p><span class="text-burgundy font-medium">11:00 PM</span> - Conclusion</p>
        </div>
      </div>
    </div>
    
    <!-- Decorative bottom element -->
    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-8 opacity-40 rotate-180">
      <img src="/img/ornate-divider.png" alt="" class="w-full h-full" />
    </div>
  </section>
</template>
