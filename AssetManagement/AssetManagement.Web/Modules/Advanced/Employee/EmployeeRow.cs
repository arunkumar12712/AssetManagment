
namespace AssetManagement.Advanced.Entities
{
    using AssetManagement.Setup.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Advanced"), TableName("[dbo].[Employee]")]
    [DisplayName("Employee"), InstanceName("Employee")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript(Permission = "*")]
    public sealed class EmployeeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Employee Id"), Identity]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        [DisplayName("Employee Name"), Size(200), QuickSearch]
        public String EmployeeName
        {
            get { return Fields.EmployeeName[this]; }
            set { Fields.EmployeeName[this] = value; }
        }

        [DisplayName("Title"), Size(200),QuickSearch]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Phone")]
        public Int32? Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        [DisplayName("Email"), Size(200)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Site"), ForeignKey("[dbo].[Site]", "SiteId"), LeftJoin("jSite"), TextualField("SiteSiteName")]
        [LookupEditor(typeof(SiteRow))]
        public Int32? SiteId
        {
            get { return Fields.SiteId[this]; }
            set { Fields.SiteId[this] = value; }
        }

        [DisplayName("Location"), ForeignKey("[dbo].[Location]", "LocationId"), LeftJoin("jLocation"), TextualField("Location")]
        [LookupEditor(typeof(LocationRow))]
        public Int32? LocationId
        {
            get { return Fields.LocationId[this]; }
            set { Fields.LocationId[this] = value; }
        }

        [DisplayName("Department"), ForeignKey("[dbo].[Department]", "DepartmentId"), LeftJoin("jDepartment"), TextualField("Department")]
        [LookupEditor(typeof(DepartmentRow))]
        public Int32? DepartmentId
        {
            get { return Fields.DepartmentId[this]; }
            set { Fields.DepartmentId[this] = value; }
        }

        [DisplayName("Note")]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        [DisplayName("Site Name"), Expression("jSite.[SiteName]")]
        public String SiteSiteName
        {
            get { return Fields.SiteSiteName[this]; }
            set { Fields.SiteSiteName[this] = value; }
        }

        [DisplayName("Site Description"), Expression("jSite.[Description]")]
        public String SiteDescription
        {
            get { return Fields.SiteDescription[this]; }
            set { Fields.SiteDescription[this] = value; }
        }

        [DisplayName("Site Address"), Expression("jSite.[Address]")]
        public String SiteAddress
        {
            get { return Fields.SiteAddress[this]; }
            set { Fields.SiteAddress[this] = value; }
        }

        [DisplayName("Site Suite"), Expression("jSite.[Suite]")]
        public String SiteSuite
        {
            get { return Fields.SiteSuite[this]; }
            set { Fields.SiteSuite[this] = value; }
        }

        [DisplayName("Site City"), Expression("jSite.[City]")]
        public String SiteCity
        {
            get { return Fields.SiteCity[this]; }
            set { Fields.SiteCity[this] = value; }
        }

        [DisplayName("Site State Id"), Expression("jSite.[StateId]")]
        public Int32? SiteStateId
        {
            get { return Fields.SiteStateId[this]; }
            set { Fields.SiteStateId[this] = value; }
        }

        [DisplayName("Location Site Id"), Expression("jLocation.[SiteId]")]
        public Int32? LocationSiteId
        {
            get { return Fields.LocationSiteId[this]; }
            set { Fields.LocationSiteId[this] = value; }
        }

        [DisplayName("Location"), Expression("jLocation.[Location]")]
        public String Location
        {
            get { return Fields.Location[this]; }
            set { Fields.Location[this] = value; }
        }

        [DisplayName("Department"), Expression("jDepartment.[Department]")]
        public String Department
        {
            get { return Fields.Department[this]; }
            set { Fields.Department[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.EmployeeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.EmployeeName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EmployeeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EmployeeId;
            public StringField EmployeeName;
            public StringField Title;
            public Int32Field Phone;
            public StringField Email;
            public Int32Field SiteId;
            public Int32Field LocationId;
            public Int32Field DepartmentId;
            public StringField Note;

            public StringField SiteSiteName;
            public StringField SiteDescription;
            public StringField SiteAddress;
            public StringField SiteSuite;
            public StringField SiteCity;
            public Int32Field SiteStateId;

            public Int32Field LocationSiteId;
            public StringField Location;

            public StringField Department;
        }
    }
}
