
namespace AssetManagement.AddAnAsset.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("AddAnAsset/CheckOut"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CheckOutRow))]
    public class CheckOutController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/AddAnAsset/CheckOut/CheckOutIndex.cshtml");
        }
    }
}