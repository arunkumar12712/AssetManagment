
namespace AssetManagement.AddAnAsset.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("AddAnAsset.CheckOut")]
    [BasedOnRow(typeof(Entities.CheckOutRow), CheckNames = true)]
    public class CheckOutForm
    {
        public DateTime CheckOutDate { get; set; }
        public Int32 CheckOutTo { get; set; }
        public Int32 EmployeeId { get; set; }
        public Boolean NoDueDate { get; set; }
        public DateTime DueDate { get; set; }
        public Int32 SiteId { get; set; }
        public Int32 LocationId { get; set; }
        public Int32 DepartmentId { get; set; }
        [TextAreaEditor(Rows = 5)]
        public String Notes { get; set; }
        public Boolean SendMail { get; set; }
        [Placeholder("Enter Email Address")]
        
        public String Email { get; set; }
        [Hidden]
        public Int32 AssetId { get; set; }
    }
}