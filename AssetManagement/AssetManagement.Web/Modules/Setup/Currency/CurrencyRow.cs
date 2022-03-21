
namespace AssetManagement.Setup.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Setup"), TableName("[dbo].[Currency]")]
    [DisplayName("Currency"), InstanceName("Currency")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CurrencyRow : Row, IIdRow, INameRow
    {
        [DisplayName("Currency Id"), Identity]
        public Int32? CurrencyId
        {
            get { return Fields.CurrencyId[this]; }
            set { Fields.CurrencyId[this] = value; }
        }

        [DisplayName("Currency Name"), Size(100), QuickSearch]
        public String CurrencyName
        {
            get { return Fields.CurrencyName[this]; }
            set { Fields.CurrencyName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CurrencyId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CurrencyName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CurrencyRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CurrencyId;
            public StringField CurrencyName;
        }
    }
}
