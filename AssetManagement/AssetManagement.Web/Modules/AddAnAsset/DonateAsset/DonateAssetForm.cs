
namespace AssetManagement.AddAnAsset.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("AddAnAsset.DonateAsset")]
    [BasedOnRow(typeof(Entities.DonateAssetRow), CheckNames = true)]
    public class DonateAssetForm
    {
        public DateTime DateDonated { get; set; }
        public String DonateTo { get; set; }
        public Decimal DonateValue { get; set; }
        public String Deductible { get; set; }
        [TextAreaEditor(Rows = 4)]
        public String Notes { get; set; }
        public Int32 AssetId { get; set; }
    }
}