
namespace AssetManagement.AddAnAsset.Entities
{
    using AssetManagement.Advanced.Entities;
    using AssetManagement.Setup.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("AddAnAsset"), TableName("[dbo].[CheckOut]")]
    [DisplayName("Check Out"), InstanceName("Check Out")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CheckOutRow : Row, IIdRow, INameRow
    {
        [DisplayName("Check Out Id"), Identity]
        public Int32? CheckOutId
        {
            get { return Fields.CheckOutId[this]; }
            set { Fields.CheckOutId[this] = value; }
        }

        [DisplayName("Check Out Date")]
        public DateTime? CheckOutDate
        {
            get { return Fields.CheckOutDate[this]; }
            set { Fields.CheckOutDate[this] = value; }
        }

        [DisplayName("Check Out To")]
        [RadioButtonEditor(EnumKey = "CheckOut.CheckOutTo")]
        public Int32? CheckOutTo
        {
            get { return Fields.CheckOutTo[this]; }
            set { Fields.CheckOutTo[this] = value; }
        }

        [DisplayName("Assign to"),NotNull, ForeignKey("[dbo].[Employee]", "EmployeeId"), LeftJoin("jEmployee"), TextualField("EmployeeEmployeeName")]
        [LookupEditor(typeof(EmployeeRow),InplaceAdd =true)]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        [DisplayName("No Due Date")]
        public Boolean? NoDueDate
        {
            get { return Fields.NoDueDate[this]; }
            set { Fields.NoDueDate[this] = value; }
        }

        [DisplayName("Due Date")]
        public DateTime? DueDate
        {
            get { return Fields.DueDate[this]; }
            set { Fields.DueDate[this] = value; }
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

        [DisplayName("Notes"), QuickSearch]
        public String Notes
        {
            get { return Fields.Notes[this]; }
            set { Fields.Notes[this] = value; }
        }

        [DisplayName("Send Mail")]
        public Boolean? SendMail
        {
            get { return Fields.SendMail[this]; }
            set { Fields.SendMail[this] = value; }
        }

        [DisplayName("")]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Asset"), ForeignKey("[dbo].[AssetDetails]", "AssetId"), LeftJoin("jAsset"), TextualField("AssetDescription")]
        public Int32? AssetId
        {
            get { return Fields.AssetId[this]; }
            set { Fields.AssetId[this] = value; }
        }

        [DisplayName("Employee Employee Name"), Expression("jEmployee.[EmployeeName]")]
        public String EmployeeEmployeeName
        {
            get { return Fields.EmployeeEmployeeName[this]; }
            set { Fields.EmployeeEmployeeName[this] = value; }
        }

        [DisplayName("Employee Title"), Expression("jEmployee.[Title]")]
        public String EmployeeTitle
        {
            get { return Fields.EmployeeTitle[this]; }
            set { Fields.EmployeeTitle[this] = value; }
        }

        [DisplayName("Employee Phone"), Expression("jEmployee.[Phone]")]
        public Int32? EmployeePhone
        {
            get { return Fields.EmployeePhone[this]; }
            set { Fields.EmployeePhone[this] = value; }
        }

        [DisplayName("Employee Email"), Expression("jEmployee.[Email]")]
        public String EmployeeEmail
        {
            get { return Fields.EmployeeEmail[this]; }
            set { Fields.EmployeeEmail[this] = value; }
        }

        [DisplayName("Employee Site Id"), Expression("jEmployee.[SiteId]")]
        public Int32? EmployeeSiteId
        {
            get { return Fields.EmployeeSiteId[this]; }
            set { Fields.EmployeeSiteId[this] = value; }
        }

        [DisplayName("Employee Location Id"), Expression("jEmployee.[LocationId]")]
        public Int32? EmployeeLocationId
        {
            get { return Fields.EmployeeLocationId[this]; }
            set { Fields.EmployeeLocationId[this] = value; }
        }

        [DisplayName("Employee Department Id"), Expression("jEmployee.[DepartmentId]")]
        public Int32? EmployeeDepartmentId
        {
            get { return Fields.EmployeeDepartmentId[this]; }
            set { Fields.EmployeeDepartmentId[this] = value; }
        }

        [DisplayName("Employee Note"), Expression("jEmployee.[Note]")]
        public String EmployeeNote
        {
            get { return Fields.EmployeeNote[this]; }
            set { Fields.EmployeeNote[this] = value; }
        }

        [DisplayName("Site Site Name"), Expression("jSite.[SiteName]")]
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

        [DisplayName("Asset Description"), Expression("jAsset.[Description]")]
        public String AssetDescription
        {
            get { return Fields.AssetDescription[this]; }
            set { Fields.AssetDescription[this] = value; }
        }

        [DisplayName("Asset Asset Tag Id"), Expression("jAsset.[AssetTagID]")]
        public Int32? AssetAssetTagId
        {
            get { return Fields.AssetAssetTagId[this]; }
            set { Fields.AssetAssetTagId[this] = value; }
        }

        [DisplayName("Asset Purchasedfrom"), Expression("jAsset.[Purchasedfrom]")]
        public String AssetPurchasedfrom
        {
            get { return Fields.AssetPurchasedfrom[this]; }
            set { Fields.AssetPurchasedfrom[this] = value; }
        }

        [DisplayName("Asset Purchase Date"), Expression("jAsset.[PurchaseDate]")]
        public DateTime? AssetPurchaseDate
        {
            get { return Fields.AssetPurchaseDate[this]; }
            set { Fields.AssetPurchaseDate[this] = value; }
        }

        [DisplayName("Asset Brand Id"), Expression("jAsset.[BrandId]")]
        public Int32? AssetBrandId
        {
            get { return Fields.AssetBrandId[this]; }
            set { Fields.AssetBrandId[this] = value; }
        }

        [DisplayName("Asset Cost"), Expression("jAsset.[Cost]")]
        public Decimal? AssetCost
        {
            get { return Fields.AssetCost[this]; }
            set { Fields.AssetCost[this] = value; }
        }

        [DisplayName("Asset Model"), Expression("jAsset.[Model]")]
        public String AssetModel
        {
            get { return Fields.AssetModel[this]; }
            set { Fields.AssetModel[this] = value; }
        }

        [DisplayName("Asset Color"), Expression("jAsset.[Color]")]
        public String AssetColor
        {
            get { return Fields.AssetColor[this]; }
            set { Fields.AssetColor[this] = value; }
        }

        [DisplayName("Asset Site Id"), Expression("jAsset.[SiteId]")]
        public Int32? AssetSiteId
        {
            get { return Fields.AssetSiteId[this]; }
            set { Fields.AssetSiteId[this] = value; }
        }

        [DisplayName("Asset Category Id"), Expression("jAsset.[CategoryId]")]
        public Int32? AssetCategoryId
        {
            get { return Fields.AssetCategoryId[this]; }
            set { Fields.AssetCategoryId[this] = value; }
        }

        [DisplayName("Asset Location Id"), Expression("jAsset.[LocationId]")]
        public Int32? AssetLocationId
        {
            get { return Fields.AssetLocationId[this]; }
            set { Fields.AssetLocationId[this] = value; }
        }

        [DisplayName("Asset Department Id"), Expression("jAsset.[DepartmentId]")]
        public Int32? AssetDepartmentId
        {
            get { return Fields.AssetDepartmentId[this]; }
            set { Fields.AssetDepartmentId[this] = value; }
        }

        [DisplayName("Asset Depreciable Asset"), Expression("jAsset.[DepreciableAsset]")]
        public Int32? AssetDepreciableAsset
        {
            get { return Fields.AssetDepreciableAsset[this]; }
            set { Fields.AssetDepreciableAsset[this] = value; }
        }

        [DisplayName("Asset Depreciable Cost"), Expression("jAsset.[DepreciableCost]")]
        public Decimal? AssetDepreciableCost
        {
            get { return Fields.AssetDepreciableCost[this]; }
            set { Fields.AssetDepreciableCost[this] = value; }
        }

        [DisplayName("Asset Asset Life"), Expression("jAsset.[AssetLife]")]
        public Int32? AssetAssetLife
        {
            get { return Fields.AssetAssetLife[this]; }
            set { Fields.AssetAssetLife[this] = value; }
        }

        [DisplayName("Asset Salvage Value"), Expression("jAsset.[SalvageValue]")]
        public Decimal? AssetSalvageValue
        {
            get { return Fields.AssetSalvageValue[this]; }
            set { Fields.AssetSalvageValue[this] = value; }
        }

        [DisplayName("Asset Depreciation Method"), Expression("jAsset.[DepreciationMethod]")]
        public String AssetDepreciationMethod
        {
            get { return Fields.AssetDepreciationMethod[this]; }
            set { Fields.AssetDepreciationMethod[this] = value; }
        }

        [DisplayName("Asset Date Acquired"), Expression("jAsset.[DateAcquired]")]
        public DateTime? AssetDateAcquired
        {
            get { return Fields.AssetDateAcquired[this]; }
            set { Fields.AssetDateAcquired[this] = value; }
        }

        [DisplayName("Asset Asset Photo"), Expression("jAsset.[AssetPhoto]")]
        public String AssetAssetPhoto
        {
            get { return Fields.AssetAssetPhoto[this]; }
            set { Fields.AssetAssetPhoto[this] = value; }
        }

        [DisplayName("Asset Createdby"), Expression("jAsset.[Createdby]")]
        public String AssetCreatedby
        {
            get { return Fields.AssetCreatedby[this]; }
            set { Fields.AssetCreatedby[this] = value; }
        }

        [DisplayName("Asset On Created"), Expression("jAsset.[OnCreated]")]
        public DateTime? AssetOnCreated
        {
            get { return Fields.AssetOnCreated[this]; }
            set { Fields.AssetOnCreated[this] = value; }
        }

        [DisplayName("Asset User Id"), Expression("jAsset.[UserId]")]
        public Int32? AssetUserId
        {
            get { return Fields.AssetUserId[this]; }
            set { Fields.AssetUserId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CheckOutId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Notes; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CheckOutRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CheckOutId;
            public DateTimeField CheckOutDate;
            public Int32Field CheckOutTo;
            public Int32Field EmployeeId;
            public BooleanField NoDueDate;
            public DateTimeField DueDate;
            public Int32Field SiteId;
            public Int32Field LocationId;
            public Int32Field DepartmentId;
            public StringField Notes;
            public BooleanField SendMail;
            public StringField Email;
            public Int32Field AssetId;

            public StringField EmployeeEmployeeName;
            public StringField EmployeeTitle;
            public Int32Field EmployeePhone;
            public StringField EmployeeEmail;
            public Int32Field EmployeeSiteId;
            public Int32Field EmployeeLocationId;
            public Int32Field EmployeeDepartmentId;
            public StringField EmployeeNote;

            public StringField SiteSiteName;
            public StringField SiteDescription;
            public StringField SiteAddress;
            public StringField SiteSuite;
            public StringField SiteCity;
            public Int32Field SiteStateId;

            public Int32Field LocationSiteId;
            public StringField Location;

            public StringField Department;

            public StringField AssetDescription;
            public Int32Field AssetAssetTagId;
            public StringField AssetPurchasedfrom;
            public DateTimeField AssetPurchaseDate;
            public Int32Field AssetBrandId;
            public DecimalField AssetCost;
            public StringField AssetModel;
            public StringField AssetColor;
            public Int32Field AssetSiteId;
            public Int32Field AssetCategoryId;
            public Int32Field AssetLocationId;
            public Int32Field AssetDepartmentId;
            public Int32Field AssetDepreciableAsset;
            public DecimalField AssetDepreciableCost;
            public Int32Field AssetAssetLife;
            public DecimalField AssetSalvageValue;
            public StringField AssetDepreciationMethod;
            public DateTimeField AssetDateAcquired;
            public StringField AssetAssetPhoto;
            public StringField AssetCreatedby;
            public DateTimeField AssetOnCreated;
            public Int32Field AssetUserId;
        }
    }
}
