// ClientApps/services/ProvinsiService.js
import { get } from '@/core/http/httpClient'

export async function fetchProvinsis() {
  return await get('/Provinsi/GetProvinsi')
}
