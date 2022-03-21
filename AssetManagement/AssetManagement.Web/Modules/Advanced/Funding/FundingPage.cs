
namespace AssetManagement.Advanced.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Advanced/Funding"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.FundingRow))]
    public class FundingController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Advanced/Funding/FundingIndex.cshtml");
        }
    }
}