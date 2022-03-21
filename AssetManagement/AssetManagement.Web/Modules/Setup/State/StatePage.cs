
namespace AssetManagement.Setup.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Setup/State"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.StateRow))]
    public class StateController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Setup/State/StateIndex.cshtml");
        }
    }
}