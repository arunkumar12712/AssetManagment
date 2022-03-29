
namespace AssetManagement.AddAnAsset.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("AddAnAsset.CheckOut")]
    [BasedOnRow(typeof(Entities.CheckOutRow), CheckNames = true)]
    public class CheckOutColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int32 CheckOutId { get; set; }
        public DateTime CheckOutDate { get; set; }
        public Int32 CheckOutTo { get; set; }
        public String EmployeeEmployeeName { get; set; }
        public Boolean NoDueDate { get; set; }
        public DateTime DueDate { get; set; }
        public String SiteSiteName { get; set; }
        public String Location { get; set; }
        public String Department { get; set; }
        [EditLink]
        public String Notes { get; set; }
        public Boolean SendMail { get; set; }
        public String Email { get; set; }
        public String AssetDescription { get; set; }
    }
}