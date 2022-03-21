
namespace AssetManagement.AddAnAsset.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("AddAnAsset.Document")]
    [BasedOnRow(typeof(Entities.DocumentRow), CheckNames = true)]
    public class DocumentColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int32 Id { get; set; }
        [EditLink]
        public String Document { get; set; }
        public String Description { get; set; }
        [Hidden]
        public Int32 AssetId { get; set; }
    }
}