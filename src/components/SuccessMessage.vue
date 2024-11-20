<template>
    <div class="flex flex-col place-content-center items-center h-[100vh] bg-overlay text-white">
      <div class="p-10">
        <h1 class="text-4xl mb-8 text-center">Your information has been submitted successfully.</h1>
        <p class="text-2xl text-center">{{ selectedInfo }}</p>
      </div>
      <div class="p-10 max-w-3xl text-center text-xl">
        <p class="mb-8"> 
          Thank you for taking the time to review my application and for going through my app. 
          I hope you enjoyed it as much as I enjoyed building it. If you have any 
          feedback or questions, feel free to reach out. I look forward to hearing from you!
        </p>
        <p>
          Best Regards, <br>
          Nenad Misic
        </p>
      </div>
    </div>
  </template>
  
<script setup>
    import { defineProps } from 'vue';
    
    const props = defineProps({
        selectedInfo: {
        type: String,
        required: true,
        },
    });
</script>
  