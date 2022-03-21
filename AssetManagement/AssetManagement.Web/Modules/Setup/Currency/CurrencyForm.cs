
namespace AssetManagement.Setup.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Setup.Currency")]
    [BasedOnRow(typeof(Entities.CurrencyRow), CheckNames = true)]
    public class CurrencyForm
    {
        public String CurrencyName { get; set; }
    }
}