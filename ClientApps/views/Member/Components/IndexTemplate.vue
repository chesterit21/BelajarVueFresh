<template>
  <div class="p-fluid">
 <!-- Search Form -->
  <SearchMemberForm @search="handleSearch" />
  <BaseTable
      :columns="columns"
      :items="members"
      :totalRecords="total"
      :loading="loading"
      :first="pagination.first"
      :rowsPerPage="pagination.rows"
      :sortField="pagination.sortField"
      :sortOrder="pagination.sortOrder"
      @edit="handleEdit"
      @delete="handleDelete"
      @page-change="handlePage"
      @sort-change="handleSort"
    />
</div>
</template>

<script>
import { fetchMembers } from '@/services/MemberService'
import BaseTable from '@/components/base/BaseTable.vue'
import SearchMemberForm from './SearchMemberForm.vue'

export default {
  name: 'IndexTemplate',
  components: { BaseTable , SearchMemberForm },
  data() {
    return {
      columns: [
        { field: 'id', header: 'ID' },
        { field: 'nama', header: 'Nama' },
        { field: 'alamat', header: 'Alamat' },
        { field: 'tglLahir', header: 'Tgl.Lahir' },
        { field: 'email', header: 'Email' }
      ],
      members: [],
      loading: false,
      total: 0,
      search: {
                nama: '',
                alamat: '',
                email: ''
              },
      pagination: {
        page: 0,
        rows: 10,
        first: 0,
        sortField: '',
        sortOrder: 1
      }
    }
  },
  mounted() {
    this.loadMembers()
  },
  methods: {
    async loadMembers() {
      this.loading = true
      try {
        const result = await fetchMembers({...this.pagination, ...this.search})
        this.members = Array.isArray(result.data) ? result.data : []
        this.total = result.total || 0
      } catch (err) {
        console.error('Failed to load members:', err)
      } finally {
        this.loading = false
      }
    },
    handlePage({ page, rows }) {
      this.pagination.page = page
      this.pagination.rows = rows
      this.pagination.first = page * rows
      this.loadMembers()
    },
    handleSort({ sortField, sortOrder }) {
      this.pagination.sortField = sortField
      this.pagination.sortOrder = sortOrder
      this.loadMembers()
    },
    handleSearch(formData) {
      this.search = { ...formData }
      this.pagination.page = 0
      this.pagination.first = 0
      this.loadMembers()
    },
    handleEdit(id) {
      console.log('Edit member with ID:', id)
      // Bisa diarahkan ke route edit atau buka modal
    },
    handleDelete(id) {
      console.log('Delete member with ID:', id)
      // Implementasi confirm & call ke API delete
    }
  }
}
</script>
<style>
.p-datatable.p-datatable-sm .p-datatable-tbody > tr > td {
    padding: 0.045rem 0.5rem !important;
}
</style>