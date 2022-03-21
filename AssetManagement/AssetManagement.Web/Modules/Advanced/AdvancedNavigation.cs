using Serenity.Navigation;
using MyPages = AssetManagement.Advanced.Pages;

[assembly: NavigationMenu(int.MaxValue, "Advanced",icon: "fa-bookmark")]
[assembly: NavigationLink(int.MaxValue, "Advanced/Employee", typeof(MyPages.EmployeeController), icon: "fa-street-view")]
[assembly: NavigationLink(int.MaxValue, "Advanced/Customers", typeof(MyPages.CustomersController), icon: "fa-address-card")]
[assembly: NavigationLink(int.MaxValue, "Advanced/Funding", typeof(MyPages.FundingController), icon: "fa-filter")]