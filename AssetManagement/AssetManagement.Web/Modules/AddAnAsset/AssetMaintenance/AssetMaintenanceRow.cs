
namespace AssetManagement.AddAnAsset.Entities
{
    using AssetManagement.Setup.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("AddAnAsset"), TableName("[dbo].[AssetMaintenance]")]
    [DisplayName("Asset Maintenance"), InstanceName("Asset Maintenance")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AssetMaintenanceRow : Row, IIdRow, INameRow
    {
        [DisplayName("Asset Maintenance Id"), Identity]
        public Int32? AssetMaintenanceId
        {
            get { return Fields.AssetMaintenanceId[this]; }
            set { Fields.AssetMaintenanceId[this] = value; }
        }

        [DisplayName("Title"), NotNull, QuickSearch]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Details")]
        public String Details
        {
            get { return Fields.Details[this]; }
            set { Fields.Details[this] = value; }
        }

        [DisplayName("Due Date")]
        public DateTime? DueDate
        {
            get { return Fields.DueDate[this]; }
            set { Fields.DueDate[this] = value; }
        }

        [DisplayName("Maintenance By"), Size(200)]
        public String MaintenanceBy
        {
            get { return Fields.MaintenanceBy[this]; }
            set { Fields.MaintenanceBy[this] = value; }
        }

        [DisplayName("MaintenanceStatus"), ForeignKey("[dbo].[MaintenanceStatus]", "Id"), LeftJoin("j"), TextualField("MaintenanceStatus")]
        [LookupEditor(typeof(MaintenanceStatusRow))]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Date Completed")]
        public DateTime? DateCompleted
        {
            get { return Fields.DateCompleted[this]; }
            set { Fields.DateCompleted[this] = value; }
        }

        [DisplayName(" Maintenance Status"), Expression("j.[MaintenanceStatus]")]
        public String MaintenanceStatus
        {
            get { return Fields.MaintenanceStatus[this]; }
            set { Fields.MaintenanceStatus[this] = value; }
        }

        [DisplayName("AssetId"), ForeignKey("[dbo].[AssetDetails]", "AssetId"), LeftJoin("jAssetDetails")]
        public Int32? AssetId
        {
            get { return Fields.AssetId[this]; }
            set { Fields.AssetId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AssetMaintenanceId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Title; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AssetMaintenanceRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AssetMaintenanceId;
            public StringField Title;
            public StringField Details;
            public DateTimeField DueDate;
            public StringField MaintenanceBy;
            public Int32Field Id;
            public DateTimeField DateCompleted;

            public StringField MaintenanceStatus;
            public Int32Field AssetId;
        }
    }
}
