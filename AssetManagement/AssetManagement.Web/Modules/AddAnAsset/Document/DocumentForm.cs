
namespace AssetManagement.AddAnAsset.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("AddAnAsset.Document")]
    [BasedOnRow(typeof(Entities.DocumentRow), CheckNames = true)]
    public class DocumentForm
    {
        [Category ("Document")]
        public String Document { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
        [Hidden]
        public Int32 AssetId { get; set; }
    }
}