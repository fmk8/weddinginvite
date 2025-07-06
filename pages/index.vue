<template>
  <div>
    <!-- Hero Section with Names -->
    <section 
      v-motion="{ initial: { opacity: 0 }, enter: { opacity: 1, transition: { duration: 1200 } } }" 
      class="py-10 sm:py-16 md:py-24 bg-cream/90 rounded-lg sm:rounded-xl shadow-elegant border-2 border-gold/60 mx-auto max-w-4xl mt-4 sm:mt-8 mb-6 sm:mb-10 text-center relative overflow-hidden px-3 sm:px-4"
    >
      <!-- Ornate corner elements -->
      <div class="absolute top-0 left-0 w-32 h-32 opacity-1" v-motion="{ initial: { opacity: 0, scale: 0.7 }, enter: { opacity: 1, scale: 1, transition: { duration: 800 } } }">
        <CornerImage :rotation="90" />
      </div>
      
      <div class="absolute top-0 right-0 w-32 h-32 opacity-1" v-motion="{ initial: { opacity: 0, scale: 0.7 }, enter: { opacity: 1, scale: 1, transition: { duration: 800 } } }">
        <CornerImage :rotation="180" />
      </div>
      
      <div class="absolute bottom-0 right-0 w-32 h-32 opacity-1" v-motion="{ initial: { opacity: 0, scale: 0.7 }, enter: { opacity: 1, scale: 1, transition: { duration: 800 } } }">
        <CornerImage :rotation="-90" />
      </div>
      
      <div class="absolute bottom-0 left-0 w-32 h-32 opacity-1" v-motion="{ initial: { opacity: 0, scale: 0.7 }, enter: { opacity: 1, scale: 1, transition: { duration: 800 } } }">
        <CornerImage :rotation="0" />
      </div>
      
      <h1 
        class="text-lg sm:text-xl md:text-2xl text-burgundy font-secondary mb-4 sm:mb-6 tracking-widest text-shadow-burgundy enhanced-text"
        v-motion="{ initial: { opacity: 0, y: -10 }, enter: { opacity: 1, y: 0, transition: { delay: 300, duration: 700 } } }"
      >
        Together with their families
      </h1>
      
      <div 
        v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1, transition: { delay: 500, duration: 900 } } }" 
        class="flex flex-col justify-center items-center gap-2 sm:gap-3 mb-2 sm:mb-3"
      >
        <span class="font-decorative text-gold leading-tight px-2 text-shadow-gold" style="font-size: 4rem !important; line-height: 1.1;">Fawad Mohyuddin</span>
        <div class="text-burgundy font-secondary text-xs sm:text-sm md:text-base tracking-wide mb-1 sm:mb-2 px-4 enhanced-text">Son of Tahira Jabeen Mohyuddin & late Ghulam Mohyuddin</div>
        
        <span class="text-2xl sm:text-3xl md:text-5xl font-secondary text-burgundy">&</span>
        
        <span class="font-decorative text-gold leading-tight mt-1 sm:mt-2 px-2 text-shadow-gold" style="font-size: 4rem !important; line-height: 1.1;">Nimrah Khan</span>
        <div class="text-burgundy font-secondary text-xs sm:text-sm md:text-base tracking-wide px-4 enhanced-text">Daughter of Muhammad Tahir & Roohi Tahir</div>
      </div>
      <div 
        class="text-base sm:text-xl md:text-2xl text-burgundy font-secondary mb-2 mt-0 tracking-wide px-2 sm:px-4 enhanced-text"
        v-motion="{ initial: { opacity: 0 }, enter: { opacity: 1, transition: { delay: 700, duration: 700 } } }"
      >
        Request the pleasure of your company at their wedding reception
      </div>
      
      <!-- Separator image -->
      <div class="w-64 h-4 mx-auto mb-6">
        <img src="/img/seperator.png" alt="" class="w-full h-full" />
      </div>
      
      <!-- Countdown Timer Component -->
      <div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 900, duration: 700 } } }">
        <CountdownTimer />
      </div>
      
      <div 
        v-motion="{ initial: { opacity: 0, y: 12 }, enter: { opacity: 1, y: 0, transition: { delay: 1100, duration: 600 } } }" 
        class="mt-5 sm:mt-8"
      >
        <a 
          href="#rsvp" 
          class="inline-block px-8 sm:px-10 py-2 sm:py-3 bg-burgundy text-beige font-secondary text-base sm:text-lg rounded-full shadow-elegant hover:bg-gold hover:text-burgundy transition-all duration-300 border border-gold/40 hover:shadow-gold-glow relative overflow-hidden group"
          @click.prevent="scrollToRsvp"
        >
          <span class="relative z-10">RSVP Now</span>
          <span class="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
        </a>
      </div>
    </section>

    <!-- Decorative Divider -->
    

    <!-- Wedding Information Section Component -->
    <ClientOnly>
      <div v-scroll-animate>
        <InfoCards />
      </div>
    </ClientOnly>
    
    <!-- Decorative Divider -->
    <div class="w-full flex items-center justify-center my-10">
      <div class="w-96 h-4 mb-4 mx-auto" v-motion="{ initial: { opacity: 1, scale: 0.9 }, enter: { opacity: 1, scale: 1, transition: { duration: 800 } } }">
        <img src="/img/seperator.png" alt="" class="w-full h-full" />
      </div>
    </div>
    
    <!-- RSVP Section -->
    <ClientOnly>
      <div 
        v-scroll-animate="{ 
          initial: { opacity: 0, y: 60 }, 
          visible: { opacity: 1, y: 0, transition: { duration: 1000, damping: 20 } } 
        }"
        class="my-6 sm:my-10"
      >
        <RsvpForm />
      </div>
    </ClientOnly>
    

  </div>
</template>

<script setup>
import CountdownTimer from '~/components/CountdownTimer.vue';
import InfoCards from '~/components/InfoCards.vue';
import RsvpForm from '~/components/RsvpForm.vue';
import CornerImage from '~/components/CornerImage.vue';

// Scroll to RSVP section
const scrollToRsvp = () => {
  const rsvpElement = document.getElementById('rsvp');
  if (rsvpElement) {
    rsvpElement.scrollIntoView({ behavior: 'smooth' });
  }
};
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
