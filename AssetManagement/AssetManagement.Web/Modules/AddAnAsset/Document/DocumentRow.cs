
namespace AssetManagement.AddAnAsset.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("AddAnAsset"), TableName("[dbo].[Document]")]
    [DisplayName("Document"), InstanceName("Document")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class DocumentRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Document"), Size(200), NotNull,ImageUploadEditor(FilenameFormat = "AssetDetails/Document/~")]
        public String Document
        {
            get { return Fields.Document[this]; }
            set { Fields.Document[this] = value; }
        }

        [DisplayName("Description"), NotNull]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
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
            get { return Fields.Document; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DocumentRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Document;
            public StringField Description;
            public Int32Field AssetId;
        }
    }
}
