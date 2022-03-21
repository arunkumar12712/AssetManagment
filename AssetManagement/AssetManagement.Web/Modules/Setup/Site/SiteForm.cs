
namespace AssetManagement.Setup.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Setup.Site")]
    [BasedOnRow(typeof(Entities.SiteRow), CheckNames = true)]
    public class SiteForm
    {
        public String SiteName { get; set; }
        [TextAreaEditor (Rows = 5)]
        public String Description { get; set; }
        [TextAreaEditor (Rows = 3)]
        public String Address { get; set; }
        public String Suite { get; set; }
        public String City { get; set; }
        public Int32 StateId { get; set; }
    }
}