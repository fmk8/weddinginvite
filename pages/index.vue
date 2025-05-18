<template>
  <div>
    <!-- Hero Section with Names -->
    <section v-motion="{ initial: { opacity: 0, y: 32 }, enter: { opacity: 1, y: 0, transition: { duration: 1 } } }" class="py-12 md:py-20 bg-beige rounded-xl shadow-lg border-4 border-gold mx-auto max-w-3xl mt-6 mb-8 text-center">
      <h1 class="text-xl md:text-2xl text-burgundy font-secondary mb-2 tracking-widest">Welcome to the wedding reception of</h1>
      <div v-motion="{ initial: { opacity: 0, scale: 0.8 }, enter: { opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.7 } } }" class="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 mb-6">
        <span class="text-4xl md:text-6xl font-primary text-gold">Fawad</span>
        <span class="text-3xl md:text-5xl font-secondary text-burgundy">&</span>
        <span class="text-4xl md:text-6xl font-primary text-gold">Nimrah</span>
      </div>
      <!-- Countdown Timer -->
      <div v-motion="{ initial: { opacity: 0, y: 24 }, enter: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.7 } } }" class="flex flex-col items-center mb-6">
        <div class="text-lg text-burgundy font-semibold mb-1">Join us on:</div>
        <div class="text-xl text-gold font-secondary mb-4">October 11, 2025 at 17:00</div>
        <div class="flex gap-4 md:gap-8">
          <div class="flex flex-col items-center">
            <div class="text-3xl md:text-4xl font-bold text-burgundy">{{ countdown.days }}</div>
            <div class="text-xs md:text-sm text-burgundy">Days</div>
          </div>
          <div class="flex flex-col items-center">
            <div class="text-3xl md:text-4xl font-bold text-burgundy">{{ countdown.hours }}</div>
            <div class="text-xs md:text-sm text-burgundy">Hours</div>
          </div>
          <div class="flex flex-col items-center">
            <div class="text-3xl md:text-4xl font-bold text-burgundy">{{ countdown.minutes }}</div>
            <div class="text-xs md:text-sm text-burgundy">Minutes</div>
          </div>
          <div class="flex flex-col items-center">
            <div class="text-3xl md:text-4xl font-bold text-burgundy">{{ countdown.seconds }}</div>
            <div class="text-xs md:text-sm text-burgundy">Seconds</div>
          </div>
        </div>
      </div>
      <div v-motion="{ initial: { opacity: 0, y: 12 }, enter: { opacity: 1, y: 0, transition: { delay: 1, duration: 0.6 } } }" class="mt-6">
        <NuxtLink to="/rsvp" class="inline-block px-8 py-3 bg-burgundy text-beige font-secondary text-lg rounded-full shadow-lg hover:bg-gold hover:text-black transition">RSVP Now</NuxtLink>
      </div>
    </section>

    <!-- Decorative Pattern -->
    <div class="w-full h-8 bg-repeat-x my-6" style="background-image: url('/img/nikahnama-pattern.png')"></div>

    <!-- Wedding Information Section -->
    <section v-motion="{ initial: { opacity: 0, y: 32 }, enter: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } } }" class="section max-w-4xl mx-auto bg-beige bg-opacity-90 rounded-xl border-2 border-gold shadow-md px-4 py-8">
      <h2 class="section-title text-2xl md:text-3xl font-secondary text-burgundy mb-8">Wedding Information</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Venue Card -->
        <div v-motion="{ initial: { opacity: 0, y: 24 }, enter: { opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.6 } } }" class="info-card bg-white/80 border border-gold rounded-lg p-6 text-center shadow hover:shadow-lg transition">
          <div class="text-3xl mb-2">📍</div>
          <h3 class="text-lg font-secondary text-burgundy mb-1">Venue</h3>
          <p class="text-black">Grand Celebration Hall</p>
          <p class="text-black">123 Wedding Avenue</p>
          <p class="text-black">Amsterdam, Netherlands</p>
          <a href="https://maps.google.com" target="_blank" class="inline-block mt-2 px-4 py-1 bg-gold text-black rounded-full text-sm font-medium shadow hover:bg-burgundy hover:text-beige transition">View Map</a>
        </div>
        
        <!-- Parking Card -->
        <div v-motion="{ initial: { opacity: 0, y: 24 }, enter: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.6 } } }" class="info-card bg-white/80 border border-gold rounded-lg p-6 text-center shadow hover:shadow-lg transition">
          <div class="text-3xl mb-2">🅿️</div>
          <h3 class="text-lg font-secondary text-burgundy mb-1">Parking</h3>
          <p class="text-black">Free parking available on-site</p>
          <p class="text-black">Additional parking at City Garage</p>
          <p class="text-black">2 blocks away, $10 flat rate</p>
        </div>
        
        <!-- Schedule Card -->
        <div v-motion="{ initial: { opacity: 0, y: 24 }, enter: { opacity: 1, y: 0, transition: { delay: 0.9, duration: 0.6 } } }" class="info-card bg-white/80 border border-gold rounded-lg p-6 text-center shadow hover:shadow-lg transition">
          <div class="text-3xl mb-2">🕒</div>
          <h3 class="text-lg font-secondary text-burgundy mb-1">Schedule</h3>
          <p class="text-black">5:00 PM - Arrival & Welcome</p>
          <p class="text-black">6:00 PM - Dinner Service</p>
          <p class="text-black">8:00 PM - Festivities</p>
          <p class="text-black">11:00 PM - Conclusion</p>
        </div>
      </div>
    </section>
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
  
  // Set up interval
  countdownInterval = setInterval(updateCountdown, 1000);
});

onBeforeUnmount(() => {
  // Clear interval when component is unmounted
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
});
</script>

<style scoped>
.home-page {
  background-color: var(--bg-primary);
}

/* Hero Section */
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  color: var(--color-primary);
  text-align: center;
  padding: 8rem 2rem;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.welcome-message {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: normal;
  animation: fadeIn 1.5s ease;
}

.couple-names {
  font-size: 4rem;
  margin-bottom: 3rem;
  line-height: 1.2;
  font-family: var(--font-secondary);
}

.name {
  color: var(--color-tertiary);
  animation: shimmer 3s infinite;
  display: inline-block;
}

.ampersand {
  color: var(--color-primary);
  margin: 0 1rem;
  font-style: italic;
}

/* Countdown Styles */
.countdown-container {
  margin: 3rem auto;
  max-width: 600px;
}

.countdown-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.wedding-date {
  font-size: 1.8rem;
  color: var(--color-tertiary);
  margin-bottom: 2rem;
  font-family: var(--font-secondary);
}

.countdown {
  display: flex;
  justify-content: center;
  gap: 2rem;
  text-align: center;
  margin-top: 1rem;
}

.countdown-item {
  background: rgba(0, 0, 0, 0.5);
  border: 2px solid var(--color-tertiary);
  padding: 1rem;
  border-radius: 8px;
  min-width: 80px;
}

.countdown-value {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--color-tertiary);
  font-family: var(--font-secondary);
}

.countdown-label {
  font-size: 1rem;
  margin-top: 0.25rem;
}

.hero-actions {
  margin-top: 3rem;
}

.hero-actions .btn {
  padding: 1rem 3rem;
  font-size: 1.2rem;
  background-color: var(--color-secondary);
  border: 2px solid var(--color-tertiary);
}

.hero-actions .btn:hover {
  background-color: var(--color-tertiary);
  color: var(--color-quaternary);
}

/* Wedding Info Section */
.wedding-info {
  background-color: var(--bg-primary);
}

.info-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.info-card {
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  border-bottom: 4px solid var(--color-secondary);
}

.info-card:hover {
  transform: translateY(-5px);
}

.info-card-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--color-secondary);
}

.info-card h3 {
  color: var(--color-secondary);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.btn-small {
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  background-color: var(--color-secondary);
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.btn-small:hover {
  background-color: var(--color-tertiary);
  color: var(--color-quaternary);
}

/* Animations */
@keyframes shimmer {
  0% { opacity: 0.8; }
  50% { opacity: 1; }
  100% { opacity: 0.8; }
}

/* Responsive Styles */
@media (max-width: 768px) {
  .couple-names {
    font-size: 3rem;
  }
  
  .countdown {
    gap: 1rem;
  }
  
  .countdown-item {
    min-width: 60px;
    padding: 0.75rem;
  }
  
  .countdown-value {
    font-size: 1.75rem;
  }
}

@media (max-width: 480px) {
  .couple-names {
    font-size: 2.5rem;
  }
  
  .countdown {
    flex-wrap: wrap;
  }
}
</style>
