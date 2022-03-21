
namespace AssetManagement.Setup.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Setup.Brand")]
    [BasedOnRow(typeof(Entities.BrandRow), CheckNames = true)]
    public class BrandForm
    {
        public String BrandName { get; set; }
    }
}