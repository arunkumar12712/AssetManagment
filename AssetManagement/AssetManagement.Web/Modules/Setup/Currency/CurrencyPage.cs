
namespace AssetManagement.Setup.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Setup/Currency"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CurrencyRow))]
    public class CurrencyController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Setup/Currency/CurrencyIndex.cshtml");
        }
    }
}