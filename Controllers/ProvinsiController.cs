using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

namespace BelajarVueFresh.Controllers;

public class ProvinsiController : Controller
{
    private readonly IMemoryCache _cache;
    public ProvinsiController(IMemoryCache cache)
    {
        _cache = cache;
    }
    public IActionResult Index()
    {
        return View();
    }
    
    [HttpGet]
    public async Task<IActionResult> GetProvinsi()
    {
        var listProvinsi = await DataDummyProvinsi();
        return Json(new
        {
            total = listProvinsi.Count,
            data = listProvinsi
        });
    }

    private async Task<List<ProvinsiDto>> DataDummyProvinsi()
    {
        const string cacheKey = "DummyProvinsiList";
        // Simulate async data fetching
        await Task.Delay(100);
        if (!_cache.TryGetValue(cacheKey, out List<ProvinsiDto>? listProvinsi) || listProvinsi == null)
        {
            listProvinsi = new List<ProvinsiDto>();
            for (int i = 0; i < 5; i++)
            {
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Aceh", "Banda Aceh", 5270000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Sumatera Utara", "Medan", 15200000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Sumatera Barat", "Padang", 5640000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Riau", "Pekanbaru", 6970000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Kepulauan Riau", "Tanjung Pinang", 2150000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Jambi", "Jambi", 3620000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Bengkulu", "Bengkulu", 2030000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Sumatera Selatan", "Palembang", 8710000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Lampung", "Bandar Lampung", 9170000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Bangka Belitung", "Pangkal Pinang", 1480000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "DKI Jakarta", "Jakarta", 10560000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Banten", "Serang", 12640000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Jawa Barat", "Bandung", 50360000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Jawa Tengah", "Semarang", 37160000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "DI Yogyakarta", "Yogyakarta", 3820000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Jawa Timur", "Surabaya", 41490000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Bali", "Denpasar", 4320000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Nusa Tenggara Barat", "Mataram", 5330000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Nusa Tenggara Timur", "Kupang", 5610000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Kalimantan Barat", "Pontianak", 5570000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Kalimantan Tengah", "Palangka Raya", 2740000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Kalimantan Selatan", "Banjarbaru", 4370000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Kalimantan Timur", "Samarinda", 3860000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Kalimantan Utara", "Tanjung Selor", 760000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Sulawesi Utara", "Manado", 2640000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Gorontalo", "Gorontalo", 1200000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Sulawesi Tengah", "Palu", 3080000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Sulawesi Selatan", "Makassar", 9140000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Sulawesi Tenggara", "Kendari", 2710000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Sulawesi Barat", "Mamuju", 1480000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Maluku", "Ambon", 1840000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Maluku Utara", "Sofifi", 1380000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Papua", "Jayapura", 4460000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Papua Barat", "Manokwari", 1150000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Papua Selatan", "Merauke", 479000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Papua Tengah", "Nabire", 1100000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Papua Pegunungan", "Wamena", 1400000));
                listProvinsi.Add(new ProvinsiDto(Guid.NewGuid(), "Kepulauan Maluku Utara", "Tidore Kepulauan", 1500000));
            }
            // Simpan ke cache selama 30 menit (bisa disesuaikan)
            var cacheEntryOptions = new MemoryCacheEntryOptions()
                .SetSlidingExpiration(TimeSpan.FromMinutes(30)); // reset timer kalau diakses

            _cache.Set(cacheKey, listProvinsi, cacheEntryOptions);
        }
        return await Task.FromResult(listProvinsi);
    }
    public record struct ProvinsiDto(Guid Id, string Nama, string Ibukota, int JumlahPenduduk);
}