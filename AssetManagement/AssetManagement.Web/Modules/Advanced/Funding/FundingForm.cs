
namespace AssetManagement.Advanced.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Advanced.Funding")]
    [BasedOnRow(typeof(Entities.FundingRow), CheckNames = true)]
    public class FundingForm
    {
        public String Name { get; set; }
        [TextAreaEditor(Rows = 4)]
        public String Description { get; set; }
        public Decimal Amount { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public Boolean IsActive { get; set; }
        [TextAreaEditor(Rows = 5)]
        public String Notes { get; set; }
    }
}