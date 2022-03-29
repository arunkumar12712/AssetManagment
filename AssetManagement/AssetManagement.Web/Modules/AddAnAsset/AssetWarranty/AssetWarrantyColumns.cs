
namespace AssetManagement.AddAnAsset.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("AddAnAsset.AssetWarranty")]
    [BasedOnRow(typeof(Entities.AssetWarrantyRow), CheckNames = true)]
    public class AssetWarrantyColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int32 Id { get; set; }
        public Int32 Length { get; set; }
        [Width(150)]
        public DateTime ExpirationDate { get; set; }
        [EditLink]
        public String Notes { get; set; }
        [Hidden]
        public Int32 AssetId { get; set; }
    }
}