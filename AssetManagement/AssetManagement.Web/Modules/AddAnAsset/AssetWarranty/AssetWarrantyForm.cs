
namespace AssetManagement.AddAnAsset.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("AddAnAsset.AssetWarranty")]
    [BasedOnRow(typeof(Entities.AssetWarrantyRow), CheckNames = true)]
    public class AssetWarrantyForm
    {
        public Int32 Length { get; set; }
        public DateTime ExpirationDate { get; set; }
        [TextAreaEditor(Rows = 4)]
        public String Notes { get; set; }
        [Hidden]
        public Int32 AssetId { get; set; }
    }
}