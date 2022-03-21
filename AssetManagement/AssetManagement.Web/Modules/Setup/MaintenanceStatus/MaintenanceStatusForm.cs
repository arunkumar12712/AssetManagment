
namespace AssetManagement.Setup.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Setup.MaintenanceStatus")]
    [BasedOnRow(typeof(Entities.MaintenanceStatusRow), CheckNames = true)]
    public class MaintenanceStatusForm
    {
        public String MaintenanceStatus { get; set; }
    }
}