
namespace AssetManagement.AddAnAsset.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("AddAnAsset.DisposeAsset")]
    [BasedOnRow(typeof(Entities.DisposeAssetRow), CheckNames = true)]
    public class DisposeAssetForm
    {
        public DateTime DateDisposed { get; set; }
        public String DisposeTo { get; set; }
        [TextAreaEditor(Rows = 4)]
        public String Notes { get; set; }
        public Int32 AssetId { get; set; }
    }
}