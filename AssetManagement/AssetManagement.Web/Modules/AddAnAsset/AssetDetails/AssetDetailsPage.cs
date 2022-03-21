
namespace AssetManagement.AddAnAsset.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("AddAnAsset/AssetDetails"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AssetDetailsRow))]
    public class AssetDetailsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/AddAnAsset/AssetDetails/AssetDetailsIndex.cshtml");
        }
    }
}