
namespace AssetManagement.Setup.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Setup"), TableName("[dbo].[Brand]")]
    [DisplayName("Brand"), InstanceName("Brand")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript (Permission ="*")]
    public sealed class BrandRow : Row, IIdRow, INameRow
    {
        [DisplayName("Brand Id"), Identity]
        public Int32? BrandId
        {
            get { return Fields.BrandId[this]; }
            set { Fields.BrandId[this] = value; }
        }

        [DisplayName("Brand Name"), Size(200), QuickSearch]
        public String BrandName
        {
            get { return Fields.BrandName[this]; }
            set { Fields.BrandName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.BrandId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BrandName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BrandRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field BrandId;
            public StringField BrandName;
        }
    }
}
