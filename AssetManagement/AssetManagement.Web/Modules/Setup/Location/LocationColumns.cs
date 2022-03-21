
namespace AssetManagement.Setup.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Setup.Location")]
    [BasedOnRow(typeof(Entities.LocationRow), CheckNames = true)]
    public class LocationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int32 LocationId { get; set; }
        public String SiteSiteName { get; set; }
        [EditLink]
        public String Location { get; set; }
    }
}