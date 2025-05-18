<template>
  <div 
    class="max-w-3xl mx-auto p-6 md:p-8 bg-cream rounded-xl border-2 border-gold shadow-elegant relative overflow-hidden" 
    id="rsvp"
    v-motion="{ initial: { opacity: 0, y: 10 }, enter: { opacity: 1, y: 0, transition: { duration: 1200, ease: 'easeOut' } } }"
  >
    <!-- Ornate corner elements -->
    <div class="absolute top-0 left-0 w-20 h-20 opacity-10">
      <img src="/img/corner-ornament.png" alt="" class="w-full h-full" />
    </div>
    <div class="absolute bottom-0 right-0 w-20 h-20 opacity-10 transform rotate-180">
      <img src="/img/corner-ornament.png" alt="" class="w-full h-full" />
    </div>
    
    <!-- Success Modal -->
    <div 
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50" 
      v-if="formSubmitted"
      v-motion="{ initial: { opacity: 0 }, enter: { opacity: 1, transition: { duration: 400 } } }"
    >
      <div 
        class="bg-cream p-8 rounded-lg max-w-md w-full text-center border-2 border-gold shadow-gold-glow relative overflow-hidden"
        v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1, transition: { duration: 500 } } }"
      >
        <!-- Ornate corner elements for modal -->
        <div class="absolute top-0 left-0 w-12 h-12 opacity-10">
          <img src="/img/corner-ornament.png" alt="" class="w-full h-full" />
        </div>
        <div class="absolute bottom-0 right-0 w-12 h-12 opacity-10 transform rotate-180">
          <img src="/img/corner-ornament.png" alt="" class="w-full h-full" />
        </div>
        
        <h2 class="text-2xl font-bold text-burgundy mb-4 font-secondary">Thank You!</h2>
        <p class="text-black mb-6">Your RSVP has been received. We look forward to celebrating with you!</p>
        <p v-if="submissionStatus" class="text-sm text-burgundy/70 italic mb-4">{{ submissionStatus }}</p>
        <button 
          @click="resetAfterSubmission" 
          class="px-6 py-2 bg-burgundy text-beige rounded-full hover:bg-gold hover:text-burgundy transition duration-300 shadow-md border border-gold/30"
        >
          Close
        </button>
      </div>
    </div>
    
    <!-- RSVP Header -->
    <div
      v-motion="{ initial: { opacity: 0, y: -10 }, enter: { opacity: 1, y: 0, transition: { delay: 200, duration: 600 } } }"
    >
      <h2 class="text-3xl md:text-4xl text-gold font-decorative text-center mb-6 tracking-wide">RSVP</h2>
    
      <div class="mb-8 text-center">
        <p class="text-lg text-burgundy mb-4">
          Please let us know if you will be joining us on our special day. 
          We look forward to celebrating with you!
        </p>
        
        <div class="text-burgundy font-medium">
          Please respond by <span class="font-bold text-gold">September 15, 2025</span>
        </div>
      </div>
    </div>
    
    <form 
      class="bg-white/80 rounded-lg p-6 border-2 border-gold/40 shadow-elegant" 
      @submit.prevent="submitRSVP"
      v-motion="{ initial: { opacity: 0, scale: 0.99 }, enter: { opacity: 1, scale: 1, transition: { delay: 300, duration: 1000, ease: 'easeOut' } } }"
    >
      <!-- Personal Information -->
      <div class="mb-8" v-scroll-animate="{ initial: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 1000, ease: 'easeOut' } } }">
        <h3 class="text-xl text-burgundy font-secondary mb-4 pb-2 border-b border-gold/50 tracking-wide">Personal Information</h3>

        <div class="mb-6">
          <label for="guestType" class="block text-burgundy font-medium mb-2 opacity-80">Are you a guest of the groom or bride?*</label>
          <div class="relative">
            <select 
              id="guestType" 
              v-model="form.guest_type" 
              class="w-full p-3 border-0 border-b-2 border-gold/40 bg-cream/30 focus:outline-none focus:border-burgundy focus:bg-cream/50 rounded-t-md shadow-sm appearance-none text-burgundy pr-10 transition-all duration-300" 
              required
            >
              <option value="" disabled>Select one</option>
              <option value="groom">Groom</option>
              <option value="bride">Bride</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gold">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div class="mb-6">
          <label for="familyName" class="block text-burgundy font-medium mb-2 opacity-80">Family Name*</label>
          <div class="relative group">
            <input
              type="text"
              id="familyName"
              v-model="form.family_name"
              class="w-full p-3 border-0 border-b-2 border-gold/40 bg-cream/30 focus:outline-none focus:border-burgundy focus:bg-cream/50 rounded-t-md shadow-sm transition-all duration-300 placeholder:text-burgundy/40 text-burgundy"
              required
              placeholder="Enter your family name"
            >
            <div class="absolute bottom-0 left-0 h-0.5 w-0 bg-burgundy group-focus-within:w-full transition-all duration-500"></div>
          </div>
        </div>

        <div class="mb-6">
          <label for="fullName" class="block text-burgundy font-medium mb-2 opacity-80">Full Name*</label>
          <div class="relative group">
            <input
              type="text"
              id="fullName"
              v-model="form.full_name"
              class="w-full p-3 border-0 border-b-2 border-gold/40 bg-cream/30 focus:outline-none focus:border-burgundy focus:bg-cream/50 rounded-t-md shadow-sm transition-all duration-300 placeholder:text-burgundy/40 text-burgundy"
              required
              placeholder="Enter your full name"
            >
            <div class="absolute bottom-0 left-0 h-0.5 w-0 bg-burgundy group-focus-within:w-full transition-all duration-500"></div>
          </div>
        </div>

        <div class="mb-6">
          <label for="email" class="block text-burgundy font-medium mb-2 opacity-80">Email Address*</label>
          <div class="relative group">
            <input
              type="email"
              id="email"
              v-model="form.email"
              class="w-full p-3 border-0 border-b-2 border-gold/40 bg-cream/30 focus:outline-none focus:border-burgundy focus:bg-cream/50 rounded-t-md shadow-sm transition-all duration-300 placeholder:text-burgundy/40 text-burgundy"
              required
              placeholder="Enter your email address"
            >
            <div class="absolute bottom-0 left-0 h-0.5 w-0 bg-burgundy group-focus-within:w-full transition-all duration-500"></div>
          </div>
          <small class="block mt-1 text-sm text-burgundy/60 italic">A confirmation email will be sent to this address.</small>
        </div>
        
        <div class="mb-6">
          <label for="phone" class="block text-burgundy font-medium mb-2 opacity-80">Phone Number</label>
          <div class="relative group">
            <input
              type="tel"
              id="phone"
              v-model="form.phone"
              class="w-full p-3 border-0 border-b-2 border-gold/40 bg-cream/30 focus:outline-none focus:border-burgundy focus:bg-cream/50 rounded-t-md shadow-sm transition-all duration-300 placeholder:text-burgundy/40 text-burgundy"
              placeholder="Enter your phone number"
            >
            <div class="absolute bottom-0 left-0 h-0.5 w-0 bg-burgundy group-focus-within:w-full transition-all duration-500"></div>
          </div>
        </div>
      </div>
      
      <!-- Attendance -->
      <div class="mb-8" v-scroll-animate="{ initial: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 1000, ease: 'easeOut', delay: 200 } } }">
        <h3 class="text-xl text-burgundy font-secondary mb-4 pb-2 border-b border-gold/50 tracking-wide">Attendance</h3>
        
        <div class="mb-6">
          <label class="block text-burgundy font-medium mb-3 opacity-80">Will you be attending?*</label>
          <div class="flex flex-col sm:flex-row gap-6">
            <div class="flex items-center group cursor-pointer">
              <div class="relative">
                <input 
                  type="radio" 
                  id="attending-yes" 
                  value="yes" 
                  v-model="form.attending"
                  class="sr-only"
                  required
                >
                <div class="w-6 h-6 border-2 border-gold/50 rounded-full flex items-center justify-center transition-all group-hover:border-burgundy">
                  <div class="w-3 h-3 rounded-full bg-burgundy scale-0 transition-transform duration-200" :class="{'scale-100': form.attending === 'yes'}"></div>
                </div>
              </div>
              <label for="attending-yes" class="ml-3 text-burgundy cursor-pointer group-hover:text-burgundy/90 transition-colors">Yes, I'll be there!</label>
            </div>
            
            <div class="flex items-center group cursor-pointer">
              <div class="relative">
                <input 
                  type="radio" 
                  id="attending-no" 
                  value="no" 
                  v-model="form.attending"
                  class="sr-only"
                >
                <div class="w-6 h-6 border-2 border-gold/50 rounded-full flex items-center justify-center transition-all group-hover:border-burgundy">
                  <div class="w-3 h-3 rounded-full bg-burgundy scale-0 transition-transform duration-200" :class="{'scale-100': form.attending === 'no'}"></div>
                </div>
              </div>
              <label for="attending-no" class="ml-3 text-burgundy cursor-pointer group-hover:text-burgundy/90 transition-colors">Regretfully decline</label>
            </div>
          </div>
        </div>
        
        <div v-if="form.attending === 'yes'" class="mb-6">
          <label for="guests" class="block text-burgundy font-medium mb-2 opacity-80">Number of Guests*</label>
          <div class="relative">
            <select 
              id="guests" 
              v-model="form.guest_count" 
              class="w-full p-3 border-0 border-b-2 border-gold/40 bg-cream/30 focus:outline-none focus:border-burgundy focus:bg-cream/50 rounded-t-md shadow-sm appearance-none text-burgundy pr-10 transition-all duration-300"
              required
            >
              <option value="1">1 person (just me)</option>
              <option value="2">2 people</option>
              <option value="3">3 people</option>
              <option value="4">4 people</option>
              <option value="5">5+ people</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gold">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="absolute bottom-0 left-0 h-0.5 w-0 bg-burgundy group-focus-within:w-full transition-all duration-500"></div>
          </div>
        </div>
        
        <!-- Children field moved right after number of guests -->
        <div v-if="form.attending === 'yes'" class="mb-6">
          <label for="under_10_count" class="block text-burgundy font-medium mb-2 opacity-80">Of which, number of children under 10</label>
          <div class="relative">
            <select
              id="under_10_count"
              v-model="form.under_10_count"
              class="w-full p-3 border-0 border-b-2 border-gold/40 bg-cream/30 focus:outline-none focus:border-burgundy focus:bg-cream/50 rounded-t-md shadow-sm appearance-none text-burgundy pr-10 transition-all duration-300"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gold">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="absolute bottom-0 left-0 h-0.5 w-0 bg-burgundy group-focus-within:w-full transition-all duration-500"></div>
          </div>
        </div>
        
        <div class="mb-6">
          <label for="notes" class="block text-burgundy font-medium mb-2 opacity-80">Message for the Couple</label>
          <div class="relative group">
            <textarea
              id="notes"
              v-model="form.notes"
              rows="3"
              class="w-full p-3 border-0 border-b-2 border-gold/40 bg-cream/30 focus:outline-none focus:border-burgundy focus:bg-cream/50 rounded-t-md shadow-sm transition-all duration-300 placeholder:text-burgundy/40 text-burgundy resize-none"
              placeholder="Share your wishes or any special notes..."
            ></textarea>
            <div class="absolute bottom-0 left-0 h-0.5 w-0 bg-burgundy group-focus-within:w-full transition-all duration-500"></div>
          </div>
        </div>
      </div>
      
      <!-- Dietary Requirements -->
      <div v-if="form.attending === 'yes'" class="mb-8" v-scroll-animate="{ initial: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 1000, ease: 'easeOut', delay: 300 } } }">
        <h3 class="text-xl text-burgundy font-secondary mb-4 pb-2 border-b border-gold/50 tracking-wide">Dietary Requirements</h3>
        
        <div class="mb-6">
          <label for="allergies" class="block text-burgundy font-medium mb-2 opacity-80">Allergies or Special Dietary Requirements</label>
          <div class="relative group">
            <textarea
              id="allergies"
              v-model="form.allergies"
              rows="2"
              class="w-full p-3 border-0 border-b-2 border-gold/40 bg-cream/30 focus:outline-none focus:border-burgundy focus:bg-cream/50 rounded-t-md shadow-sm transition-all duration-300 placeholder:text-burgundy/40 text-burgundy resize-none"
              placeholder="Please let us know of any allergies or dietary restrictions..."
            ></textarea>
            <div class="absolute bottom-0 left-0 h-0.5 w-0 bg-burgundy group-focus-within:w-full transition-all duration-500"></div>
          </div>
        </div>
      </div>
      
      <div class="text-center" v-scroll-animate="{ initial: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 1000, ease: 'easeOut', delay: 400 } } }">
        <button 
          type="submit" 
          class="px-10 py-3 bg-burgundy text-beige font-secondary text-lg rounded-full shadow-elegant hover:bg-gold hover:text-burgundy transition-all duration-300 border border-gold/40 hover:shadow-gold-glow"
          :disabled="loading"
        >
          <span v-if="loading">Sending...</span>
          <span v-else>Submit RSVP</span>
        </button>
      </div>
    </form>

    <!-- The first modal is enough, removing duplicate -->
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useSupabaseClient, navigateTo, useRuntimeConfig } from '#imports';

const supabase = useSupabaseClient();
const config = useRuntimeConfig();
const loading = ref(false);
const submissionStatus = ref('');
const formSubmitted = ref(false);

const form = reactive({
  guest_type: '',
  family_name: '',
  full_name: '',
  email: '',
  phone: '',
  attending: '',
  guest_count: '1',
  notes: '',
  allergies: '',
  under_10_count: 0
});

async function submitRSVP() {
  loading.value = true;
  
  try {
    // Format data for submission
    const submission = {
      guest_type: form.guest_type,
      family_name: form.family_name,
      full_name: form.full_name,
      email: form.email.toLowerCase().trim(),
      phone: form.phone || null,
      attending: form.attending === 'yes',
      guest_count: form.attending === 'yes' ? parseInt(form.guest_count) : 0,
      allergies: form.attending === 'yes' ? form.allergies || null : null,
      notes: form.notes || null,
      under_10_count: parseInt(form.under_10_count) || 0,
      email_confirmed: false
    };
    
    console.log('Submitting RSVP data:', submission);
    
    // Submit to Supabase
    const { error, data } = await supabase
      .from('rsvp')
      .insert([submission])
      .select();
    
    if (error) {
      console.error('Supabase error details:', error);
      throw error;
    }
    
    console.log('Success! RSVP submitted:', data);
    
    console.log('RSVP data saved successfully to database!');
    
    // Send confirmation email via the send-confirmation Edge Function
    try {
      submissionStatus.value = 'Sending confirmation email...';
      
      const { error: emailError, data: emailData } = await supabase.functions.invoke('send-confirmation', {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (emailError) {
        console.warn('Edge Function error:', emailError);
        submissionStatus.value = 'RSVP saved successfully! (Email confirmation unavailable)';
      } else {
        console.log('Email confirmation result:', emailData);
        submissionStatus.value = 'RSVP received! A confirmation email has been sent.';
      }
    } catch (e) {
      console.warn('Email service error:', e);
      submissionStatus.value = 'RSVP saved successfully! (Email confirmation unavailable)';
    }
    
    // Set formSubmitted to true to show the success modal
    formSubmitted.value = true;
    
    // Reset the form in the background
    resetForm();
  } catch (error) {
    console.error('Error submitting RSVP:', error);
    console.error('Error code:', error.code);
    console.error('Error details:', error.details);
    console.error('Error hint:', error.hint);
    
    // More detailed error message to help with debugging
    let errorMessage = 'Sorry, there was an error submitting your RSVP.';
    
    if (error.message) {
      if (error.message.includes('duplicate')) {
        errorMessage = 'An RSVP with this email already exists. Please use a different email address.';
      } else if (error.message.includes('network')) {
        errorMessage = 'Network error. Please check your internet connection and try again.';
      } else if (error.message.includes('policy')) {
        errorMessage = 'Permission error. We have been notified and will fix this issue. Please try again later.';
      } else {
        errorMessage += ' Error: ' + error.message;
      }
    }
    
    alert(errorMessage);
  } finally {
    loading.value = false;
  }
}

function resetAfterSubmission() {
  formSubmitted.value = false;
  // We'll keep the user on the same page after dismissing the modal
  // This provides a better experience than redirecting
}

function resetForm() {
  // Reset all form fields
  form.guest_type = '';
  form.family_name = '';
  form.full_name = '';
  form.email = '';
  form.phone = '';
  form.attending = '';
  form.guest_count = '1';
  form.notes = '';
  form.allergies = '';
  form.under_10_count = 0;
}

// Unused function removed
</script>
