<template>
  <div 
    class="min-h-screen flex flex-col bg-burgundy font-primary relative overflow-hidden"
    v-motion="{ initial: { opacity: 0 }, enter: { opacity: 1, transition: { duration: 1200 } } }"
  >
    <!-- Import Pinyon Script font -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap">
    
    <!-- Spinning mandala background -->
    <div class="fixed inset-0 w-full h-full flex items-center justify-center pointer-events-none z-0">
      <img 
        src="/img/mandala.png" 
        alt="" 
        class="w-[800px] h-[800px] opacity-[0.03] animate-spin-slow absolute"
      />
    </div>
    <!-- Ornate corner elements -->
    <div class="absolute top-0 left-0 w-32 h-32 opacity-40" v-motion="{ initial: { opacity: 0, scale: 0.7 }, enter: { opacity: 0.4, scale: 1, transition: { duration: 800 } } }">
      <img src="/img/corner-ornament.png" alt="" class="w-full h-full transform rotate-0" />
    </div>
    
    <div class="absolute top-0 right-0 w-32 h-32 opacity-40" v-motion="{ initial: { opacity: 0, scale: 0.7 }, enter: { opacity: 0.4, scale: 1, transition: { duration: 800 } } }">
      <img src="/img/corner-ornament.png" alt="" class="w-full h-full transform rotate-90" />
    </div>
    
    <div class="absolute bottom-0 right-0 w-32 h-32 opacity-40" v-motion="{ initial: { opacity: 0, scale: 0.7 }, enter: { opacity: 0.4, scale: 1, transition: { duration: 800 } } }">
      <img src="/img/corner-ornament.png" alt="" class="w-full h-full transform rotate-180" />
    </div>
    
    <div class="absolute bottom-0 left-0 w-32 h-32 opacity-40" v-motion="{ initial: { opacity: 0, scale: 0.7 }, enter: { opacity: 0.4, scale: 1, transition: { duration: 800 } } }">
      <img src="/img/corner-ornament.png" alt="" class="w-full h-full transform rotate-270" />
    </div>
    
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-5 bg-repeat" style="background-image: url('/img/ornate-pattern.png')"></div>
    
    <!-- Main content with ornate border -->
    <div class="relative z-10 border-8 border-gold rounded-2xl m-4 md:mx-auto md:my-8 shadow-gold-glow flex flex-col flex-1 max-w-5xl overflow-hidden">
      <!-- Header -->
      <header 
        class="bg-gradient-to-r from-darkBurgundy via-burgundy to-darkBurgundy py-4 border-b-2 border-gold"
        v-motion="{ initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { duration: 800, delay: 200 } } }"
      >
        <div class="container flex justify-center items-center">
          <div class="text-3xl md:text-4xl font-decorative text-gold drop-shadow-md tracking-widest">
            <NuxtLink to="/" class="hover:text-brightGold transition-colors duration-300">
              <span class="px-3 py-1">F & N</span>
            </NuxtLink>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="flex-1 p-4 md:p-8 bg-cream overflow-y-auto">
        <slot />
      </main>

      <!-- Footer -->
      <footer 
        class="bg-burgundy text-beige py-4 text-center font-secondary tracking-wide border-t-2 border-gold"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 800, delay: 400 } } }"
      >
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

<!--
Nikahnama-inspired: Ornate gold border, elegant fonts, subtle background pattern, gold/burgundy theme.
Add /img/nikahnama-pattern.png for background, or use a subtle SVG/PNG Islamic pattern.
-->

<!--
Nikahnama-inspired: Ornate gold border, elegant fonts, subtle background pattern, gold/burgundy theme.
Add /img/nikahnama-pattern.png for background, or use a subtle SVG/PNG Islamic pattern.
-->

