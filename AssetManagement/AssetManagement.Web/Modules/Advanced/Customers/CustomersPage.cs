
namespace AssetManagement.Advanced.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Advanced/Customers"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CustomersRow))]
    public class CustomersController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Advanced/Customers/CustomersIndex.cshtml");
        }
    }
}