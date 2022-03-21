
namespace AssetManagement.Setup.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Setup"), TableName("[dbo].[Department]")]
    [DisplayName("Department"), InstanceName("Department")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript(Permission = "*")]
    public sealed class DepartmentRow : Row, IIdRow, INameRow
    {
        [DisplayName("Department Id"), Identity]
        public Int32? DepartmentId
        {
            get { return Fields.DepartmentId[this]; }
            set { Fields.DepartmentId[this] = value; }
        }

        [DisplayName("Department"), Size(200), QuickSearch]
        public String Department
        {
            get { return Fields.Department[this]; }
            set { Fields.Department[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DepartmentId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Department; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DepartmentRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DepartmentId;
            public StringField Department;
        }
    }
}
