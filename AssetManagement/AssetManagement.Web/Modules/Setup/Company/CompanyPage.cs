
namespace AssetManagement.Setup.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Setup/Company"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CompanyRow))]
    public class CompanyController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Setup/Company/CompanyIndex.cshtml");
        }
    }
}