using Serenity.Navigation;
using MyPages = AssetManagement.Setup.Pages;

[assembly: NavigationMenu(int.MaxValue, "Setup",icon: "fa-desktop")]
[assembly: NavigationLink(int.MaxValue, "Setup/Country", typeof(MyPages.CountryController),icon: "fa-flag")]
[assembly: NavigationLink(int.MaxValue, "Setup/Currency", typeof(MyPages.CurrencyController),icon: "fa-inr ")]
[assembly: NavigationLink(int.MaxValue, "Setup/State", typeof(MyPages.StateController), icon: "fa-delicious ")]
[assembly: NavigationLink(int.MaxValue, "Setup/Site", typeof(MyPages.SiteController), icon: "fa-sitemap")]
[assembly: NavigationLink(int.MaxValue, "Setup/Location", typeof(MyPages.LocationController), icon: "fa-map-marker")]
[assembly: NavigationLink(int.MaxValue, "Setup/Category", typeof(MyPages.CategoryController), icon: "fa-building")]
[assembly: NavigationLink(int.MaxValue, "Setup/Department", typeof(MyPages.DepartmentController), icon: "fa-globe")]
[assembly: NavigationLink(int.MaxValue, "Setup/Company", typeof(MyPages.CompanyController), icon: "fa-industry ")]
[assembly: NavigationLink(int.MaxValue, "Setup/Brand", typeof(MyPages.BrandController), icon: "fa-superpowers")]
[assembly: NavigationLink(int.MaxValue, "Setup/Maintenance Status", typeof(MyPages.MaintenanceStatusController), icon: "fa-magnet")]