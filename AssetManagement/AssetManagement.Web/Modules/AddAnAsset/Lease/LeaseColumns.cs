
namespace AssetManagement.AddAnAsset.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("AddAnAsset.Lease")]
    [BasedOnRow(typeof(Entities.LeaseRow), CheckNames = true)]
    public class LeaseColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int32 LeaseId { get; set; }

        public DateTime LeaseBegins { get; set; }
        [Width(200)]
        public String CustomerName { get; set; }
        [Width(200)]
        public DateTime LeaseExpires { get; set; }
        [Width(150)]
        [EditLink]
        public String Notes { get; set; }
        [Width(150)]
        public Boolean SendEmail { get; set; }
        public String Email { get; set; }   
        public String AssetDescription { get; set; }
    }
}