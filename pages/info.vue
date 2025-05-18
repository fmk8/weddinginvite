<template>
  <div v-motion="{ initial: { opacity: 0 }, enter: { opacity: 1, transition: { duration: 0.8 } } }" class="max-w-4xl mx-auto my-8">
    <h1 v-motion="{ initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.7 } } }" class="text-3xl md:text-4xl text-burgundy font-secondary text-center mb-8">Wedding Information</h1>
    
    <!-- Venue Section -->
    <div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.7 } } }" class="mb-10 bg-beige rounded-xl border-2 border-gold shadow-lg p-6 md:p-8">
      <div class="flex items-center mb-4 border-b border-gold/30 pb-2">
        <div class="text-3xl text-gold mr-3">📍</div>
        <h2 class="text-2xl font-secondary text-burgundy">Venue</h2>
      </div>
      <div class="pl-4 md:pl-8">
        <p class="text-lg mb-1">Grand Celebration Hall</p>
        <p class="mb-4">123 Wedding Avenue, Amsterdam, Netherlands</p>
        <a href="https://maps.google.com" target="_blank" class="inline-block px-4 py-2 bg-burgundy text-beige rounded-full text-sm font-medium shadow hover:bg-gold hover:text-black transition">View on Map</a>
      </div>
    </div>
    
    <!-- Parking Section -->
    <div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.7 } } }" class="mb-10 bg-beige rounded-xl border-2 border-gold shadow-lg p-6 md:p-8">
      <div class="flex items-center mb-4 border-b border-gold/30 pb-2">
        <div class="text-3xl text-gold mr-3">🅿️</div>
        <h2 class="text-2xl font-secondary text-burgundy">Parking</h2>
      </div>
      <div class="pl-4 md:pl-8 space-y-2">
        <p>Complimentary valet parking is available for all guests.</p>
        <p>Additional parking can be found at the public garage across the street.</p>
        <p>Rideshare drop-off at the main entrance.</p>
      </div>
    </div>
    
    <!-- Schedule Section -->
    <div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.7 } } }" class="mb-10 bg-beige rounded-xl border-2 border-gold shadow-lg p-6 md:p-8">
      <div class="flex items-center mb-4 border-b border-gold/30 pb-2">
        <div class="text-3xl text-gold mr-3">🕒</div>
        <h2 class="text-2xl font-secondary text-burgundy">Schedule</h2>
      </div>
      <div class="pl-4 md:pl-8">
        <ul class="space-y-2">
          <li class="flex items-baseline"><span class="text-burgundy font-bold w-16">17:00</span> <span>Reception Begins</span></li>
          <li class="flex items-baseline"><span class="text-burgundy font-bold w-16">18:00</span> <span>Dinner Served</span></li>
          <li class="flex items-baseline"><span class="text-burgundy font-bold w-16">20:00</span> <span>Celebrations</span></li>
          <li class="flex items-baseline"><span class="text-burgundy font-bold w-16">23:00</span> <span>Event Concludes</span></li>
        </ul>
      </div>
    </div>
    
    <!-- FAQ Section -->
    <div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 1.0, duration: 0.7 } } }" class="mb-10 bg-beige rounded-xl border-2 border-gold shadow-lg p-6 md:p-8">
      <div class="flex items-center mb-4 border-b border-gold/30 pb-2">
        <div class="text-3xl text-gold mr-3">❓</div>
        <h2 class="text-2xl font-secondary text-burgundy">Frequently Asked Questions</h2>
      </div>
      <div class="pl-4 md:pl-8">
        <ul class="space-y-4">
          <li>
            <p class="text-burgundy font-bold">What is the dress code?</p>
            <p class="pl-4">Formal/Traditional attire is encouraged.</p>
          </li>
          <li>
            <p class="text-burgundy font-bold">Can I bring a guest?</p>
            <p class="pl-4">Please indicate the number of guests in your RSVP.</p>
          </li>
          <li>
            <p class="text-burgundy font-bold">Are children welcome?</p>
            <p class="pl-4">Yes, children are welcome!</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Motion } from '@motionone/vue';
</script>
