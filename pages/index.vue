<template>
  <div>
    <!-- Hero Section with Names -->
    <section 
      v-motion="{ initial: { opacity: 0 }, enter: { opacity: 1, transition: { duration: 1200 } } }" 
      class="py-16 md:py-24 bg-cream/90 rounded-xl shadow-elegant border-2 border-gold/60 mx-auto max-w-4xl mt-8 mb-10 text-center relative overflow-hidden"
    >
      <!-- Ornate corner elements -->
      <div class="absolute top-0 left-0 w-16 h-16 opacity-20" v-motion="{ initial: { opacity: 0, scale: 0.7 }, enter: { opacity: 0.2, scale: 1, transition: { duration: 800 } } }">
        <img src="/img/corner-ornament.png" alt="" class="w-full h-full" />
      </div>
      
      <div class="absolute top-0 right-0 w-16 h-16 opacity-20" v-motion="{ initial: { opacity: 0, scale: 0.7 }, enter: { opacity: 0.2, scale: 1, transition: { duration: 800 } } }">
        <img src="/img/corner-ornament.png" alt="" class="w-full h-full transform rotate-90" />
      </div>
      
      <div class="absolute bottom-0 right-0 w-16 h-16 opacity-20" v-motion="{ initial: { opacity: 0, scale: 0.7 }, enter: { opacity: 0.2, scale: 1, transition: { duration: 800 } } }">
        <img src="/img/corner-ornament.png" alt="" class="w-full h-full transform rotate-180" />
      </div>
      
      <div class="absolute bottom-0 left-0 w-16 h-16 opacity-20" v-motion="{ initial: { opacity: 0, scale: 0.7 }, enter: { opacity: 0.2, scale: 1, transition: { duration: 800 } } }">
        <img src="/img/corner-ornament.png" alt="" class="w-full h-full transform rotate-270" />
      </div>
      
      <h1 
        class="text-xl md:text-2xl text-burgundy font-secondary mb-6 tracking-widest"
        v-motion="{ initial: { opacity: 0, y: -10 }, enter: { opacity: 1, y: 0, transition: { delay: 300, duration: 700 } } }"
      >
        Together with their families
      </h1>
      
      <div 
        v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1, transition: { delay: 500, duration: 900 } } }" 
        class="flex flex-col justify-center items-center gap-3 mb-5"
      >
        <span class="text-4xl md:text-7xl font-decorative text-gold leading-tight">Fawad Mohyuddin</span>
        <div class="text-burgundy font-secondary text-sm md:text-base tracking-wide mb-2">Son of Tahira Jabeen Mohyuddin & late Ghulam Mohyuddin</div>
        
        <span class="text-3xl md:text-5xl font-secondary text-burgundy">&</span>
        
        <span class="text-4xl md:text-7xl font-decorative text-gold leading-tight mt-2">Nimrah Khan</span>
        <div class="text-burgundy font-secondary text-sm md:text-base tracking-wide">Daughter of Muhammad Tahir & Roohi Tahir</div>
      </div>
      
      <div 
        class="text-xl md:text-2xl text-burgundy font-secondary mb-8 tracking-wide"
        v-motion="{ initial: { opacity: 0 }, enter: { opacity: 1, transition: { delay: 700, duration: 700 } } }"
      >
        Request the pleasure of your company at their wedding reception
      </div>
      
      <!-- Countdown Timer Component -->
      <div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 900, duration: 700 } } }">
        <CountdownTimer />
      </div>
      
      <div 
        v-motion="{ initial: { opacity: 0, y: 12 }, enter: { opacity: 1, y: 0, transition: { delay: 1100, duration: 600 } } }" 
        class="mt-8"
      >
        <a 
          href="#rsvp" 
          class="inline-block px-10 py-3 bg-burgundy text-beige font-secondary text-lg rounded-full shadow-elegant hover:bg-gold hover:text-burgundy transition-all duration-300 border border-gold/40 hover:shadow-gold-glow"
          @click.prevent="scrollToRsvp"
        >
          RSVP Now
        </a>
      </div>
    </section>

    <!-- Decorative Divider -->
    <div class="w-full flex items-center justify-center my-10">
      <div class="w-72 h-8 opacity-40" v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 0.4, scale: 1, transition: { duration: 800 } } }">
        <img src="/img/ornate-divider.png" alt="" class="w-full h-full" />
      </div>
    </div>

    <!-- Wedding Information Section Component -->
    <div v-scroll-animate>
      <InfoCards />
    </div>
    
    <!-- Decorative Divider -->
    <div class="w-full flex items-center justify-center my-10">
      <div class="w-72 h-8 opacity-40" v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 0.4, scale: 1, transition: { duration: 800 } } }">
        <img src="/img/ornate-divider.png" alt="" class="w-full h-full" />
      </div>
    </div>
    
    <!-- RSVP Section -->
    <div 
      v-scroll-animate="{ 
        initial: { opacity: 0, y: 60 }, 
        visible: { opacity: 1, y: 0, transition: { duration: 1000, damping: 20 } } 
      }"
      class="my-10"
    >
      <RsvpForm />
    </div>
    
    <!-- Back to Top Button -->
    <div 
      v-show="showBackToTop" 
      class="fixed bottom-8 right-8 z-50 transition-all duration-500"
      :class="{ 'opacity-0 translate-y-10': !showBackToTop, 'opacity-100 translate-y-0': showBackToTop }"
    >
      <button 
        @click="scrollToTop" 
        class="w-14 h-14 rounded-full bg-burgundy text-gold flex items-center justify-center shadow-elegant hover:bg-gold hover:text-burgundy transition-all duration-300 border-2 border-gold/50 hover:shadow-gold-glow"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import CountdownTimer from '~/components/CountdownTimer.vue';
import InfoCards from '~/components/InfoCards.vue';
import RsvpForm from '~/components/RsvpForm.vue';

// Back to top button visibility
const showBackToTop = ref(false);

// Scroll event handler
const handleScroll = () => {
  // Show back to top button when scrolled down more than 500px
  showBackToTop.value = window.scrollY > 500;
};

// Scroll to RSVP section
const scrollToRsvp = () => {
  const rsvpElement = document.getElementById('rsvp');
  if (rsvpElement) {
    rsvpElement.scrollIntoView({ behavior: 'smooth' });
  }
};

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  // Remove scroll event listener
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>

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
