
namespace AssetManagement.AddAnAsset.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("AddAnAsset.AssetMaintenance")]
    [BasedOnRow(typeof(Entities.AssetMaintenanceRow), CheckNames = true)]
    public class AssetMaintenanceColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int32 AssetMaintenanceId { get; set; }
        [EditLink]
        public String Title { get; set; }
        public String Details { get; set; }
        public DateTime DueDate { get; set; }
        public String MaintenanceBy { get; set; }
        public String MaintenanceStatus { get; set; }
        [Width(150)]
        public DateTime DateCompleted { get; set; }
        [Hidden]
        public Int32 AssetId { get; set; }
    }
}