
namespace AssetManagement.AddAnAsset.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("AddAnAsset.RepairAsset")]
    [BasedOnRow(typeof(Entities.RepairAssetRow), CheckNames = true)]
    public class RepairAssetColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int32 Id { get; set; }
        public DateTime ScheduleDate { get; set; }
        [EditLink]
        public String AssignedTo { get; set; }
        public DateTime DateCompleted { get; set; }
        public Decimal RepairCost { get; set; }
        public String Notes { get; set; }
        public String AssetDescription { get; set; }
    }
}