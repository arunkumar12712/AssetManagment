
namespace AssetManagement.Setup.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Setup.State")]
    [BasedOnRow(typeof(Entities.StateRow), CheckNames = true)]
    public class StateForm
    {
        public String StateName { get; set; }
    }
}