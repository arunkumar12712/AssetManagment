
namespace AssetManagement.Setup.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Setup/Department"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DepartmentRow))]
    public class DepartmentController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Setup/Department/DepartmentIndex.cshtml");
        }
    }
}