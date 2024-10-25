import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDreameTimeStore = defineStore('DreamTimeManager', () => {
  const DreamTime = ref<Array<number>>([0,0])
  
  const DreamTimeAmount = computed(() => {
    DreamTime.value[0] + DreamTime.value[1]
  })

  return { DreamTime, DreamTimeAmount }
})
