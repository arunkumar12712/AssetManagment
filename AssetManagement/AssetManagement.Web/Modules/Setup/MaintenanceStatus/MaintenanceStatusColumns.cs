
namespace AssetManagement.Setup.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Setup.MaintenanceStatus")]
    [BasedOnRow(typeof(Entities.MaintenanceStatusRow), CheckNames = true)]
    public class MaintenanceStatusColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int32 Id { get; set; }
        [EditLink]
        public String MaintenanceStatus { get; set; }
    }
}