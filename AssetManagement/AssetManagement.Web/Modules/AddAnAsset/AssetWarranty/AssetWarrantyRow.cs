
namespace AssetManagement.AddAnAsset.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("AddAnAsset"), TableName("[dbo].[AssetWarranty]")]
    [DisplayName("Asset Warranty"), InstanceName("Asset Warranty")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AssetWarrantyRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Length")]
        public Int32? Length
        {
            get { return Fields.Length[this]; }
            set { Fields.Length[this] = value; }
        }

        [DisplayName("Expiration Date"), NotNull]
        public DateTime? ExpirationDate
        {
            get { return Fields.ExpirationDate[this]; }
            set { Fields.ExpirationDate[this] = value; }
        }

        [DisplayName("Notes"), QuickSearch]
        public String Notes
        {
            get { return Fields.Notes[this]; }
            set { Fields.Notes[this] = value; }
        }

        [DisplayName("AssetId"), ForeignKey("[dbo].[AssetDetails]", "AssetId"), LeftJoin("jAssetDetails")]
        public Int32? AssetId
        {
            get { return Fields.AssetId[this]; }
            set { Fields.AssetId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Notes; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AssetWarrantyRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field Length;
            public DateTimeField ExpirationDate;
            public StringField Notes;
            public Int32Field AssetId;
        }
    }
}
