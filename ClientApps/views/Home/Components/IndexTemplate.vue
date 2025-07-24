<template>
  <div class="p-4 space-y-6">
    <h2 class="text-xl font-bold">Preview Komponen</h2>

    <!-- Base Buttons -->
    <section class="space-x-2 sectionOne">
      <SaveButton @click="onClick('Simpan')" />
      <CancelButton @click="onClick('Batal')" />
      <ExportExcelButton filename="data-user" @click="onClick('Export Excel')" />
      <ExportPdfButton filename="laporan" @click="onClick('Export PDF')" />
      <ExportCsvButton @click="onClick('Export CSV')" />
    </section>

    <!-- Upload Button -->
    <section class="sectionOne">
      <UploadButton v-model="uploadedFiles" :multiple="true" />
    </section>

    <!-- Base Input -->
    <section class="sectionOne">
      <BaseInput v-model="inputValue" label="Nama Lengkap" />
    </section>

    <!-- Base Dropdown -->
    <section class="sectionOne">
      <BaseDropdown
        v-model="selectedOption"
        label="Pilih Kota"
        :options="cities"
        optionLabel="name"
        optionValue="code"
        placeholder="Pilih satu kota"
      />
    </section>

    <!-- Base Multi Select -->
    <section class="sectionOne">
      <BaseMultiSelect
        v-model="selectedSkills"
        label="Skill yang Dikuasai"
        :options="skills"
        optionLabel="name"
        optionValue="code"
        placeholder="Pilih beberapa"
      />
    </section>

<div class="card flex flex-col items-center gap-4 sectionOne">
        <div class="flex flex-wrap gap-4 justify-center">
            <Button icon="pi pi-home" aria-label="Save" />
            <Button label="Profile" icon="pi pi-user" />
            <Button label="Save" icon="pi pi-check" iconPos="right" />
        </div>
        <div class="flex flex-wrap gap-4 justify-center">
            <Button label="Search" icon="pi pi-search" iconPos="top" />
            <Button label="Update" icon="pi pi-refresh" iconPos="bottom" />
        </div>
    </div></div>
</template>

<script setup>
import SaveButton from '@/components/base/buttons/SaveButton.vue'
import CancelButton from '@/components/base/buttons/CancelButton.vue'
import ExportExcelButton from '@/components/base/buttons/ExportExcelButton.vue'
import ExportPdfButton from '@/components/base/buttons/ExportPdfButton.vue'
import ExportCsvButton from '@/components/base/buttons/ExportCsvButton.vue'
import UploadButton from '@/components/base/buttons/UploadButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseDropdown from '@/components/base/BaseDropdown.vue'
import BaseMultiSelect from '@/components/base/BaseMultiSelect.vue'
import { ref } from 'vue'

const uploadedFiles = ref([])
const inputValue = ref('')
const selectedOption = ref(null)
const selectedSkills = ref([])

const cities = [
  { name: 'Jakarta', code: 'JKT' },
  { name: 'Bandung', code: 'BDG' },
  { name: 'Surabaya', code: 'SBY' }
]

const skills = [
  { name: 'Vue.js', code: 'vue' },
  { name: 'ASP.NET Core', code: 'aspnet' },
  { name: 'SQL Server', code: 'sql' }
]

function onClick(label) {
  alert(`Klik tombol: ${label}`)
}
</script>
<style scoped>
.sectionOne {
 padding-top: 5px;
 padding-bottom: 5px;
}
</style>