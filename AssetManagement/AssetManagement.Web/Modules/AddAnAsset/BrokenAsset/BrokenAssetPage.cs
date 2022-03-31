
namespace AssetManagement.AddAnAsset.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("AddAnAsset/BrokenAsset"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BrokenAssetRow))]
    public class BrokenAssetController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/AddAnAsset/BrokenAsset/BrokenAssetIndex.cshtml");
        }
    }
}