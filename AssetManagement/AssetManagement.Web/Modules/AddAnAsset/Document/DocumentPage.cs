
namespace AssetManagement.AddAnAsset.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("AddAnAsset/Document"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DocumentRow))]
    public class DocumentController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/AddAnAsset/Document/DocumentIndex.cshtml");
        }
    }
}