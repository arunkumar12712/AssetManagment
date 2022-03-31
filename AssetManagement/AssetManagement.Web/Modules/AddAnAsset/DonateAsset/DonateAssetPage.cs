
namespace AssetManagement.AddAnAsset.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("AddAnAsset/DonateAsset"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DonateAssetRow))]
    public class DonateAssetController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/AddAnAsset/DonateAsset/DonateAssetIndex.cshtml");
        }
    }
}