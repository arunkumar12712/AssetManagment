
namespace AssetManagement.AddAnAsset.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("AddAnAsset/DisposeAsset"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DisposeAssetRow))]
    public class DisposeAssetController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/AddAnAsset/DisposeAsset/DisposeAssetIndex.cshtml");
        }
    }
}