
namespace AssetManagement.AddAnAsset.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("AddAnAsset.DonateAsset")]
    [BasedOnRow(typeof(Entities.DonateAssetRow), CheckNames = true)]
    public class DonateAssetColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int32 DonateId { get; set; }
        public DateTime DateDonated { get; set; }
        [EditLink]
        public String DonateTo { get; set; }
        public Decimal DonateValue { get; set; }
        public String Deductible { get; set; }
        public String Notes { get; set; }
        public String AssetDescription { get; set; }
    }
}