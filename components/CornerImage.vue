<template>
  <div class="w-full h-full opacity-100">
    <img 
      :src="imgSrc" 
      alt=""
      class="w-full h-full"
      :class="rotationClass"
      style="filter: opacity(1);"
      @error="handleImageError"
      v-if="!hasError"
    />
    <!-- Fallback div if image fails to load -->
    <div v-else class="w-full h-full bg-gold/10 rounded-sm"></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  rotation: {
    type: Number,
    default: 0,
    validator: (val) => [0, 90, 180, 270, -90].includes(val)
  }
});

const hasError = ref(false);
const imgSrc = ref('/img/corner.png');

// Compute rotation class based on the rotation prop
const rotationClass = computed(() => {
  switch(props.rotation) {
    case 0: return 'transform rotate-0';
    case 90: return 'transform rotate-90';
    case 180: return 'transform rotate-180';
    case 270: case -90: return 'transform -rotate-90';
    default: return '';
  }
});

// Handle image loading errors
const handleImageError = () => {
  console.error('Failed to load corner image');
  hasError.value = true;
  
  // Try to reload with absolute path as fallback
  setTimeout(() => {
    imgSrc.value = window.location.origin + '/img/corner.png';
    hasError.value = false;
  }, 500);
};

// Preload the image
onMounted(() => {
  const img = new Image();
  img.src = imgSrc.value;
  img.onerror = handleImageError;
});
</script>
