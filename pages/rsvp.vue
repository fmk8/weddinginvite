<template>
  <div v-motion="{ initial: { opacity: 0 }, enter: { opacity: 1, transition: { duration: 0.8 } } }" class="max-w-3xl mx-auto my-8 p-6 md:p-8 bg-beige rounded-xl border-4 border-gold shadow-xl">
    <h1 v-motion="{ initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.7 } } }" class="text-3xl md:text-4xl text-burgundy font-secondary text-center mb-6">RSVP</h1>
    
    <div class="mb-8 text-center">
      <p v-motion="{ initial: { opacity: 0 }, enter: { opacity: 1, transition: { delay: 0.4, duration: 0.7 } } }" class="text-lg text-black mb-4">
        Please let us know if you will be joining us on our special day. 
        We look forward to celebrating with you!
      </p>
      
      <div 
        v-motion="{ initial: { opacity: 0 }, enter: { opacity: 1, transition: { delay: 0.5, duration: 0.7 } } }" 
        class="text-burgundy font-semibold"
      >
        Please respond by <span class="font-bold text-gold">September 15, 2025</span>
      </div>
    </div>
    
    <form 
      v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.8 } } }" 
      class="bg-white/80 rounded-lg p-6 border border-gold shadow-md" 
      @submit.prevent="submitRSVP"
    >
      <!-- Personal Information -->
      <div class="mb-8">
        <h3 class="text-xl text-burgundy font-secondary mb-4 pb-2 border-b border-gold/50">Personal Information</h3>

        <div class="mb-4">
          <label for="guestType" class="block text-burgundy font-medium mb-1">Are you a guest of the groom or bride?*</label>
          <select 
            id="guestType" 
            v-model="form.guest_type" 
            class="w-full p-2 border border-gold/50 rounded bg-beige/50 focus:outline-none focus:ring-1 focus:ring-burgundy" 
            required
          >
            <option value="" disabled>Select one</option>
            <option value="groom">Groom</option>
            <option value="bride">Bride</option>
          </select>
        </div>

        <div class="mb-4">
          <label for="familyName" class="block text-burgundy font-medium mb-1">Family Name*</label>
          <input
            type="text"
            id="familyName"
            v-model="form.family_name"
            class="w-full p-2 border border-gold/50 rounded bg-beige/50 focus:outline-none focus:ring-1 focus:ring-burgundy"
            required
            placeholder="Enter your family name"
          >
        </div>

        <div class="mb-4">
          <label for="fullName" class="block text-burgundy font-medium mb-1">Full Name*</label>
          <input
            type="text"
            id="fullName"
            v-model="form.full_name"
            class="w-full p-2 border border-gold/50 rounded bg-beige/50 focus:outline-none focus:ring-1 focus:ring-burgundy"
            required
            placeholder="Enter your full name"
          >
        </div>

        <div class="mb-4">
          <label for="email" class="block text-burgundy font-medium mb-1">Email Address*</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            class="w-full p-2 border border-gold/50 rounded bg-beige/50 focus:outline-none focus:ring-1 focus:ring-burgundy"
            required
            placeholder="Enter your email address"
          >
          <small class="block mt-1 text-sm text-burgundy/80 italic">A confirmation email will be sent to this address.</small>
        </div>
        
        <div class="mb-4">
          <label for="phone" class="block text-burgundy font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            id="phone"
            v-model="form.phone"
            class="w-full p-2 border border-gold/50 rounded bg-beige/50 focus:outline-none focus:ring-1 focus:ring-burgundy"
            placeholder="Enter your phone number"
          >
        </div>
      </div>
      
      <!-- Attendance -->
      <div class="mb-8">
        <h3 class="text-xl text-burgundy font-secondary mb-4 pb-2 border-b border-gold/50">Attendance</h3>
        
        <div class="mb-4">
          <label class="block text-burgundy font-medium mb-2">Will you be attending?*</label>
          <div class="flex flex-col sm:flex-row gap-4">
            <div class="flex items-center">
              <input 
                type="radio" 
                id="attending-yes" 
                v-model="form.attending" 
                :value="true" 
                required
                class="w-4 h-4 text-burgundy border-gold focus:ring-gold"
              >
              <label for="attending-yes" class="ml-2 text-black">Yes, I will attend</label>
            </div>
            <div class="flex items-center">
              <input 
                type="radio" 
                id="attending-no" 
                v-model="form.attending" 
                :value="false" 
                required
                class="w-4 h-4 text-burgundy border-gold focus:ring-gold"
                name="attending"
              >
              <label for="attending-no">No, I cannot attend</label>
            </div>
          </div>
        </div>
        
        <div class="form-group" v-if="form.attending">
          <label for="guestCount" class="block text-burgundy font-medium mb-1">Number of Guests (including yourself)*</label>
          <input
            type="number"
            id="guestCount"
            v-model="form.guest_count"
            class="w-full p-2 border border-gold/50 rounded bg-beige/50 focus:outline-none focus:ring-1 focus:ring-burgundy"
            min="1"
            required
            placeholder="Enter number of guests"
          >
        </div>
        
        <div class="form-group" v-if="form.attending">
          <label for="under10Count" class="block text-burgundy font-medium mb-1">Number of Children Under 10</label>
          <input
            type="number"
            id="under10Count"
            v-model="form.under_10_count"
            class="w-full p-2 border border-gold/50 rounded bg-beige/50 focus:outline-none focus:ring-1 focus:ring-burgundy"
            min="0"
            placeholder="Enter number of children under 10"
          >
        </div>
      </div>
      
      <!-- Dietary Requirements -->
      <div class="mb-8">
        <h3 class="text-xl text-burgundy font-secondary mb-4 pb-2 border-b border-gold/50">Dietary Requirements</h3>
        
        <div class="mb-4">
          <label for="allergies" class="block text-burgundy font-medium mb-1">Do you have any allergies or dietary requirements?</label>
          <textarea
            id="allergies"
            v-model="form.allergies"
            class="w-full p-2 border border-gold/50 rounded bg-beige/50 focus:outline-none focus:ring-1 focus:ring-burgundy"
            rows="3"
            placeholder="Please specify any allergies or dietary requirements"
          ></textarea>
        </div>
      </div>
      
      <!-- Notes -->
      <div class="mb-8">
        <h3 class="text-xl text-burgundy font-secondary mb-4 pb-2 border-b border-gold/50">Notes</h3>
        <div class="mb-4">
          <label for="notes" class="block text-burgundy font-medium mb-1">Any other notes or information?</label>
          <textarea
            id="notes"
            v-model="form.notes"
            class="w-full p-2 border border-gold/50 rounded bg-beige/50 focus:outline-none focus:ring-1 focus:ring-burgundy"
            rows="3"
            placeholder="Please provide any additional information"
          ></textarea>
        </div>
      </div>
      
      <div class="text-center mt-8">
        <button 
          type="submit" 
          class="px-8 py-3 bg-burgundy text-beige font-secondary text-lg rounded-full shadow-lg hover:bg-gold hover:text-black transition-colors duration-300" 
          :disabled="isSubmitting"
          :class="{ 'opacity-70 cursor-not-allowed': isSubmitting }"
        >
          {{ isSubmitting ? 'Submitting...' : 'Submit RSVP' }}
        </button>
        <p class="mt-4 text-sm text-burgundy/80 italic">You will receive a confirmation email after submission.</p>
      </div>
    </form>

    <!-- Confirmation Modal -->
    <Teleport to="body">
      <div v-if="showConfirmation" class="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
        <div v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }" class="bg-beige border-4 border-gold rounded-xl p-6 max-w-md w-full shadow-2xl">
          <div class="text-center">
            <div class="text-5xl text-gold mb-4">✓</div>
            <h2 class="text-2xl font-secondary text-burgundy mb-4">Thank You!</h2>
            <p class="text-black mb-6">
              Your RSVP has been submitted. Please check your email for a confirmation link.
              <span class="font-bold">You must click this link to complete your RSVP.</span>
            </p>
            <button 
              class="px-6 py-2 bg-burgundy text-beige font-secondary rounded-full shadow-md hover:bg-gold hover:text-black transition-colors duration-300" 
              @click="closeModal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useSupabaseClient } from '#imports';

const client = useSupabaseClient();

// Form state
const form = reactive({
  guest_type: '',
  family_name: '',
  full_name: '',
  email: '',
  phone: '',
  attending: null,
  guest_count: '1',
  under_10_count: '0',
  allergies: '',
  notes: ''
});

const isSubmitting = ref(false);
const showConfirmation = ref(false);

// Submit RSVP
const submitRSVP = async () => {
  try {
    isSubmitting.value = true;
    
    // Check if email already exists in the RSVP table
    const { data: existingRsvp } = await client
      .from('rsvp')
      .select('*')
      .eq('email', form.email)
      .single();
    
    if (existingRsvp) {
      // Update existing RSVP
      const { error: updateError } = await client
        .from('rsvp')
        .update({
          family_name: form.family_name,
          full_name: form.full_name,
          guest_type: form.guest_type,
          attending: form.attending,
          guest_count: Number(form.guest_count),
          under_10_count: Number(form.under_10_count),
          allergies: form.allergies,
          phone: form.phone,
          notes: form.notes,
          email_confirmed: false // Reset confirmation status
        })
        .eq('email', form.email);
      
      if (updateError) throw updateError;
    } else {
      // Insert new RSVP record
      const { error: insertError } = await client
        .from('rsvp')
        .insert({
          family_name: form.family_name,
          full_name: form.full_name,
          guest_type: form.guest_type,
          attending: form.attending,
          guest_count: Number(form.guest_count),
          under_10_count: Number(form.under_10_count),
          allergies: form.allergies,
          phone: form.phone,
          email: form.email,
          notes: form.notes,
          email_confirmed: false
        });
      
      if (insertError) throw insertError;
    }
    
    // Send confirmation email using Supabase Auth
    const { error: signUpError } = await client.auth.signInWithOtp({
      email: form.email,
      options: {
        emailRedirectTo: window.location.origin + '/confirm'
      }
    });
    
    if (signUpError) throw signUpError;
    
    // Show confirmation modal
    showConfirmation.value = true;
    resetForm();
  } catch (error) {
    alert('An error occurred while submitting your RSVP. Please try again.');
    console.error('RSVP submission error:', error);
  } finally {
    isSubmitting.value = false;
  }
};

// Reset form data
const resetForm = () => {
  form.guest_type = '';
  form.family_name = '';
  form.full_name = '';
  form.email = '';
  form.phone = '';
  form.attending = null;
  form.guest_count = '1';
  form.under_10_count = '0';
  form.allergies = '';
  form.notes = '';
};

// Close modal
const closeModal = () => {
  showConfirmation.value = false;
};
</script>

<style scoped>
.rsvp-page {
  background: linear-gradient(to bottom, var(--bg-primary), #fff);
  min-height: 80vh;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.rsvp-content {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.rsvp-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 8px;
  width: 100%;
  background: var(--color-secondary);
}

.rsvp-intro {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.rsvp-deadline {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.deadline-date {
  color: var(--color-secondary);
  font-weight: bold;
  font-size: 1.2rem;
}

.form-section {
  margin-bottom: 2.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 1.5rem;
}

.form-section:last-child {
  border-bottom: none;
  margin-bottom: 1rem;
}

.form-section-title {
  color: var(--color-secondary);
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  position: relative;
  padding-left: 1.5rem;
}

.form-section-title::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 1.4rem;
  width: 8px;
  background-color: var(--color-tertiary);
  border-radius: 4px;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.radio-group {
  display: flex;
  gap: 1.5rem;
}

.radio-item {
  display: flex;
  align-items: center;
}

.radio-item input {
  margin-right: 0.5rem;
}

.form-actions {
  text-align: center;
  margin-top: 2rem;
}

.form-actions .btn {
  padding: 0.75rem 3rem;
  font-size: 1.1rem;
  background-color: var(--color-secondary);
}

.form-actions .btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Modal styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  width: 90%;
  max-width: 500px;
  border-radius: 8px;
  overflow: hidden;
  animation: modalFadeIn 0.3s ease;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-header {
  background-color: var(--color-secondary);
  color: white;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h2 {
  margin: 0;
}

.modal-close {
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal-body {
  padding: 2rem;
}

.modal-footer {
  padding: 1rem 2rem;
  text-align: right;
  background-color: #f9f9f9;
}

@media (max-width: 768px) {
  .rsvp-content {
    padding: 1.5rem;
  }
  
  .radio-group {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
