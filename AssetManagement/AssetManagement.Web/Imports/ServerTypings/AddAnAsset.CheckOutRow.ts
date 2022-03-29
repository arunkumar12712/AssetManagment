namespace AssetManagement.AddAnAsset {
    export interface CheckOutRow {
        CheckOutId?: number;
        CheckOutDate?: string;
        CheckOutTo?: number;
        EmployeeId?: number;
        NoDueDate?: boolean;
        DueDate?: string;
        SiteId?: number;
        LocationId?: number;
        DepartmentId?: number;
        Notes?: string;
        SendMail?: boolean;
        Email?: string;
        AssetId?: number;
        EmployeeEmployeeName?: string;
        EmployeeTitle?: string;
        EmployeePhone?: number;
        EmployeeEmail?: string;
        EmployeeSiteId?: number;
        EmployeeLocationId?: number;
        EmployeeDepartmentId?: number;
        EmployeeNote?: string;
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

    export namespace CheckOutRow {
        export const idProperty = 'CheckOutId';
        export const nameProperty = 'Notes';
        export const localTextPrefix = 'AddAnAsset.CheckOut';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CheckOutId = "CheckOutId",
            CheckOutDate = "CheckOutDate",
            CheckOutTo = "CheckOutTo",
            EmployeeId = "EmployeeId",
            NoDueDate = "NoDueDate",
            DueDate = "DueDate",
            SiteId = "SiteId",
            LocationId = "LocationId",
            DepartmentId = "DepartmentId",
            Notes = "Notes",
            SendMail = "SendMail",
            Email = "Email",
            AssetId = "AssetId",
            EmployeeEmployeeName = "EmployeeEmployeeName",
            EmployeeTitle = "EmployeeTitle",
            EmployeePhone = "EmployeePhone",
            EmployeeEmail = "EmployeeEmail",
            EmployeeSiteId = "EmployeeSiteId",
            EmployeeLocationId = "EmployeeLocationId",
            EmployeeDepartmentId = "EmployeeDepartmentId",
            EmployeeNote = "EmployeeNote",
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

