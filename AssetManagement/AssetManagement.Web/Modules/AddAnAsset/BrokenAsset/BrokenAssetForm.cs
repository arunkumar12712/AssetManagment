
namespace AssetManagement.AddAnAsset.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("AddAnAsset.BrokenAsset")]
    [BasedOnRow(typeof(Entities.BrokenAssetRow), CheckNames = true)]
    public class BrokenAssetForm
    {
        public DateTime DateBroken { get; set; }
        [TextAreaEditor(Rows = 4)]
        public String Notes { get; set; }
        public Int32 AssetId { get; set; }
    }
}