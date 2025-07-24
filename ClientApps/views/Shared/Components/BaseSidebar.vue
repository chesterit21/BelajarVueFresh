<!-- CLientApps/view/Shared/Components/BaseSidebar.vue -->

<template>
  <aside class="w-18rem flex-shrink-0 p-3">
    <div class="card flex flex-col items-center gap-4">
        <PanelMenu v-model="expandedKeys" :model="items" class="w-full md:w-80" />
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";
import PanelMenu from 'primevue/panelmenu';

const expandedKeys = ref({});
const items = ref([
    {
        key: '0',
        label: 'Users',
        icon: 'pi pi-users',
        items: [
            {
                key: '0_1',
                label: 'New',
                items: [
                    {
                        key: '0_1_0',
                        label: 'Member',
                        url :'/Member'
                    },
                    {
                        key: '0_1_1',
                        label: 'Provinsi',
                        url : '/Provinsi'
                    }
                ]
            },
            {
                key: '0_2',
                label: 'Search'
            }
        ]
    },
    {
        key: '1',
        label: 'Tasks',
        icon: 'pi pi-server',
        items: [
            {
                key: '1_0',
                label: 'Add New'
            },
            {
                key: '1_1',
                label: 'Pending'
            },
            {
                key: '1_2',
                label: 'Overdue'
            }
        ]
    },
    {
        key: '2',
        label: 'Calendar',
        icon: 'pi pi-calendar',
        items: [
            {
                key: '2_0',
                label: 'New Event'
            },
            {
                key: '2_1',
                label: 'Today'
            },
            {
                key: '2_2',
                label: 'This Week'
            }
        ]
    }
]);
// export default {
//   name: 'AppSidebar',
//   // Anda bisa menambahkan data, methods, dll. di sini jika diperlukan
// }
</script>

<style scoped>
/* Gaya khusus untuk sidebar jika diperlukan */
</style>