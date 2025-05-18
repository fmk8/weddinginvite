<template>
  <div class="max-w-2xl mx-auto my-12 p-8 bg-beige rounded-xl border-4 border-gold shadow-xl text-center">
    <div v-if="loading" class="py-12">
      <div class="text-2xl text-burgundy font-secondary mb-4">Confirming your RSVP...</div>
      <div class="w-12 h-12 border-4 border-t-burgundy border-gold rounded-full animate-spin mx-auto"></div>
    </div>
    
    <div v-else-if="error" v-motion="{ initial: { opacity: 0 }, enter: { opacity: 1, transition: { duration: 0.7 } } }" class="py-8">
      <h1 class="text-3xl text-burgundy font-secondary mb-6">Confirmation Error</h1>
      <p class="text-lg mb-4">{{ error }}</p>
      <NuxtLink to="/rsvp" class="inline-block px-6 py-3 mt-4 bg-burgundy text-beige font-secondary rounded-full shadow-md hover:bg-gold hover:text-black transition">
        Return to RSVP Form
      </NuxtLink>
    </div>
    
    <div v-else v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { duration: 0.7 } } }" class="py-8">
      <h1 class="text-3xl text-burgundy font-secondary mb-2">Thank You!</h1>
      <div class="text-5xl text-gold my-4">✓</div>
      <p class="text-xl mb-6">Your RSVP has been confirmed.</p>
      <p class="mb-8">We're looking forward to celebrating with you on our special day!</p>
      
      <NuxtLink to="/" class="inline-block px-6 py-3 bg-burgundy text-beige font-secondary rounded-full shadow-md hover:bg-gold hover:text-black transition">
        Return to Homepage
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const client = useSupabaseClient();
const route = useRoute();
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    // Get the hash parameters from the URL
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = hashParams.get('access_token');
    const refreshToken = hashParams.get('refresh_token');
    const type = hashParams.get('type');
    
    if (!accessToken || type !== 'recovery') {
      error.value = 'Invalid confirmation link. Please try again or contact the hosts.';
      loading.value = false;
      return;
    }
    
    // Set the session using the tokens from the URL
    const { data, error: sessionError } = await client.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken
    });
    
    if (sessionError) {
      throw sessionError;
    }
    
    // Get the user's email
    const { data: { user } } = await client.auth.getUser();
    
    if (!user || !user.email) {
      throw new Error('Could not retrieve user information');
    }
    
    // Update the RSVP record to mark email as confirmed
    const { error: updateError } = await client
      .from('rsvp')
      .update({ email_confirmed: true })
      .eq('email', user.email);
    
    if (updateError) {
      throw updateError;
    }
    
    loading.value = false;
  } catch (err) {
    console.error('Confirmation error:', err);
    error.value = 'There was a problem confirming your RSVP. Please try again or contact the hosts.';
    loading.value = false;
  }
});
</script>
