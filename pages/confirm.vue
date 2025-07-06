<template>
  <div class="max-w-2xl mx-auto my-12 p-8 bg-beige rounded-xl border-4 border-gold shadow-xl text-center">
    <div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 0.7 } } }" class="py-8">
      <h1 class="text-3xl text-burgundy font-secondary mb-2">Thank You!</h1>
      <div class="text-5xl text-gold my-4">✓</div>
      <p class="text-xl mb-6">Your RSVP has been submitted successfully.</p>
      <p class="mb-8">We're looking forward to celebrating with you on our special day!</p>
      
      <NuxtLink to="/" class="inline-block px-6 py-3 bg-burgundy text-beige font-secondary rounded-full shadow-md hover:bg-gold hover:text-black transition">
        Return to Homepage
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// Simple confirmation page - no verification required
</script>
