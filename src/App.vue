<template>
  <div>
    <CarSelection
      v-if="showContext"
      :showContext="showContext"
      @submitted="handleSubmitted"
    />

    <SuccessMessage 
      v-else 
      :selectedInfo="carStore.selectedInfo" 
    />   
  </div>
</template>

<script setup>
  import { ref, watch } from "vue";
  import { useCarStore } from "./stores/carStore";
  import CarSelection from "./components/CarSelection.vue";
  import SuccessMessage from "./components/SuccessMessage.vue";

  const carStore = useCarStore();
  const showContext = ref(true);

  const handleSubmitted = () => {
    showContext.value = false;
  };

  watch(() => carStore.selectedYear, carStore.fetchMakes);
  watch(() => carStore.selectedMake, carStore.fetchModels);

  carStore.fetchYears();
</script>
