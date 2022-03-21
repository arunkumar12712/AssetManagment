
namespace AssetManagement.Setup.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Setup.State")]
    [BasedOnRow(typeof(Entities.StateRow), CheckNames = true)]
    public class StateColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int32 StateId { get; set; }
        [EditLink]
        public String StateName { get; set; }
    }
}