<template>
  <div class="min-h-screen flex flex-col bg-beige bg-[url('/img/nikahnama-pattern.png')] bg-repeat font-primary">
    <!-- Ornate border with fade-in motion -->
    <div class="border-8 border-gold rounded-2xl m-2 shadow-2xl flex flex-col flex-1">
      <!-- Header with slide-down -->
      <header class="bg-gradient-to-r from-burgundy to-gold py-4 rounded-t-xl shadow-inner">
        <div class="container flex flex-col md:flex-row items-center justify-between">
          <div class="text-3xl md:text-4xl font-secondary text-gold drop-shadow-md tracking-widest">
            <span class="inline-block px-3 py-1 bg-beige rounded shadow">F &amp; N</span>
          </div>
          <nav class="mt-4 md:mt-0">
            <ul class="flex gap-6 text-lg font-semibold text-beige">
              <li><NuxtLink to="/" class="hover:text-gold transition">Home</NuxtLink></li>
              <li><NuxtLink to="/info" class="hover:text-gold transition">Information</NuxtLink></li>
              <li><NuxtLink to="/rsvp" class="hover:text-gold transition">RSVP</NuxtLink></li>
            </ul>
          </nav>
        </div>
      </header>

      <!-- Main Content -->
      <main class="flex-1 p-2 md:p-6">
        <slot />
      </main>

      <!-- Footer with fade-in-up -->
      <footer class="bg-burgundy text-beige py-6 rounded-b-xl text-center font-secondary tracking-wide border-t-2 border-gold">
        <div class="container">
          <span class="text-lg">&copy; {{ new Date().getFullYear() }} Fawad &amp; Nimrah Wedding</span>
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

