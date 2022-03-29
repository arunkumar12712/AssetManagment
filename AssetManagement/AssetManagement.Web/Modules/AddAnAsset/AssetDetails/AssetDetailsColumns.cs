
namespace AssetManagement.AddAnAsset.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("AddAnAsset.AssetDetails")]
    [BasedOnRow(typeof(Entities.AssetDetailsRow), CheckNames = true)]
    public class AssetDetailsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int32 AssetId { get; set; }
        [EditLink]
        public String Description { get; set; }
        [Width(100)]
        public Int32 AssetTagId { get; set; }
        [Width(100)]
        public String Purchasedfrom { get; set; }
        [DisplayFormat("dd/MM/yyyy")]
        [Width(100)]
        public DateTime PurchaseDate { get; set; }

        public String BrandBrandName { get; set; }
        public Decimal Cost { get; set; }
        public String Model { get; set; }
        public String Color { get; set; }
        public String SiteSiteName { get; set; }
        public String Category { get; set; }
        public String Location { get; set; }
        public String Department { get; set; }
        [Hidden]
        public String AssetPhoto { get; set; }
        [Hidden]
        public Int32 DepreciableAsset { get; set; }
        [Width(150)]
        public Decimal DepreciableCost { get; set; }
        [Width(150)]
        public Int32 AssetLife { get; set; }
        [Width(100)]
        public Decimal SalvageValue { get; set; }
        public String DepreciationMethod { get; set; }
        [Width(100)]
        [DisplayFormat("dd/MM/yyyy")]
        public DateTime DateAcquired { get; set; }
        [Width(150)]
        [Serenity.ComponentModel.DisplayFormat("dd/MM/yyyy HH:mm:ss")]
        public DateTime OnCreated { get; set; }
        public String Createdby { get; set; }
       // public String Username { get; set; }
    }
}