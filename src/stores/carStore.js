import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { getYears, getMakes, getModels } from "../services/api";

export const useCarStore = defineStore("car", () => {
  const years = ref([]);
  const makes = ref([]);
  const models = ref([]);
  const selectedYear = ref("");
  const selectedMake = ref("");
  const selectedModel = ref("");

  const fetchYears = async () => {
    const response = await getYears();
    years.value = response.data.map((year) => year.toString());
  };

  const fetchMakes = async () => {
    if (selectedYear.value) {
      const response = await getMakes(selectedYear.value);
      makes.value = response.data.map((make) => ({
        id: make.id,
        name: make.name,
      }));
      selectedMake.value = "";
      models.value = [];
    }
  };

  const fetchModels = async () => {
    if (selectedYear.value && selectedMake.value) {
      const response = await getModels(selectedYear.value, selectedMake.value.name);
      models.value = response.data.map((model) => ({
        id: model.model,
        name: model.model,
      }));
      selectedModel.value = "";
    }
  };

  const handleSubmit = () => {
    if (selectedYear.value && selectedMake.value && selectedModel.value) {
      return true;
    } else {
      alert("Please select all fields.");
      return false;
    }
  };

  const selectedInfo = computed(() => {
    if (selectedYear.value && selectedMake.value && selectedModel.value) {
      return `You selected ${selectedMake.value.name} ${selectedModel.value.name} from ${selectedYear.value}.`;
    }
    return "Please select a car.";
  });

  return {
    years,
    makes,
    models,
    selectedYear,
    selectedMake,
    selectedModel,
    fetchYears,
    fetchMakes,
    fetchModels,
    handleSubmit,
    selectedInfo,
  };
});
