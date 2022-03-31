
namespace AssetManagement.AddAnAsset.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("AddAnAsset.BrokenAsset")]
    [BasedOnRow(typeof(Entities.BrokenAssetRow), CheckNames = true)]
    public class BrokenAssetColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int32 BrokenId { get; set; }
        public DateTime DateBroken { get; set; }
        [EditLink]
        public String Notes { get; set; }
        public String AssetDescription { get; set; }
    }
}