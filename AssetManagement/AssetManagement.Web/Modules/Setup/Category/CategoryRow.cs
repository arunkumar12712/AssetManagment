
namespace AssetManagement.Setup.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Setup"), TableName("[dbo].[Category]")]
    [DisplayName("Category"), InstanceName("Category")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript(Permission ="*")]
    public sealed class CategoryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Category Id"), Identity]
        public Int32? CategoryId
        {
            get { return Fields.CategoryId[this]; }
            set { Fields.CategoryId[this] = value; }
        }

        [DisplayName("Category"), Size(200), QuickSearch]
        public String Category
        {
            get { return Fields.Category[this]; }
            set { Fields.Category[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CategoryId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Category; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CategoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CategoryId;
            public StringField Category;
        }
    }
}
