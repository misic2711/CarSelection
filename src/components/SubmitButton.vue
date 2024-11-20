<template>
    <div class="p-4 w-full flex items-center place-content-center rounded-lg" :class="buttonClass">
      <button 
        class="text-[#00326f] w-full"
        @click="handleClick"
      >
        {{ label }}
      </button>
    </div>
</template>
  
<script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    label: {
      type: String,
      required: true,
    },
    buttonClass: {
      type: String,
      default: 'bg-[#bbf77f] hover:bg-green-300',
    },
    onClick: {
      type: Function,
      required: true,
    },
  });
  
  const handleClick = () => {
    props.onClick(); 
  };
</script>
  