
namespace AssetManagement.Setup.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Setup.Company")]
    [BasedOnRow(typeof(Entities.CompanyRow), CheckNames = true)]
    public class CompanyForm
    {
        public String CompanyName { get; set; }
        public Int32 CountryId { get; set; }
        public String Address { get; set; }
        public String Suite { get; set; }
        public String City { get; set; }
        public Int32 StateId { get; set; }
        public String PostalCode { get; set; }
    }
}