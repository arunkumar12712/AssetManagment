
namespace AssetManagement.Setup.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Setup.Currency")]
    [BasedOnRow(typeof(Entities.CurrencyRow), CheckNames = true)]
    public class CurrencyColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int32 CurrencyId { get; set; }
        [EditLink]
        public String CurrencyName { get; set; }
    }
}