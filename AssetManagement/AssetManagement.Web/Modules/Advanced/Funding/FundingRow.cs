
namespace AssetManagement.Advanced.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Advanced"), TableName("[dbo].[Funding]")]
    [DisplayName("Funding"), InstanceName("Funding")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class FundingRow : Row, IIdRow, INameRow
    {
        [DisplayName("Funding Id"), Identity]
        public Int32? FundingId
        {
            get { return Fields.FundingId[this]; }
            set { Fields.FundingId[this] = value; }
        }

        [DisplayName("Name"), Size(200), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Description")]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Amount"), Size(19), Scale(4)]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }

        [DisplayName("Start Date")]
        public DateTime? StartDate
        {
            get { return Fields.StartDate[this]; }
            set { Fields.StartDate[this] = value; }
        }

        [DisplayName("End Date")]
        public DateTime? EndDate
        {
            get { return Fields.EndDate[this]; }
            set { Fields.EndDate[this] = value; }
        }

        [DisplayName("Is Active")]
        public Boolean? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        [DisplayName("Notes")]
        public String Notes
        {
            get { return Fields.Notes[this]; }
            set { Fields.Notes[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.FundingId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FundingRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field FundingId;
            public StringField Name;
            public StringField Description;
            public DecimalField Amount;
            public DateTimeField StartDate;
            public DateTimeField EndDate;
            public BooleanField IsActive;
            public StringField Notes;
        }
    }
}
