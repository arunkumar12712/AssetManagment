
namespace AssetManagement.Setup.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Setup/Category"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CategoryRow))]
    public class CategoryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Setup/Category/CategoryIndex.cshtml");
        }
    }
}