<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="show" class="fixed inset-0 z-[999] overflow-hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <!-- Backdrop -->
        <div 
          class="absolute inset-0 bg-black/80 backdrop-blur-sm" 
          @click="$emit('close')"
        ></div>
        
        <!-- Modal container -->
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <div 
            class="relative w-full max-w-2xl transform overflow-hidden rounded-2xl bg-gradient-to-b from-cream to-beige p-6 text-left shadow-xl transition-all border border-gold/30"
          >
            <!-- Corner decorations -->
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
            
            <!-- Close button moved to bottom middle -->
            
            <!-- Modal content -->
            <div class="mt-2 px-3 py-1">
              <h1 class="text-center text-2xl font-decorative text-gold mb-6 font-size-2xl">Parking Information</h1>
              
              <!-- Separator -->
              <div class="w-60 h-3.5 mx-auto mb-4">
                <img src="../public/img/seperator.png" alt="" class="w-full h-full" />
              </div>
              
              <!-- Map image with subtle shadow and border -->
              <div class="flex items-center justify-center">
                <img 
                  src="../public/img/parking.png" 
                  alt="Parking Map" 
                  class="max-w-full h-auto rounded-lg max-h-[60vh] object-contain shadow-elegant border border-gold/10" 
                  @error="handleImageError"
                  v-if="!imageError"
                />
                <div v-else class="p-6 bg-burgundy/10 rounded-lg text-burgundy text-center">
                  <p>Unable to load parking map image.</p>
                  <p class="mt-2">Please check with the venue for parking details.</p>
                </div>
              </div>
              
              <!-- Parking details -->
              <div class="mt-4 text-center text-burgundy">
                <p class="font-secondary">Free parking available on-site</p>
              </div>
              
              <!-- Separator before close button -->
              <div class="w-32 h-2 mx-auto mt-5 mb-5">
                <img src="../public/img/seperator.png" alt="" class="w-full h-full opacity-60" />
              </div>
              
              <!-- Close button at bottom middle -->
              <div class="flex justify-center mb-2">
                <button 
                  @click="$emit('close')"
                  class="px-8 py-2 bg-burgundy text-beige font-secondary rounded-full shadow-elegant hover:bg-gold hover:text-burgundy transition-all duration-300 border border-gold/40 hover:shadow-gold-glow relative overflow-hidden group"
                  aria-label="Close modal"
                >
                  <span class="relative z-10">Close</span>
                  <span class="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    required: true
  }
});

defineEmits(['close']);
</script>
