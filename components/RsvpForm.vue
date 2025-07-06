<template>
  <div class="flex flex-col items-center mb-3 sm:mb-4 py-2 sm:py-3">
    
    
    <div 
      class="max-w-3xl mx-auto p-4 sm:p-6 md:p-8 bg-cream rounded-lg sm:rounded-xl border-2 border-gold shadow-elegant relative overflow-hidden" 
      id="rsvp"
      v-motion="{ initial: { opacity: 0, y: 10 }, enter: { opacity: 1, y: 0, transition: { duration: 800, delay: 250 } } }"
    >

    <!-- Ornate corner elements using corner.png -->
    <div class="absolute top-0 left-0 w-20 h-20 opacity-1">
      <CornerImage :rotation="90" />
    </div>
    <div class="absolute top-0 right-0 w-20 h-20 opacity-1">
      <CornerImage :rotation="180" />
    </div>
    <div class="absolute bottom-0 left-0 w-20 h-20 opacity-1">
      <CornerImage :rotation="0" />
    </div>
    <div class="absolute bottom-0 right-0 w-20 h-20 opacity-1">
      <CornerImage :rotation="-90" />
    </div>
    
    <!-- Success Modal -->
    <div 
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50" 
      v-if="formSubmitted"
      v-motion="{ initial: { opacity: 0 }, enter: { opacity: 1, transition: { duration: 400 } } }"
    >
      <div 
        class="bg-cream p-8 rounded-lg sm:rounded-xl max-w-md w-full text-center border-2 border-gold/60 shadow-elegant relative overflow-hidden"
        v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1, transition: { duration: 500 } } }"
      >
        <!-- Ornate corner elements for modal using CornerImage component -->
        <div class="absolute top-0 left-0 w-16 h-16 opacity-1">
          <CornerImage :rotation="90" />
        </div>
        <div class="absolute top-0 right-0 w-16 h-16 opacity-1">
          <CornerImage :rotation="180" />
        </div>
        <div class="absolute bottom-0 right-0 w-16 h-16 opacity-1">
          <CornerImage :rotation="0" />
        </div>
        <div class="absolute bottom-0 left-0 w-16 h-16 opacity-1">
          <CornerImage :rotation="-90" />
        </div>
        
        <!-- Separator image above heading -->
        <div class="w-24 h-3 mx-auto mb-4">
          <img src="/img/seperator.png" alt="" class="w-full h-full opacity-60" />
        </div>
        
        <h2 class="text-2xl sm:text-3xl font-decorative text-gold text-center mb-4 tracking-wide islamic-text-shadow">Thank You!</h2>
        <p class="text-burgundy mb-6 font-secondary enhanced-text leading-relaxed">Your RSVP has been received. We look forward to celebrating with you!</p>
        <p v-if="submissionStatus" class="text-sm text-burgundy/70 italic mb-4 enhanced-text">{{ submissionStatus }}</p>
        
        <!-- Separator image before button -->
        <div class="w-24 h-2 mx-auto mb-6">
          <img src="/img/seperator.png" alt="" class="w-full h-full opacity-60" />
        </div>
        
        <button 
          @click="resetAfterSubmission" 
          class="px-8 py-3 bg-burgundy text-beige font-secondary text-base rounded-full shadow-elegant hover:bg-gold hover:text-burgundy transition-all duration-300 border border-gold/40 hover:shadow-gold-glow relative overflow-hidden group"
        >
          <span class="relative z-10">Close</span>
          <span class="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
        </button>
      </div>
    </div>
    
    <!-- RSVP Header -->
    <div
      v-motion="{ initial: { opacity: 0, y: -10 }, enter: { opacity: 1, y: 0, transition: { delay: 200, duration: 600 } } }"
    >
      <h2 class="text-2xl sm:text-3xl md:text-4xl text-gold font-decorative text-center mb-4 sm:mb-6 tracking-wide islamic-text-shadow">RSVP</h2>
      
      <!-- Islamic decorative divider -->
      <div class="w-32 h-2 mb-4 mx-auto relative overflow-hidden">
      </div>
    
      <div class="mb-5 sm:mb-8 text-center px-1">
        <p class="text-base sm:text-lg text-burgundy mb-4 sm:mb-5 enhanced-text leading-relaxed">
          Please let us know if you will be joining us on our special day. 
          We look forward to celebrating with you!
        </p>
        
        <div class="text-burgundy font-medium text-sm sm:text-base enhanced-text">
          Please respond by <span class="font-bold text-gold islamic-text-shadow">September 15, 2025</span>
        </div>
      </div>
    </div>
    
    <form 
      class="bg-white/80 rounded-lg p-3 sm:p-4 md:p-6 border-2 border-gold/40 shadow-elegant mb-20 sm:mb-20" 
      @submit.prevent="submitRSVP"
      v-motion="{ initial: { opacity: 0, scale: 0.99 }, enter: { opacity: 1, scale: 1, transition: { delay: 300, duration: 1000, ease: 'easeOut' } } }"
    >
      <!-- Personal Information -->
      <div class="mb-6 sm:mb-8" v-motion="{ initial: { opacity: 0, y: 10 }, enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 400 } } }">
        <h3 class="text-lg sm:text-xl text-burgundy font-secondary mb-3 sm:mb-4 pb-2 tracking-wide islamic-border islamic-text-shadow">Personal Information</h3>

        <div class="mb-6">
          <label for="guestType" class="block text-burgundy font-medium mb-2 opacity-80">Are you a guest of the groom or bride?*</label>
          <div class="relative group">
            <select 
              id="guestType" 
              v-model="form.guest_type" 
              class="w-full p-2 sm:p-3 border-0 border-b-2 border-gold/40 bg-cream/30 focus:outline-none focus:border-burgundy focus:bg-cream/50 rounded-t-md shadow-sm appearance-none text-burgundy pr-10 transition-all duration-300" 
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
            <div class="absolute bottom-0 left-0 h-0.5 w-0 bg-burgundy group-focus-within:w-full transition-all duration-500"></div>
          </div>
        </div>

        <div class="mb-6">
          <label for="name" class="block text-burgundy font-medium mb-2 opacity-80 enhanced-text">Full Name*</label>
          <div class="relative group">
            <input
              type="text"
              id="fullName"
              v-model="form.full_name"
              class="w-full p-2 sm:p-3 border-0 border-b-2 border-gold/40 bg-cream/30 focus:outline-none focus:border-burgundy focus:bg-cream/50 rounded-t-md shadow-sm transition-all duration-300 placeholder:text-burgundy/40 text-burgundy"
              required
              placeholder="Enter your full name"
            >
          </div>
        </div>

        <div class="mb-6">
          <label for="email" class="block text-burgundy font-medium mb-2 opacity-80 enhanced-text">Email*</label>
          <div class="relative group">
            <input
              type="email"
              id="email"
              v-model="form.email"
              class="w-full p-2 sm:p-3 border-0 border-b-2 border-gold/40 bg-cream/30 focus:outline-none focus:border-burgundy focus:bg-cream/50 rounded-t-md shadow-sm transition-all duration-300 placeholder:text-burgundy/40 text-burgundy"
              required
              placeholder="Enter your email address"
            >
          </div>
          <small class="block mt-1 text-sm text-burgundy/60 italic">A confirmation email will be sent to this address.</small>
        </div>
        
        <div class="mb-6">
          <label for="phone" class="block text-burgundy font-medium mb-2 opacity-80 enhanced-text">Phone Number</label>
          <div class="relative group">
            <input
              type="tel"
              id="phone"
              v-model="form.phone"
              class="w-full p-2 sm:p-3 border-0 border-b-2 border-gold/40 bg-cream/30 focus:outline-none focus:border-burgundy focus:bg-cream/50 rounded-t-md shadow-sm transition-all duration-300 placeholder:text-burgundy/40 text-burgundy"
              placeholder="Enter your phone number"
            >
            <div class="absolute bottom-0 left-0 h-0.5 w-0 bg-burgundy group-focus-within:w-full transition-all duration-500"></div>
          </div>
        </div>
      </div>
      
      <!-- Attendance -->
      <ClientOnly>
        <div class="mb-8" v-scroll-animate="{ initial: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 1000, ease: 'easeOut', delay: 200 } } }">
          <h3 class="text-xl text-burgundy font-secondary mb-4 pb-2 border-b border-gold/50 tracking-wide islamic-border text-shadow-burgundy">Attendance</h3>
          
          <div class="mb-6">
            <label class="block text-burgundy font-medium mb-3 opacity-80 enhanced-text">Will you be attending?*</label>
            <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6">
              <label for="attending-yes" class="inline-flex items-center cursor-pointer whitespace-nowrap">
                <input 
                  type="radio" 
                  id="attending-yes" 
                  value="yes" 
                  v-model="form.attending"
                  class="sr-only"
                  required
                >
                <div class="w-5 h-5 border-2 border-gold/60 rounded-full inline-flex items-center justify-center transition-all">
                  <div class="w-2.5 h-2.5 rounded-full bg-burgundy scale-0 transition-transform duration-200" :class="{'scale-100': form.attending === 'yes'}"></div>
                </div>
                <span class="ml-2 text-burgundy enhanced-text">Yes, I'll be there!</span>
              </label>
              
              <label for="attending-no" class="inline-flex items-center cursor-pointer whitespace-nowrap">
                <input 
                  type="radio" 
                  id="attending-no" 
                  value="no" 
                  v-model="form.attending"
                  class="sr-only"
                >
                <div class="w-5 h-5 border-2 border-gold/60 rounded-full inline-flex items-center justify-center transition-all">
                  <div class="w-2.5 h-2.5 rounded-full bg-burgundy scale-0 transition-transform duration-200" :class="{'scale-100': form.attending === 'no'}"></div>
                </div>
                <span class="ml-2 text-burgundy enhanced-text">Regretfully decline</span>
              </label>
            </div>
          </div>
        </div>
        
        <div v-if="form.attending === 'yes'" class="mb-6">
          <label for="guests" class="block text-burgundy font-medium mb-2 opacity-80 enhanced-text">Number of Guests*</label>
          <div class="relative group">
            <select 
              id="guests" 
              v-model="form.guest_count" 
              class="w-full p-2 sm:p-3 border-0 border-b-2 border-gold/40 bg-cream/30 focus:outline-none focus:border-burgundy focus:bg-cream/50 rounded-t-md shadow-sm appearance-none text-burgundy pr-10 transition-all duration-300"
              required
            >
              <option value="1">1 person (just me)</option>
              <option value="2">2 people</option>
              <option value="3">3 people</option>
              <option value="4">4 people</option>
              <option value="5">5 people</option>
              <option value="6">6 people</option>
              <option value="7">7 people</option>
              <option value="8">8 people</option>
              <option value="9">9 people</option>
              <option value="10">10 people</option>
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
          <div class="relative group">
            <select
              id="under_10_count"
              v-model="form.under_10_count"
              class="w-full p-2 sm:p-3 border-0 border-b-2 border-gold/40 bg-cream/30 focus:outline-none focus:border-burgundy focus:bg-cream/50 rounded-t-md shadow-sm appearance-none text-burgundy pr-10 transition-all duration-300"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>

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
              class="w-full p-2 sm:p-3 border-0 border-b-2 border-gold/40 bg-cream/30 focus:outline-none focus:border-burgundy focus:bg-cream/50 rounded-t-md shadow-sm transition-all duration-300 placeholder:text-burgundy/40 text-burgundy resize-none"
              placeholder="Share your wishes or any special notes..."
            ></textarea>
            <!-- Removed duplicate animated line, now using the border-b-2 and focus:border-burgundy for the highlight effect -->
          </div>
        </div>
      </ClientOnly>
      
      <!-- Dietary Requirements -->
      <ClientOnly>
        <div v-if="form.attending === 'yes'" class="mb-8" v-scroll-animate="{ initial: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 1000, ease: 'easeOut', delay: 300 } } }">
          <h3 class="text-xl text-burgundy font-secondary mb-4 pb-2 border-b border-gold/50 tracking-wide islamic-border text-shadow-burgundy">Dietary Requirements</h3>
        
          <div class="mb-6">
            <label for="allergies" class="block text-burgundy font-medium mb-2 opacity-80">Allergies or Special Dietary Requirements</label>
            <div class="relative group">
              <textarea
                id="allergies"
                v-model="form.allergies"
                rows="2"
                class="w-full p-2 sm:p-3 border-0 border-b-2 border-gold/40 bg-cream/30 focus:outline-none focus:border-burgundy focus:bg-cream/50 rounded-t-md shadow-sm transition-all duration-300 placeholder:text-burgundy/40 text-burgundy resize-none"
                placeholder="Please let us know of any allergies or dietary restrictions..."
              ></textarea>
              <!-- Using only the border-b-2 and focus:border-burgundy for consistent styling -->
            </div>
          </div>
        </div>
      </ClientOnly>
      
      <div class="flex justify-center mt-6 sm:mt-8">
        <button 
          type="submit" 
          class="px-8 sm:px-10 py-2 sm:py-3 bg-burgundy text-beige font-secondary text-base sm:text-lg rounded-full shadow-elegant hover:bg-gold hover:text-burgundy transition-all duration-300 border border-gold/40 hover:shadow-gold-glow w-full sm:w-auto max-w-xs relative overflow-hidden group" 
          :disabled="loading"
        >
          <span v-if="loading" class="relative z-10 flex items-center justify-center">
            <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-beige" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
          <span v-else class="relative z-10">Submit RSVP</span>
        </button>
        
      </div>
    </form>

    <!-- The first modal is enough, removing duplicate -->
  </div>
</div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import CornerImage from '~/components/CornerImage.vue';
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
