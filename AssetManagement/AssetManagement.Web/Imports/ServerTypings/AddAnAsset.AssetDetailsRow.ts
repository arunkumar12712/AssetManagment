namespace AssetManagement.AddAnAsset {
    export interface AssetDetailsRow {
        AssetId?: number;
        Description?: string;
        AssetTagId?: number;
        Purchasedfrom?: string;
        PurchaseDate?: string;
        BrandId?: number;
        Cost?: number;
        Model?: string;
        Color?: string;
        SiteId?: number;
        CategoryId?: number;
        LocationId?: number;
        DepartmentId?: number;
        AssetPhoto?: string;
        DepreciableAsset?: number;
        DepreciableCost?: number;
        AssetLife?: number;
        SalvageValue?: number;
        DepreciationMethod?: string;
        DateAcquired?: string;
        BrandBrandName?: string;
        SiteSiteName?: string;
        SiteDescription?: string;
        SiteAddress?: string;
        SiteSuite?: string;
        SiteCity?: string;
        SiteStateId?: number;
        Category?: string;
        LocationSiteId?: number;
        Location?: string;
        Department?: string;
        OnCreated?: string;
        Createdby?: string;
        UserId?: number;
    }

    export namespace AssetDetailsRow {
        export const idProperty = 'AssetId';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'AddAnAsset.AssetDetails';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            AssetId = "AssetId",
            Description = "Description",
            AssetTagId = "AssetTagId",
            Purchasedfrom = "Purchasedfrom",
            PurchaseDate = "PurchaseDate",
            BrandId = "BrandId",
            Cost = "Cost",
            Model = "Model",
            Color = "Color",
            SiteId = "SiteId",
            CategoryId = "CategoryId",
            LocationId = "LocationId",
            DepartmentId = "DepartmentId",
            AssetPhoto = "AssetPhoto",
            DepreciableAsset = "DepreciableAsset",
            DepreciableCost = "DepreciableCost",
            AssetLife = "AssetLife",
            SalvageValue = "SalvageValue",
            DepreciationMethod = "DepreciationMethod",
            DateAcquired = "DateAcquired",
            BrandBrandName = "BrandBrandName",
            SiteSiteName = "SiteSiteName",
            SiteDescription = "SiteDescription",
            SiteAddress = "SiteAddress",
            SiteSuite = "SiteSuite",
            SiteCity = "SiteCity",
            SiteStateId = "SiteStateId",
            Category = "Category",
            LocationSiteId = "LocationSiteId",
            Location = "Location",
            Department = "Department",
            OnCreated = "OnCreated",
            Createdby = "Createdby",
            UserId = "UserId"
        }
    }
}

