
namespace AssetManagement.Advanced.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Advanced.Funding")]
    [BasedOnRow(typeof(Entities.FundingRow), CheckNames = true)]
    public class FundingColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int32 FundingId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Description { get; set; }
        public Decimal Amount { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        [Hidden]
        public Boolean IsActive { get; set; }
        public String Notes { get; set; }
    }
}