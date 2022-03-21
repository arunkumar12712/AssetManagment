
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

    [ConnectionKey("Default"), Module("AddAnAsset"), TableName("[dbo].[AssetDetails]")]
    [DisplayName("Asset Details"), InstanceName("Asset Details")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AssetDetailsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Asset Id"), Identity,LookupInclude]
        public Int32? AssetId
        {
            get { return Fields.AssetId[this]; }
            set { Fields.AssetId[this] = value; }
        }

        [DisplayName("Description"), NotNull, QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("AssetTagId"),NotNull, Column("AssetTagID")]
        public Int32? AssetTagId
        {
            get { return Fields.AssetTagId[this]; }
            set { Fields.AssetTagId[this] = value; }
        }

        [DisplayName("Purchasedfrom"), Size(200)]
        public String Purchasedfrom
        {
            get { return Fields.Purchasedfrom[this]; }
            set { Fields.Purchasedfrom[this] = value; }
        }

        [DisplayName("PurchaseDate")]
        public DateTime? PurchaseDate
        {
            get { return Fields.PurchaseDate[this]; }
            set { Fields.PurchaseDate[this] = value; }
        }

        [DisplayName("Brand"), ForeignKey("[dbo].[Brand]", "BrandId"), LeftJoin("jBrand"), TextualField("BrandBrandName")]
        [LookupEditor(typeof(BrandRow))]
        public Int32? BrandId
        {
            get { return Fields.BrandId[this]; }
            set { Fields.BrandId[this] = value; }
        }

        [DisplayName("Cost"), Size(19), Scale(4)]
        public Decimal? Cost
        {
            get { return Fields.Cost[this]; }
            set { Fields.Cost[this] = value; }
        }

        [DisplayName("Model"), Size(200)]
        public String Model
        {
            get { return Fields.Model[this]; }
            set { Fields.Model[this] = value; }
        }

        [DisplayName("Color"),NotNull, Size(200)]
        public String Color
        {
            get { return Fields.Color[this]; }
            set { Fields.Color[this] = value; }
        }

        [DisplayName("Site"), ForeignKey("[dbo].[Site]", "SiteId"), LeftJoin("jSite"), TextualField("SiteSiteName")]
        [LookupEditor(typeof(SiteRow))]
        public Int32? SiteId
        {
            get { return Fields.SiteId[this]; }
            set { Fields.SiteId[this] = value; }
        }

        [DisplayName("Category"), ForeignKey("[dbo].[Category]", "CategoryId"), LeftJoin("jCategory"), TextualField("Category")]
        [LookupEditor(typeof(CategoryRow))]
        public Int32? CategoryId
        {
            get { return Fields.CategoryId[this]; }
            set { Fields.CategoryId[this] = value; }
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

        [DisplayName("AssetPhoto"), Size(200),ImageUploadEditorAttribute(FilenameFormat = "AssetDetails/AssetPhoto/~")]
        public String AssetPhoto
        {
            get { return Fields.AssetPhoto[this]; }
            set { Fields.AssetPhoto[this] = value; }
        }

        [DisplayName("DepreciableAsset"),TypeConverter]
        [RadioButtonEditor(EnumKey = "AssetDetails.DepreciableAsset")]
        public Int32? DepreciableAsset
        {
            get { return Fields.DepreciableAsset[this]; }
            set { Fields.DepreciableAsset[this] = value; }
        }

        [DisplayName("DepreciableCost"), Size(19), Scale(4)]
        public Decimal? DepreciableCost
        {
            get { return Fields.DepreciableCost[this]; }
            set { Fields.DepreciableCost[this] = value; }
        }

        [DisplayName("AssetLife")]
        public Int32? AssetLife
        {
            get { return Fields.AssetLife[this]; }
            set { Fields.AssetLife[this] = value; }
        }

        [DisplayName("SalvageValue"), Size(19), Scale(4)]
        public Decimal? SalvageValue
        {
            get { return Fields.SalvageValue[this]; }
            set { Fields.SalvageValue[this] = value; }
        }

        [DisplayName("DepreciationMethod"), Size(200)]
        public String DepreciationMethod
        {
            get { return Fields.DepreciationMethod[this]; }
            set { Fields.DepreciationMethod[this] = value; }
        }

        [DisplayName("DateAcquired")]
        public DateTime? DateAcquired
        {
            get { return Fields.DateAcquired[this]; }
            set { Fields.DateAcquired[this] = value; }
        }

        [DisplayName("BrandName"), Expression("jBrand.[BrandName]")]
        public String BrandBrandName
        {
            get { return Fields.BrandBrandName[this]; }
            set { Fields.BrandBrandName[this] = value; }
        }

        [DisplayName("SiteName"), Expression("jSite.[SiteName]")]
        public String SiteSiteName
        {
            get { return Fields.SiteSiteName[this]; }
            set { Fields.SiteSiteName[this] = value; }
        }

        [DisplayName("SiteDescription"), Expression("jSite.[Description]")]
        public String SiteDescription
        {
            get { return Fields.SiteDescription[this]; }
            set { Fields.SiteDescription[this] = value; }
        }

        [DisplayName("SiteAddress"), Expression("jSite.[Address]")]
        public String SiteAddress
        {
            get { return Fields.SiteAddress[this]; }
            set { Fields.SiteAddress[this] = value; }
        }

        [DisplayName("SiteSuite"), Expression("jSite.[Suite]")]
        public String SiteSuite
        {
            get { return Fields.SiteSuite[this]; }
            set { Fields.SiteSuite[this] = value; }
        }

        [DisplayName("SiteCity"), Expression("jSite.[City]")]
        public String SiteCity
        {
            get { return Fields.SiteCity[this]; }
            set { Fields.SiteCity[this] = value; }
        }

        [DisplayName("SiteStateId"), Expression("jSite.[StateId]")]
        public Int32? SiteStateId
        {
            get { return Fields.SiteStateId[this]; }
            set { Fields.SiteStateId[this] = value; }
        }

        [DisplayName("Category"), Expression("jCategory.[Category]")]
        public String Category
        {
            get { return Fields.Category[this]; }
            set { Fields.Category[this] = value; }
        }

        [DisplayName("LocationSiteId"), Expression("jLocation.[SiteId]")]
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
        [DisplayName("OnCreated")]
        public DateTime? OnCreated
        {
            get { return Fields.OnCreated[this]; }
            set { Fields.OnCreated[this] = value; }
        }

        [DisplayName("Users"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser")]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Createdby")]
        public String Createdby
        {
            get { return Fields.Createdby[this]; }
            set { Fields.Createdby[this] = value; }
        }
        //[DisplayName("Username"), Expression("jUser.[UserName]")]
        //public String Username
        //{
        //    get { return Fields.Username[this]; }
        //    set { Fields.Username[this] = value; }
        //}

        IIdField IIdRow.IdField
        {
            get { return Fields.AssetId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AssetDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AssetId;
            public StringField Description;
            public Int32Field AssetTagId;
            public StringField Purchasedfrom;
            public DateTimeField PurchaseDate;
            public Int32Field BrandId;
            public DecimalField Cost;
            public StringField Model;
            public StringField Color;
            public Int32Field SiteId;
            public Int32Field CategoryId;
            public Int32Field LocationId;
            public Int32Field DepartmentId;
            public StringField AssetPhoto;
            public Int32Field DepreciableAsset;
            public DecimalField DepreciableCost;
            public Int32Field AssetLife;
            public DecimalField SalvageValue;
            public StringField DepreciationMethod;
            public DateTimeField DateAcquired;

            public StringField BrandBrandName;

            public StringField SiteSiteName;
            public StringField SiteDescription;
            public StringField SiteAddress;
            public StringField SiteSuite;
            public StringField SiteCity;
            public Int32Field SiteStateId;

            public StringField Category;

            public Int32Field LocationSiteId;
            public StringField Location;

            public StringField Department;
            public DateTimeField OnCreated;
            public StringField Createdby;
            public Int32Field UserId;
          //  public StringField Username;
        }
    }
}
