namespace AssetManagement.AddAnAsset {
    export interface CheckInRow {
        CheckId?: number;
        DueDate?: string;
        ReturnDate?: string;
        SiteId?: number;
        LocationId?: number;
        DepartmentId?: number;
        Notes?: string;
        SendMail?: boolean;
        Email?: string;
        AssetId?: number;
        SiteSiteName?: string;
        SiteDescription?: string;
        SiteAddress?: string;
        SiteSuite?: string;
        SiteCity?: string;
        SiteStateId?: number;
        LocationSiteId?: number;
        Location?: string;
        Department?: string;
        AssetDescription?: string;
        AssetAssetTagId?: number;
        AssetPurchasedfrom?: string;
        AssetPurchaseDate?: string;
        AssetBrandId?: number;
        AssetCost?: number;
        AssetModel?: string;
        AssetColor?: string;
        AssetSiteId?: number;
        AssetCategoryId?: number;
        AssetLocationId?: number;
        AssetDepartmentId?: number;
        AssetDepreciableAsset?: number;
        AssetDepreciableCost?: number;
        AssetAssetLife?: number;
        AssetSalvageValue?: number;
        AssetDepreciationMethod?: string;
        AssetDateAcquired?: string;
        AssetAssetPhoto?: string;
        AssetCreatedby?: string;
        AssetOnCreated?: string;
        AssetUserId?: number;
    }

    export namespace CheckInRow {
        export const idProperty = 'CheckId';
        export const nameProperty = 'Notes';
        export const localTextPrefix = 'AddAnAsset.CheckIn';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CheckId = "CheckId",
            DueDate = "DueDate",
            ReturnDate = "ReturnDate",
            SiteId = "SiteId",
            LocationId = "LocationId",
            DepartmentId = "DepartmentId",
            Notes = "Notes",
            SendMail = "SendMail",
            Email = "Email",
            AssetId = "AssetId",
            SiteSiteName = "SiteSiteName",
            SiteDescription = "SiteDescription",
            SiteAddress = "SiteAddress",
            SiteSuite = "SiteSuite",
            SiteCity = "SiteCity",
            SiteStateId = "SiteStateId",
            LocationSiteId = "LocationSiteId",
            Location = "Location",
            Department = "Department",
            AssetDescription = "AssetDescription",
            AssetAssetTagId = "AssetAssetTagId",
            AssetPurchasedfrom = "AssetPurchasedfrom",
            AssetPurchaseDate = "AssetPurchaseDate",
            AssetBrandId = "AssetBrandId",
            AssetCost = "AssetCost",
            AssetModel = "AssetModel",
            AssetColor = "AssetColor",
            AssetSiteId = "AssetSiteId",
            AssetCategoryId = "AssetCategoryId",
            AssetLocationId = "AssetLocationId",
            AssetDepartmentId = "AssetDepartmentId",
            AssetDepreciableAsset = "AssetDepreciableAsset",
            AssetDepreciableCost = "AssetDepreciableCost",
            AssetAssetLife = "AssetAssetLife",
            AssetSalvageValue = "AssetSalvageValue",
            AssetDepreciationMethod = "AssetDepreciationMethod",
            AssetDateAcquired = "AssetDateAcquired",
            AssetAssetPhoto = "AssetAssetPhoto",
            AssetCreatedby = "AssetCreatedby",
            AssetOnCreated = "AssetOnCreated",
            AssetUserId = "AssetUserId"
        }
    }
}

