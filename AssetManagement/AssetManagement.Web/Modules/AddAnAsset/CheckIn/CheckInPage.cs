
namespace AssetManagement.AddAnAsset.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("AddAnAsset/CheckIn"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CheckInRow))]
    public class CheckInController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/AddAnAsset/CheckIn/CheckInIndex.cshtml");
        }
    }
}