<!-- CLientApps/view/Shared/Components/BaseHeader.vue -->
<template>
  <header class="bg-primary text-white p-3 flex align-items-center justify-content-between shadow-2 flex-shrink-0">
    <div class="text-xl font-bold">Nama Aplikasi Anda</div>
    <div>
      <i class="pi pi-cog mr-2"></i>
      <i class="pi pi-user"></i>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  // Anda bisa menambahkan data, methods, dll. di sini jika diperlukan
}
</script>

<style scoped>
/* Gaya khusus untuk header jika diperlukan */
</style>