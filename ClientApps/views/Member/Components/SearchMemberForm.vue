<template>
  <div class="p-grid p-fluid mb-3">
    <div class="p-col-12 p-md-3">
      <InputText v-model="model.nama" placeholder="Nama" />
    </div>
    <div class="p-col-12 p-md-3">
      <InputText v-model="model.alamat" placeholder="Alamat" />
    </div>
    <div class="p-col-12 p-md-3">
      <InputText v-model="model.email" placeholder="Email" />
    </div>
    <div class="p-col-12 p-md-3">
      <Button label="Cari" icon="pi pi-search" @click="emit('search', model)" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

const emit = defineEmits(['search'])
const model = ref({
  nama: '',
  alamat: '',
  email: ''
})
</script>
