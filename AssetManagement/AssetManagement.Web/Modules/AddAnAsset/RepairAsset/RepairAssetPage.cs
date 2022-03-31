
namespace AssetManagement.AddAnAsset.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("AddAnAsset/RepairAsset"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RepairAssetRow))]
    public class RepairAssetController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/AddAnAsset/RepairAsset/RepairAssetIndex.cshtml");
        }
    }
}