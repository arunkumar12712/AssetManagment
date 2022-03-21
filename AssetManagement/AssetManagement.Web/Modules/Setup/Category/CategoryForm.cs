
namespace AssetManagement.Setup.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Setup.Category")]
    [BasedOnRow(typeof(Entities.CategoryRow), CheckNames = true)]
    public class CategoryForm
    {
        public String Category { get; set; }
    }
}