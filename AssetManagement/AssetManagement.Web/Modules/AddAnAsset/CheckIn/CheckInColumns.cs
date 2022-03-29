
namespace AssetManagement.AddAnAsset.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("AddAnAsset.CheckIn")]
    [BasedOnRow(typeof(Entities.CheckInRow), CheckNames = true)]
    public class CheckInColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int32 CheckId { get; set; }
        public DateTime DueDate { get; set; }
        public DateTime ReturnDate { get; set; }
        public String SiteSiteName { get; set; }
        public String Location { get; set; }
        public String Department { get; set; }
        [EditLink]
        public String Notes { get; set; }
        public Boolean SendMail { get; set; }
        public String Email { get; set; }
        public Int32 AssetId { get; set; }                                  
        public String AssetDescription { get; set; }
    }
}