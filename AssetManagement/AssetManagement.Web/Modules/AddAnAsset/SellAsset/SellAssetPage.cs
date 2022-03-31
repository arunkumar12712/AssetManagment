
namespace AssetManagement.AddAnAsset.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("AddAnAsset/SellAsset"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SellAssetRow))]
    public class SellAssetController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/AddAnAsset/SellAsset/SellAssetIndex.cshtml");
        }
    }
}