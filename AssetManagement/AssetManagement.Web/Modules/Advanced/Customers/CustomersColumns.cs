
namespace AssetManagement.Advanced.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Advanced.Customers")]
    [BasedOnRow(typeof(Entities.CustomersRow), CheckNames = true)]
    public class CustomersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int32 CustomerId { get; set; }
        [EditLink]
        public String CustomerName { get; set; }
        public String Company { get; set; }
        public String Address { get; set; }
        public String City { get; set; }
        public String StateName { get; set; }
        public String Zip { get; set; }
        public String CountryCountryName { get; set; }
        public String Phone { get; set; }
        public String Email { get; set; }
        public String Notes { get; set; }
    }
}