<template>
  <div 
    class="min-h-screen flex flex-col font-primary relative overflow-hidden bg-pattern"
    v-motion="{ initial: { opacity: 0 }, enter: { opacity: 1, transition: { duration: 1200 } } }"
  >
    <!-- Import fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;700&display=swap">
    
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-5 bg-repeat" style="background-image: url('/img/bgpattern.png')"></div>
    
    <!-- Main content with ornate border -->
    <div class="relative z-10 border-8 border-gold rounded-2xl m-4 md:mx-auto md:my-8 shadow-gold-glow flex flex-col flex-1 max-w-5xl overflow-hidden">
      <!-- Header -->
      <header 
        class="bg-gradient-to-r from-darkBurgundy via-burgundy to-darkBurgundy py-4 border-b-2 border-gold relative overflow-hidden"
        v-motion="{ initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { duration: 800, delay: 200 } } }"
      >
        <!-- Decorative pattern overlay -->
        <div class="absolute inset-0 bg-repeat opacity-10" style="background-image: url('/img/bgpattern.png')"></div>
        
        <!-- Side decorative elements removed as requested -->
        
        <div class="container flex justify-center items-center relative z-10">
          <div class="relative">
            <NuxtLink to="/" class="transition-all duration-300 group block">
              <img src="/img/title.png" alt="بسم الله الرحمن الرحيم" class="max-w-xs md:max-w-sm mx-auto hover:opacity-90 transition-opacity duration-300" />
              <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-gold/0 via-gold/70 to-gold/0 group-hover:w-4/5 transition-all duration-500 -translate-x-1/2"></span>
            </NuxtLink>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="flex-1 p-4 md:p-8 bg-cream">
        <slot />
      </main>

      <!-- Footer -->
      <footer 
        class="bg-burgundy bg-blend-soft-light text-beige py-4 text-center font-secondary tracking-wide border-t-2 border-gold relative"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 800, delay: 400 } } }"
      >
        <!-- Footer background pattern -->
        <div class="absolute inset-0 opacity-5 bg-repeat" style="background-image: url('/img/bgpattern.png')"></div>
        <div class="container">
          <span class="text-gold text-sm md:text-base">&copy; {{ new Date().getFullYear() }} Fawad & Nimrah</span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
// Motion is now handled via plugins/motion.client.js
</script>

<style>
/* Font for Arabic text */
.font-arabic {
  font-family: 'Noto Naskh Arabic', serif;
  font-weight: 400;
}

/* Islamic/Desi Styling Elements */
.islamic-text-shadow {
  text-shadow: 1px 1px 2px rgba(139, 69, 19, 0.3), 0 0 1px rgba(218, 165, 32, 0.2);
}

.enhanced-text {
  letter-spacing: 0.01em;
}

.islamic-border {
  position: relative;
  border-bottom: 1px solid rgba(218, 165, 32, 0.3);
}

.islamic-border::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -2px;
  width: 30%;
  height: 1px;
  background: linear-gradient(to right, rgba(218, 165, 32, 0), rgba(218, 165, 32, 0.7), rgba(218, 165, 32, 0));
  transform: translateX(-50%);
}

.shadow-gold-glow {
  box-shadow: 0 0 15px rgba(218, 165, 32, 0.2), 0 0 5px rgba(218, 165, 32, 0.1);
}

.shadow-elegant {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
