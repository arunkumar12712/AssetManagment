using Serenity.Navigation;
using MyPages = AssetManagement.AddAnAsset.Pages;

[assembly: NavigationMenu(int.MaxValue, "AddAnAsset",icon: "fa-assistive-listening-systems")]
[assembly: NavigationLink(int.MaxValue, "AddAnAsset/Asset Details", typeof(MyPages.AssetDetailsController), icon: "fa-asterisk")]
[assembly: NavigationLink(int.MaxValue, "AddAnAsset/Document", typeof(MyPages.DocumentController), icon: "fa-file")]
[assembly: NavigationLink(int.MaxValue, "AddAnAsset/Asset Warranty", typeof(MyPages.AssetWarrantyController), icon: "fa-google-wallet")]
[assembly: NavigationLink(int.MaxValue, "AddAnAsset/Asset Maintenance", typeof(MyPages.AssetMaintenanceController), icon: "fa-coffee")]
[assembly: NavigationLink(int.MaxValue, "AddAnAsset/Check In", typeof(MyPages.CheckInController), icon: "fa-check-circle")]
[assembly: NavigationLink(int.MaxValue, "AddAnAsset/Check Out", typeof(MyPages.CheckOutController), icon: "fa-check-square-o")]
[assembly: NavigationLink(int.MaxValue, "AddAnAsset/Lease", typeof(MyPages.LeaseController), icon: "fa-align-justify")]
[assembly: NavigationLink(int.MaxValue, "AddAnAsset/Repair Asset", typeof(MyPages.RepairAssetController), icon: "fa-assistive-listening-systems")]
[assembly: NavigationLink(int.MaxValue, "AddAnAsset/Broken Asset", typeof(MyPages.BrokenAssetController), icon: "fa-chain-broken")]
[assembly: NavigationLink(int.MaxValue, "AddAnAsset/Dispose Asset", typeof(MyPages.DisposeAssetController), icon: "fa-arrows")]
[assembly: NavigationLink(int.MaxValue, "AddAnAsset/Donate Asset", typeof(MyPages.DonateAssetController), icon: "fa-cogs")]
[assembly: NavigationLink(int.MaxValue, "AddAnAsset/Sell Asset", typeof(MyPages.SellAssetController), icon: "fa-filter")]