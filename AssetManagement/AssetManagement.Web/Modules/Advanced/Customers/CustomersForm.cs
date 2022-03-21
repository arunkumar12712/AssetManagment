
namespace AssetManagement.Advanced.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Advanced.Customers")]
    [BasedOnRow(typeof(Entities.CustomersRow), CheckNames = true)]
    public class CustomersForm
    {
        public String CustomerName { get; set; }
        public String Company { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Address { get; set; }
        public String City { get; set; }
        public Int32 StateId { get; set; }
        public String Zip { get; set; }
        public Int32 CountryId { get; set; }
        public String Phone { get; set; }
        public String Email { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Notes { get; set; }
    }
}