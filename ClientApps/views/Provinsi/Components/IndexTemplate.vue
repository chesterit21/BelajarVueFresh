// ClientApps/views/Provinsi/Components/IndexTemplate.vue

<script setup>
import { ref, onMounted } from 'vue'
import { fetchProvinsis } from '@/services/ProvinsiService'
import BaseTableClientSide from '@/components/base/BaseTableClientSide.vue'

const provinsis = ref([])

async function loadData() {
  const result = await fetchProvinsis()
  provinsis.value = result?.data || []
}


onMounted(loadData)

const columns = [
  { field: 'id', header: 'Id' },
  { field: 'nama', header: 'Nama', sortable: true },
  { field: 'ibukota', header: 'Ibu Kota' , sortable: true},
  { field: 'jumlahPenduduk', header: 'Jumlah Penduduk' , sortable: true}
]
</script>

<template>
  <BaseTableClientSide v-if="provinsis.length" :data="provinsis" :columns="columns" :rows="10">
    <template #header>
      <div class="text-lg font-medium">Daftar Provinsi</div>
    </template>
  </BaseTableClientSide>
</template>
