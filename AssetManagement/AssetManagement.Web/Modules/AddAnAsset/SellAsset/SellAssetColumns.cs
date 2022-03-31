
namespace AssetManagement.AddAnAsset.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("AddAnAsset.SellAsset")]
    [BasedOnRow(typeof(Entities.SellAssetRow), CheckNames = true)]
    public class SellAssetColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int32 SellId { get; set; }
        public DateTime SaleDate { get; set; }
        [EditLink]
        public String SoldTo { get; set; }
        public Decimal SaleAmount { get; set; }
        public String Notes { get; set; }
        public String AssetDescription { get; set; }
    }
}