
namespace AssetManagement.AddAnAsset.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("AddAnAsset/AssetMaintenance"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AssetMaintenanceRow))]
    public class AssetMaintenanceController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/AddAnAsset/AssetMaintenance/AssetMaintenanceIndex.cshtml");
        }
    }
}