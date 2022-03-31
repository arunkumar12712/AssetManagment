
namespace AssetManagement.AddAnAsset.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("AddAnAsset.RepairAsset")]
    [BasedOnRow(typeof(Entities.RepairAssetRow), CheckNames = true)]
    public class RepairAssetForm
    {
        public DateTime ScheduleDate { get; set; }
        public String AssignedTo { get; set; }
        public DateTime DateCompleted { get; set; }
        public Decimal RepairCost { get; set; }
        [TextAreaEditor(Rows = 4)]
        public String Notes { get; set; }
        public Int32 AssetId { get; set; }
    }
}