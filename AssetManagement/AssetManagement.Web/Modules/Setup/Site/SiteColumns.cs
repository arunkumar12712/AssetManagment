
namespace AssetManagement.Setup.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Setup.Site")]
    [BasedOnRow(typeof(Entities.SiteRow), CheckNames = true)]
    public class SiteColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int32 SiteId { get; set; }
        [EditLink]
        public String SiteName { get; set; }
        public String Description { get; set; }
        public String Address { get; set; }
        public String Suite { get; set; }
        public String City { get; set; }
        public String StateStateName { get; set; }
    }
}