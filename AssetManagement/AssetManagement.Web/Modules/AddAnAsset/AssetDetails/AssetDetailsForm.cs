
namespace AssetManagement.AddAnAsset.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using AssetManagement.AddAnAsset;

    [FormScript("AddAnAsset.AssetDetails")]
    [BasedOnRow(typeof(Entities.AssetDetailsRow), CheckNames = true)]
    public class AssetDetailsForm
    {
        [Category ("Asset Details")]
        [TextAreaEditor(Rows =2)]
        public String Description { get; set; }
        [HalfWidth]
        public Int32 AssetTagId { get; set; }
        [HalfWidth]
        public String Purchasedfrom { get; set; }
        [HalfWidth]
        public DateTime PurchaseDate { get; set; }
        [HalfWidth]
        public Int32 BrandId { get; set; }
        [HalfWidth]
        public Decimal Cost { get; set; }
        [HalfWidth]
        public String Model { get; set; }
        [HalfWidth]
        public String Color { get; set; }
        [Category("Site, Location, Category and Department")]
        [HalfWidth]
        public Int32 SiteId { get; set; }
        [HalfWidth]
        public Int32 CategoryId { get; set; }
        [HalfWidth]
        public Int32 LocationId { get; set; }
        [HalfWidth]
        public Int32 DepartmentId { get; set; }
        [Category("Asset Photo")]
        public String AssetPhoto { get; set; }
        [HalfWidth]
        public Int32 DepreciableAsset { get; set; }
        [HalfWidth]
        public Decimal DepreciableCost { get; set; }
        [HalfWidth]
        public Int32 AssetLife { get; set; }
        [HalfWidth]
        public Decimal SalvageValue { get; set; }
        [HalfWidth]
        public String DepreciationMethod { get; set; }
        [HalfWidth]
        public DateTime DateAcquired { get; set; }
    }
}