
namespace AssetManagement.AddAnAsset.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("AddAnAsset/AssetWarranty"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AssetWarrantyRow))]
    public class AssetWarrantyController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/AddAnAsset/AssetWarranty/AssetWarrantyIndex.cshtml");
        }
    }
}