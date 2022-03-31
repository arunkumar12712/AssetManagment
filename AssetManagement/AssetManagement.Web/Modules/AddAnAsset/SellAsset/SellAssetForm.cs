
namespace AssetManagement.AddAnAsset.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("AddAnAsset.SellAsset")]
    [BasedOnRow(typeof(Entities.SellAssetRow), CheckNames = true)]
    public class SellAssetForm
    {
        public DateTime SaleDate { get; set; }
        public String SoldTo { get; set; }
        public Decimal SaleAmount { get; set; }
        [TextAreaEditor(Rows = 4)]
        public String Notes { get; set; }
        public Int32 AssetId { get; set; }
    }
}