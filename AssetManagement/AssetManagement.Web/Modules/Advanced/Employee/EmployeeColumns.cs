
namespace AssetManagement.Advanced.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Advanced.Employee")]
    [BasedOnRow(typeof(Entities.EmployeeRow), CheckNames = true)]
    public class EmployeeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int32 EmployeeId { get; set; }
        [EditLink]
        public String EmployeeName { get; set; }
        public String Title { get; set; }
        public String Phone { get; set; }
        public String Email { get; set; }
        public String SiteSiteName { get; set; }
        public String Location { get; set; }
        public String Department { get; set; }
        public String Note { get; set; }
    }
}