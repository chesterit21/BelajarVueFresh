using Microsoft.AspNetCore.Mvc;

namespace BelajarVueFresh.Controllers;
public class KecamanatanController : Controller
{
    public KecamanatanController()
    {
    }

    public IActionResult Index()
    {
        return View();
    }
}