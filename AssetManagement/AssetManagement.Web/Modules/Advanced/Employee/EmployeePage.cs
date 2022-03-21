
namespace AssetManagement.Advanced.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Advanced/Employee"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EmployeeRow))]
    public class EmployeeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Advanced/Employee/EmployeeIndex.cshtml");
        }
    }
}