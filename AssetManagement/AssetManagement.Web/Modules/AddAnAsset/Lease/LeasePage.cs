
namespace AssetManagement.AddAnAsset.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("AddAnAsset/Lease"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LeaseRow))]
    public class LeaseController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/AddAnAsset/Lease/LeaseIndex.cshtml");
        }
    }
}