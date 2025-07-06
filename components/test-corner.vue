<template>
  <!-- This is just a test file to check corner image implementation -->
  <div class="relative p-4 border border-gray-200">
    <!-- CountdownTimer corner image implementation -->
    <div class="absolute top-1 left-1 w-4 xs:w-6 h-4 xs:h-6">
      <CornerImage :rotation="90" />
    </div>
    <div class="absolute top-1 right-1 w-4 xs:w-6 h-4 xs:h-6">
      <CornerImage :rotation="180" />
    </div>
    <div class="absolute bottom-1 left-1 w-4 xs:w-6 h-4 xs:h-6">
      <CornerImage :rotation="0" />
    </div>
    <div class="absolute bottom-1 right-1 w-4 xs:w-6 h-4 xs:h-6">
      <CornerImage :rotation="-90" />
    </div>
    
    <div class="p-4">Content goes here</div>
  </div>
</template>

<script setup>
import CornerImage from '~/components/CornerImage.vue';
</script>
