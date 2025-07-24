// ClientApps/services/MemberService.js
import { get } from '@/core/http/httpClient'

export async function fetchMembers({ page = 0, rows = 10, sortField = '', sortOrder = 1 ,nama = '', alamat='',email=''}) {
  const params = {
    page,
    size: rows,
    sortField,
    sortOrder,
    nama,
    alamat,
    email
  }
  // const response = await get('/Member/GetMember', { params })
  // return response.data // ⬅️ PENTING
  return await get('/Member/GetMember', { params })
}
