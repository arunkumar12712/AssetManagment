using Serenity.Navigation;
using MyPages = AssetManagement.AddAnAsset.Pages;

[assembly: NavigationMenu(int.MaxValue, "AddAnAsset",icon: "fa-assistive-listening-systems")]
[assembly: NavigationLink(int.MaxValue, "AddAnAsset/Asset Details", typeof(MyPages.AssetDetailsController), icon: "fa-asterisk")]
[assembly: NavigationLink(int.MaxValue, "AddAnAsset/Document", typeof(MyPages.DocumentController), icon: "fa-file")]
[assembly: NavigationLink(int.MaxValue, "AddAnAsset/Asset Warranty", typeof(MyPages.AssetWarrantyController), icon: "fa-google-wallet")]
[assembly: NavigationLink(int.MaxValue, "AddAnAsset/Asset Maintenance", typeof(MyPages.AssetMaintenanceController), icon: "fa-coffee")]
[assembly: NavigationLink(int.MaxValue, "AddAnAsset/Check In", typeof(MyPages.CheckInController), icon: "fa-check-circle")]
[assembly: NavigationLink(int.MaxValue, "AddAnAsset/Check Out", typeof(MyPages.CheckOutController), icon: "fa-check-square-o")]