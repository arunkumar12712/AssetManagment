
namespace AssetManagement.AddAnAsset.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("AddAnAsset.AssetMaintenance")]
    [BasedOnRow(typeof(Entities.AssetMaintenanceRow), CheckNames = true)]
    public class AssetMaintenanceForm
    {
        [TextAreaEditor(Rows = 3)]
        public String Title { get; set; }
        [TextAreaEditor (Rows =5)]
        public String Details { get; set; }
        public DateTime DueDate { get; set; }
        [TextAreaEditor(Rows =2)]
        public String MaintenanceBy { get; set; }
        public Int32 Id { get; set; }
        public DateTime DateCompleted { get; set; }
        [Hidden]
        public Int32 AssetId { get; set; }
    }
}