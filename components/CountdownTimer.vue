<template>
  <div 
    class="flex flex-col items-center mb-6 py-4"
    v-scroll-animate="{ initial: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 800 } } }"
  >
    <div 
      class="text-xl text-burgundy font-secondary mb-1 tracking-wide"
      v-scroll-animate="{ initial: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 600 } } }"
    >
      Join us on
    </div>
    <div 
      class="text-2xl md:text-3xl text-gold font-decorative mb-6 tracking-wider"
      v-scroll-animate="{ initial: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 700, delay: 200 } } }"
    >
      Saturday, October 11, 2025 at 5 PM
    </div>
    
    <div 
      class="flex gap-6 md:gap-10 p-4 rounded-lg border border-gold/30 bg-cream/90 shadow-elegant"
      v-scroll-animate="{ initial: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 800, delay: 300 } } }"
    >
      <div class="flex flex-col items-center" v-scroll-animate="{ initial: { scale: 0.9, opacity: 0.5 }, visible: { scale: 1, opacity: 1, transition: { duration: 400, delay: 400 } } }">
        <div class="text-3xl md:text-5xl font-bold text-burgundy font-secondary">{{ countdown.days }}</div>
        <div class="text-xs md:text-sm text-burgundy/80 uppercase tracking-wide">Days</div>
      </div>
      
      <div class="self-stretch w-px bg-gold/30 mx-1"></div>
      
      <div class="flex flex-col items-center" v-scroll-animate="{ initial: { scale: 0.9, opacity: 0.5 }, visible: { scale: 1, opacity: 1, transition: { duration: 400, delay: 500 } } }">
        <div class="text-3xl md:text-5xl font-bold text-burgundy font-secondary">{{ countdown.hours }}</div>
        <div class="text-xs md:text-sm text-burgundy/80 uppercase tracking-wide">Hours</div>
      </div>
      
      <div class="self-stretch w-px bg-gold/30 mx-1"></div>
      
      <div class="flex flex-col items-center" v-scroll-animate="{ initial: { scale: 0.9, opacity: 0.5 }, visible: { scale: 1, opacity: 1, transition: { duration: 400, delay: 600 } } }">
        <div class="text-3xl md:text-5xl font-bold text-burgundy font-secondary">{{ countdown.minutes }}</div>
        <div class="text-xs md:text-sm text-burgundy/80 uppercase tracking-wide">Minutes</div>
      </div>
      
      <div class="self-stretch w-px bg-gold/30 mx-1"></div>
      
      <div class="flex flex-col items-center" v-scroll-animate="{ initial: { scale: 0.9, opacity: 0.5 }, visible: { scale: 1, opacity: 1, transition: { duration: 400, delay: 700 } } }">
        <div class="text-3xl md:text-5xl font-bold text-burgundy font-secondary">{{ countdown.seconds }}</div>
        <div class="text-xs md:text-sm text-burgundy/80 uppercase tracking-wide">Seconds</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onBeforeUnmount } from 'vue';

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
