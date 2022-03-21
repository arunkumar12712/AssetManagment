
namespace AssetManagement.Setup.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Setup/Brand"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BrandRow))]
    public class BrandController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Setup/Brand/BrandIndex.cshtml");
        }
    }
}