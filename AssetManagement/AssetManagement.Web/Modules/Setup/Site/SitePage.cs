
namespace AssetManagement.Setup.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Setup/Site"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SiteRow))]
    public class SiteController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Setup/Site/SiteIndex.cshtml");
        }
    }
}