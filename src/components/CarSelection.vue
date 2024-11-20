<template>
  <div v-if="showContext" class="flex flex-col lg:flex-row place-content-center items-center h-[100vh] bg-overlay" style="gap: 20%;">
    <div class="text-white flex flex-col text-center lg:text-left">
      <h1 class="font-medium text-5xl pb-6">California Auto <br> Transport</h1>
      <span class="text-lg font-normal">
        Safe, secure auto transport to/from California with <br />
        Nexus.
      </span>
    </div>

    <div class="bg-[#f4f7fb] rounded-lg">
      <div class="px-8 pt-8">
        <h2 class="text-3xl text-black pb-2">Select your dream car!</h2>
        <Dropdown
          label="Year"
          :options="carStore.years"
          v-model="carStore.selectedYear"
          :disabled="false"
        />

        <Dropdown
          label="Make"
          :options="carStore.makes"
          v-model="carStore.selectedMake"
          :disabled="!carStore.selectedYear"
        />

        <Dropdown
          label="Model"
          :options="carStore.models"
          v-model="carStore.selectedModel"
          :disabled="!carStore.selectedMake"
        />
      </div>

      <SubmitButton 
        label="Submit"
        :onClick="submit" 
        buttonClass="bg-[#bbf77f] hover:bg-green-300"
      />
    </div>
  </div>
</template>

<script setup>
  import { useCarStore } from "../stores/carStore";
  import Dropdown from "./Dropdown.vue";
  import SubmitButton from "./SubmitButton.vue";  

  const props = defineProps({
    showContext: Boolean,
  });

  const emit = defineEmits();

  const carStore = useCarStore();

  const submit = () => {
    if (carStore.handleSubmit()) {
      emit("submitted");
    }
  };
</script>
