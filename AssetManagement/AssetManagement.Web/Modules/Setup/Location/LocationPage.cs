
namespace AssetManagement.Setup.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Setup/Location"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LocationRow))]
    public class LocationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Setup/Location/LocationIndex.cshtml");
        }
    }
}