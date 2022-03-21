
namespace AssetManagement.Setup.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Setup.Company")]
    [BasedOnRow(typeof(Entities.CompanyRow), CheckNames = true)]
    public class CompanyColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int32 CompanyId { get; set; }
        [EditLink]
        public String CompanyName { get; set; }
        public String CountryCountryName { get; set; }
        public String Address { get; set; }
        public String Suite { get; set; }
        public String City { get; set; }
        public String StateStateName { get; set; }
        public String PostalCode { get; set; }
    }
}