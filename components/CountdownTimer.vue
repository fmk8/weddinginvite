<template>
  <div class="countdown-container flex flex-col items-center mb-3 sm:mb-4 py-2 sm:py-3">
    <div class="text-base sm:text-lg md:text-xl text-burgundy font-secondary mb-1 tracking-wide enhanced-text" v-motion="{ initial: { opacity: 0 }, enter: { opacity: 1, transition: { duration: 600 } } }">
      Join us on
    </div>
    <div class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gold font-decorative mb-3 sm:mb-4 md:mb-6 tracking-wider px-2 text-center" v-motion="{ initial: { opacity: 0 }, enter: { opacity: 1, transition: { duration: 600, delay: 150 } } }">
      Saturday, October 11, 2025 at 5 PM
    </div>
    
    <!-- Islamic decorative divider -->
    <div class="w-64 h-4 mb-4 mx-auto">
      <img src="/img/seperator.png" alt="" class="w-full h-full" />
    </div>
    
    <div class="flex gap-[2px] xs:gap-1 sm:gap-3 md:gap-6 lg:gap-10 p-1 xs:p-2 sm:p-3 md:p-4 rounded-lg border border-gold/40 xs:border-2 bg-cream/90 shadow-gold-glow w-fit max-w-[95vw] overflow-x-auto relative" v-motion="{ initial: { opacity: 0, y: 15 }, enter: { opacity: 1, y: 0, transition: { duration: 800, delay: 250 } } }">
      <!-- Ornate corner elements using corner.png -->
      <div class="absolute top-1 left-1 w-4 xs:w-6 h-4 xs:h-6">
        <CornerImage :rotation="90" />
      </div>
      <div class="absolute top-1 right-1 w-4 xs:w-6 h-4 xs:h-6">
        <CornerImage :rotation="180" />
      </div>
      <div class="absolute bottom-1 left-1 w-4 xs:w-6 h-4 xs:h-6">
        <CornerImage :rotation="0" />
      </div>
      <div class="absolute bottom-1 right-1 w-4 xs:w-6 h-4 xs:h-6">
        <CornerImage :rotation="-90" />
      </div>
      
      <div class="flex flex-col items-center min-w-[2.2rem] xs:min-w-[2.6rem] sm:min-w-[3.5rem] md:min-w-0" style="transition-delay: 100ms">
        <div class="text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-burgundy font-secondary">{{ countdown.days }}</div>
        <div class="text-[7px] xs:text-[9px] sm:text-xs md:text-sm text-burgundy/80 uppercase tracking-wide enhanced-text">Days</div>
      </div>
      
      <div class="self-stretch w-[1px] bg-gold/30"></div>
      
      <div class="flex flex-col items-center min-w-[2.2rem] xs:min-w-[2.6rem] sm:min-w-[3.5rem] md:min-w-0" style="transition-delay: 200ms">
        <div class="text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-burgundy font-secondary">{{ countdown.hours }}</div>
        <div class="text-[7px] xs:text-[9px] sm:text-xs md:text-sm text-burgundy/80 uppercase tracking-wide enhanced-text">Hours</div>
      </div>
      
      <div class="self-stretch w-[1px] bg-gold/30"></div>
      
      <div class="flex flex-col items-center min-w-[2.2rem] xs:min-w-[2.6rem] sm:min-w-[3.5rem] md:min-w-0" style="transition-delay: 300ms">
        <div class="text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-burgundy font-secondary">{{ countdown.minutes }}</div>
        <div class="text-[7px] xs:text-[9px] sm:text-xs md:text-sm text-burgundy/80 uppercase tracking-wide enhanced-text">Minutes</div>
      </div>
      
      <div class="self-stretch w-[1px] bg-gold/30"></div>
      
      <div class="flex flex-col items-center min-w-[2.2rem] xs:min-w-[2.6rem] sm:min-w-[3.5rem] md:min-w-0" style="transition-delay: 400ms">
        <div class="text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-burgundy font-secondary">{{ countdown.seconds }}</div>
        <div class="text-[7px] xs:text-[9px] sm:text-xs md:text-sm text-burgundy/80 uppercase tracking-wide enhanced-text">Seconds</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onBeforeUnmount } from 'vue';
import CornerImage from '~/components/CornerImage.vue';

// Wedding date - October 11, 2025 at 17:00
const weddingDate = new Date(2025, 9, 11, 17, 0, 0);
const countdown = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
});

// Update countdown every second
let countdownInterval;

const updateCountdown = () => {
  const now = new Date();
  const difference = weddingDate.getTime() - now.getTime();
  
  if (difference > 0) {
    countdown.value.days = Math.floor(difference / (1000 * 60 * 60 * 24));
    countdown.value.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    countdown.value.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    countdown.value.seconds = Math.floor((difference % (1000 * 60)) / 1000);
  } else {
    // Wedding day has arrived
    countdown.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
};

onBeforeMount(() => {
  // Initial update
  updateCountdown();
  
  // Set interval for countdown
  countdownInterval = setInterval(updateCountdown, 1000);
});

onBeforeUnmount(() => {
  // Clear interval when component is unmounted
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
});
</script>
