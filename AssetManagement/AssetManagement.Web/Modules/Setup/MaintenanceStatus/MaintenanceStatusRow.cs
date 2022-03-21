
namespace AssetManagement.Setup.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Setup"), TableName("[dbo].[MaintenanceStatus]")]
    [DisplayName("Maintenance Status"), InstanceName("Maintenance Status")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript(Permission = "*")]
    public sealed class MaintenanceStatusRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Maintenance Status"), Size(200), QuickSearch]
        public String MaintenanceStatus
        {
            get { return Fields.MaintenanceStatus[this]; }
            set { Fields.MaintenanceStatus[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.MaintenanceStatus; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MaintenanceStatusRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField MaintenanceStatus;
        }
    }
}
