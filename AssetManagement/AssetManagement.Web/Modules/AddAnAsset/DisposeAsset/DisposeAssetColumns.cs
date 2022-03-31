
namespace AssetManagement.AddAnAsset.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("AddAnAsset.DisposeAsset")]
    [BasedOnRow(typeof(Entities.DisposeAssetRow), CheckNames = true)]
    public class DisposeAssetColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int32 DisposeId { get; set; }
        public DateTime DateDisposed { get; set; }
        [EditLink]
        public String DisposeTo { get; set; }
        public String Notes { get; set; }
        public String AssetDescription { get; set; }
    }
}