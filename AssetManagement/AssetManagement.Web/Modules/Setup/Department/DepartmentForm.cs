
namespace AssetManagement.Setup.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Setup.Department")]
    [BasedOnRow(typeof(Entities.DepartmentRow), CheckNames = true)]
    public class DepartmentForm
    {
        public String Department { get; set; }
    }
}