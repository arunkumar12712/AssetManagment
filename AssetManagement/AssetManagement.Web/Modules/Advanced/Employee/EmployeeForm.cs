
namespace AssetManagement.Advanced.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Advanced.Employee")]
    [BasedOnRow(typeof(Entities.EmployeeRow), CheckNames = true)]
    public class EmployeeForm
    {
        public String EmployeeName { get; set; }
        [TextAreaEditor(Rows = 4 )]
        public String Title { get; set; }
        public String Phone { get; set; }
        public String Email { get; set; }
        public Int32 SiteId { get; set; }
        public Int32 LocationId { get; set; }
        public Int32 DepartmentId { get; set; }
        [TextAreaEditor(Rows = 5)]
        public String Note { get; set; }
    }
}