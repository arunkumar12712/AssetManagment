
namespace AssetManagement.AddAnAsset.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("AddAnAsset.Lease")]
    [BasedOnRow(typeof(Entities.LeaseRow), CheckNames = true)]
    public class LeaseForm
    {
        public DateTime LeaseBegins { get; set; }
        public Int32 CustomerId { get; set; }
        public DateTime LeaseExpires { get; set; }
        [TextAreaEditor(Rows = 5)]
        public String Notes { get; set; }
        public Boolean SendEmail { get; set; }
        public String Email { get; set; }
        public Int32 AssetId { get; set; }
    }
}