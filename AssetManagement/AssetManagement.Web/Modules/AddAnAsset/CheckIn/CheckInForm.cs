
namespace AssetManagement.AddAnAsset.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("AddAnAsset.CheckIn")]
    [BasedOnRow(typeof(Entities.CheckInRow), CheckNames = true)]
    public class CheckInForm
    {
        public DateTime DueDate { get; set; }
        public DateTime ReturnDate { get; set; }
        public Int32 SiteId { get; set; }
        public Int32 LocationId { get; set; }
        public Int32 DepartmentId { get; set; }
        [TextAreaEditor(Rows = 4)]
        public String Notes { get; set; }
        public Boolean SendMail { get; set; }
        [Placeholder("Enter Email Address")]
        public String Email { get; set; }
        [Hidden]
        public Int32 AssetId { get; set; }
    }
}