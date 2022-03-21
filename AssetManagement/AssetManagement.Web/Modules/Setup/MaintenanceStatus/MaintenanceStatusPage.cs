
namespace AssetManagement.Setup.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Setup/MaintenanceStatus"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MaintenanceStatusRow))]
    public class MaintenanceStatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Setup/MaintenanceStatus/MaintenanceStatusIndex.cshtml");
        }
    }
}