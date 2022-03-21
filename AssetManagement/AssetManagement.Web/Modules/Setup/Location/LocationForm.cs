
namespace AssetManagement.Setup.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Setup.Location")]
    [BasedOnRow(typeof(Entities.LocationRow), CheckNames = true)]
    public class LocationForm
    {
        public Int32 SiteId { get; set; }
        public String Location { get; set; }
    }
}