
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

    [ConnectionKey("Default"), Module("AddAnAsset"), TableName("[dbo].[CheckIn]")]
    [DisplayName("Check In"), InstanceName("Check In")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CheckInRow : Row, IIdRow, INameRow
    {
        [DisplayName("Check Id"), Identity]
        public Int32? CheckId
        {
            get { return Fields.CheckId[this]; }
            set { Fields.CheckId[this] = value; }
        }

        [DisplayName("Due Date")]
        public DateTime? DueDate
        {
            get { return Fields.DueDate[this]; }
            set { Fields.DueDate[this] = value; }
        }

        [DisplayName("Return Date"), NotNull]
        public DateTime? ReturnDate
        {
            get { return Fields.ReturnDate[this]; }
            set { Fields.ReturnDate[this] = value; }
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

        [DisplayName("Email")]
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

        [DisplayName("State Id"), Expression("jSite.[StateId]")]
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
            get { return Fields.CheckId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Notes; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CheckInRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CheckId;
            public DateTimeField DueDate;
            public DateTimeField ReturnDate;
            public Int32Field SiteId;
            public Int32Field LocationId;
            public Int32Field DepartmentId;
            public StringField Notes;
            public BooleanField SendMail;
            public StringField Email;
            public Int32Field AssetId;

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
