
namespace AssetManagement.Setup.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Setup.Department")]
    [BasedOnRow(typeof(Entities.DepartmentRow), CheckNames = true)]
    public class DepartmentColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int32 DepartmentId { get; set; }
        [EditLink]
        public String Department { get; set; }
    }
}