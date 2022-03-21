
namespace AssetManagement.Setup.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Setup/Country"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CountryRow))]
    public class CountryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Setup/Country/CountryIndex.cshtml");
        }
    }
}