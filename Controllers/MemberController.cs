using System.Reflection;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

namespace BelajarVueFresh.Controllers;
public class MemberController : Controller
{
    private readonly IMemoryCache _cache;
    public MemberController(IMemoryCache cache)
    {
        _cache = cache;
    }
    public IActionResult Index()
    {
        return View();
    }

    [HttpGet]
    public async Task<IActionResult> GetMember(int page = 0, int size = 10, string sortField = "",   int sortOrder = 1,
    string? nama = null,
    string? alamat = null,
    string? email = null)
    {
        var listMember = await DataDummyMember();
        // Apply Search
        if (!string.IsNullOrEmpty(nama))
listMember = listMember
    .Where(m => m.Nama != null && m.Nama.Contains(nama, StringComparison.OrdinalIgnoreCase))
    .ToList();
        if (!string.IsNullOrEmpty(alamat))
listMember = listMember
    .Where(m => m.Alamat != null && m.Alamat.Contains(alamat, StringComparison.OrdinalIgnoreCase))
    .ToList();
        if (!string.IsNullOrEmpty(email))
listMember = listMember
    .Where(m => m.Email != null && m.Email.Contains(email, StringComparison.OrdinalIgnoreCase))
    .ToList();

        // 🔀 Sorting
        if (!string.IsNullOrEmpty(sortField))
        {
            //var propInfo = typeof(MemberDto).GetProperty(sortField);
            var propInfo = typeof(MemberDto).GetProperty(sortField, BindingFlags.IgnoreCase | BindingFlags.Public | BindingFlags.Instance);

            if (propInfo != null)
            {
                listMember = sortOrder > 0
                    ? listMember.OrderBy(x => propInfo.GetValue(x, null)).ToList()
                    : listMember.OrderByDescending(x => propInfo.GetValue(x, null)).ToList();
            }
        }        

        // 🔁 Paging
        var total = listMember.Count;
        var pagedData = listMember.Skip(page * size).Take(size).ToList();

        return Json(new
        {
            total,
            data = pagedData
        });
    }


    private async Task<List<MemberDto>> DataDummyMember()
    {
        const string cacheKey = "DummyMemberList";

        if (!_cache.TryGetValue(cacheKey, out List<MemberDto>? listMember) || listMember == null)
        {
            listMember = new List<MemberDto>();
            for (int i = 0; i < 23; i++)
            {
                listMember.Add(new MemberDto(Guid.NewGuid(), "Alex", "Depok 2", "alex.345@gmail.com", DateTime.Now.AddYears(-25)));
                listMember.Add(new MemberDto(Guid.NewGuid(), "Boby", "Depok 2", "boby.345@gmail.com", DateTime.Now.AddYears(-22)));
                listMember.Add(new MemberDto(Guid.NewGuid(), "Andrea", "Depok 2", "andrea.345@gmail.com", DateTime.Now.AddYears(-21)));
                listMember.Add(new MemberDto(Guid.NewGuid(), "Deni", "Depok 2", "denica.345@gmail.com", DateTime.Now.AddYears(-18)));
                listMember.Add(new MemberDto(Guid.NewGuid(), "Salih", "Depok 2", "salih.345865ge@gmail.com", DateTime.Now.AddYears(-32)));
                listMember.Add(new MemberDto(Guid.NewGuid(), "Cupang", "Depok 2", "cupangdo.gr56@gmail.com", DateTime.Now.AddYears(-31)));
                listMember.Add(new MemberDto(Guid.NewGuid(), "Deden", "Depok 2", "defentea.tear345@gmail.com", DateTime.Now.AddYears(-26)));
                listMember.Add(new MemberDto(Guid.NewGuid(), "Jaki", "Depok 2", "jaki.ghuj@hotmail.com", DateTime.Now.AddYears(-25)));
                listMember.Add(new MemberDto(Guid.NewGuid(), "Gogon", "Depok 2", "gogondrong.345@gmail.com", DateTime.Now.AddYears(-28)));
                listMember.Add(new MemberDto(Guid.NewGuid(), "Cepot", "Depok 2", "cepotmerah.beur@gmail.com", DateTime.Now.AddYears(-29)));
                listMember.Add(new MemberDto(Guid.NewGuid(), "Rebeca", "Depok 2", "rebec.ecatea@gmail.com", DateTime.Now.AddYears(-20)));
                listMember.Add(new MemberDto(Guid.NewGuid(), "Handi", "Depok 2", "handi.andrianto@gmail.com", DateTime.Now.AddYears(-23)));
                listMember.Add(new MemberDto(Guid.NewGuid(), "Willy", "Depok 2", "willy.am4@gmail.com", DateTime.Now.AddYears(-24)));

                listMember.Add(new MemberDto(Guid.NewGuid(), "Ruby", "Clash Down", "ruby.grow@gmail.com", DateTime.Now.AddYears(-20)));
                listMember.Add(new MemberDto(Guid.NewGuid(), "Hani", "Cianjur 2", "hani.ira@gmail.com", DateTime.Now.AddYears(-21)));
                listMember.Add(new MemberDto(Guid.NewGuid(), "Windi", "Depok 2", "windi.akuma@gmail.com", DateTime.Now.AddYears(-22)));
            }

            // Simpan ke cache selama 30 menit (bisa disesuaikan)
            var cacheEntryOptions = new MemoryCacheEntryOptions()
                .SetSlidingExpiration(TimeSpan.FromMinutes(30)); // reset timer kalau diakses

            _cache.Set(cacheKey, listMember, cacheEntryOptions);
        }

        return await Task.FromResult(listMember);
    }
    public IActionResult AddMember()
    {
        return View();
    }
    
    public record struct MemberDto(Guid Id, string Nama, string Alamat,string Email, DateTime TglLahir);
}
