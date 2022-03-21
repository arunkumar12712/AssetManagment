
namespace AssetManagement.Setup.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Setup.Brand")]
    [BasedOnRow(typeof(Entities.BrandRow), CheckNames = true)]
    public class BrandColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int32 BrandId { get; set; }
        [EditLink]
        public String BrandName { get; set; }
    }
}