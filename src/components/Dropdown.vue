<template>
  <div class="p-4 text-2xl">
    <label :for="label" class="block mb-2 text-sm font-medium text-gray-900 hidden">{{ label }}</label>
    <select
      class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      :id="label"
      :disabled="disabled"
      v-model="selected"
    >
      <option value="" disabled>Select {{ label }}</option>
      <option
        v-for="option in options"
        :key="option.id || option"
        :value="option"
      >
        {{ option.name || option }} 
      </option>
    </select>
  </div>
</template>

<script setup>
  import { defineProps, defineEmits, computed } from 'vue';

  const props = defineProps({
    label: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: [String, Object],
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  });

  const emit = defineEmits(["update:modelValue"]);

  const selected = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit("update:modelValue", value);
    },
  });
</script>
