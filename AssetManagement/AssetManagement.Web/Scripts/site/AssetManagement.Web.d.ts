/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace AssetManagement.AddAnAsset {
}
declare namespace AssetManagement.AddAnAsset {
    interface AssetDetailsForm {
        Description: Serenity.TextAreaEditor;
        AssetTagId: Serenity.IntegerEditor;
        Purchasedfrom: Serenity.StringEditor;
        PurchaseDate: Serenity.DateEditor;
        BrandId: Serenity.LookupEditor;
        Cost: Serenity.DecimalEditor;
        Model: Serenity.StringEditor;
        Color: Serenity.StringEditor;
        SiteId: Serenity.LookupEditor;
        CategoryId: Serenity.LookupEditor;
        LocationId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
        AssetPhoto: Serenity.ImageUploadEditor;
        DepreciableAsset: Serenity.RadioButtonEditor;
        DepreciableCost: Serenity.DecimalEditor;
        AssetLife: Serenity.IntegerEditor;
        SalvageValue: Serenity.DecimalEditor;
        DepreciationMethod: Serenity.StringEditor;
        DateAcquired: Serenity.DateEditor;
    }
    class AssetDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AssetManagement.AddAnAsset {
    interface AssetDetailsRow {
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
    namespace AssetDetailsRow {
        const idProperty = "AssetId";
        const nameProperty = "Description";
        const localTextPrefix = "AddAnAsset.AssetDetails";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
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
declare namespace AssetManagement.AddAnAsset {
    namespace AssetDetailsService {
        const baseUrl = "AddAnAsset/AssetDetails";
        function Create(request: Serenity.SaveRequest<AssetDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "AddAnAsset/AssetDetails/Create",
            Update = "AddAnAsset/AssetDetails/Update",
            Delete = "AddAnAsset/AssetDetails/Delete",
            Retrieve = "AddAnAsset/AssetDetails/Retrieve",
            List = "AddAnAsset/AssetDetails/List"
        }
    }
}
declare namespace AssetManagement.AddAnAsset {
}
declare namespace AssetManagement.AddAnAsset {
    interface AssetMaintenanceForm {
        Title: Serenity.TextAreaEditor;
        Details: Serenity.TextAreaEditor;
        DueDate: Serenity.DateEditor;
        MaintenanceBy: Serenity.TextAreaEditor;
        Id: Serenity.LookupEditor;
        DateCompleted: Serenity.DateEditor;
        AssetId: Serenity.IntegerEditor;
    }
    class AssetMaintenanceForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AssetManagement.AddAnAsset {
    interface AssetMaintenanceRow {
        AssetMaintenanceId?: number;
        Title?: string;
        Details?: string;
        DueDate?: string;
        MaintenanceBy?: string;
        Id?: number;
        DateCompleted?: string;
        MaintenanceStatus?: string;
        AssetId?: number;
    }
    namespace AssetMaintenanceRow {
        const idProperty = "AssetMaintenanceId";
        const nameProperty = "Title";
        const localTextPrefix = "AddAnAsset.AssetMaintenance";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            AssetMaintenanceId = "AssetMaintenanceId",
            Title = "Title",
            Details = "Details",
            DueDate = "DueDate",
            MaintenanceBy = "MaintenanceBy",
            Id = "Id",
            DateCompleted = "DateCompleted",
            MaintenanceStatus = "MaintenanceStatus",
            AssetId = "AssetId"
        }
    }
}
declare namespace AssetManagement.AddAnAsset {
    namespace AssetMaintenanceService {
        const baseUrl = "AddAnAsset/AssetMaintenance";
        function Create(request: Serenity.SaveRequest<AssetMaintenanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetMaintenanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetMaintenanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetMaintenanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "AddAnAsset/AssetMaintenance/Create",
            Update = "AddAnAsset/AssetMaintenance/Update",
            Delete = "AddAnAsset/AssetMaintenance/Delete",
            Retrieve = "AddAnAsset/AssetMaintenance/Retrieve",
            List = "AddAnAsset/AssetMaintenance/List"
        }
    }
}
declare namespace AssetManagement.AddAnAsset {
}
declare namespace AssetManagement.AddAnAsset {
    interface AssetWarrantyForm {
        Length: Serenity.IntegerEditor;
        ExpirationDate: Serenity.DateEditor;
        Notes: Serenity.TextAreaEditor;
        AssetId: Serenity.IntegerEditor;
    }
    class AssetWarrantyForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AssetManagement.AddAnAsset {
    interface AssetWarrantyRow {
        Id?: number;
        Length?: number;
        ExpirationDate?: string;
        Notes?: string;
        AssetId?: number;
    }
    namespace AssetWarrantyRow {
        const idProperty = "Id";
        const nameProperty = "Notes";
        const localTextPrefix = "AddAnAsset.AssetWarranty";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Length = "Length",
            ExpirationDate = "ExpirationDate",
            Notes = "Notes",
            AssetId = "AssetId"
        }
    }
}
declare namespace AssetManagement.AddAnAsset {
    namespace AssetWarrantyService {
        const baseUrl = "AddAnAsset/AssetWarranty";
        function Create(request: Serenity.SaveRequest<AssetWarrantyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssetWarrantyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssetWarrantyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssetWarrantyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "AddAnAsset/AssetWarranty/Create",
            Update = "AddAnAsset/AssetWarranty/Update",
            Delete = "AddAnAsset/AssetWarranty/Delete",
            Retrieve = "AddAnAsset/AssetWarranty/Retrieve",
            List = "AddAnAsset/AssetWarranty/List"
        }
    }
}
declare namespace AssetManagement.AddAnAsset {
}
declare namespace AssetManagement.AddAnAsset {
    interface DocumentForm {
        Document: Serenity.ImageUploadEditor;
        Description: Serenity.TextAreaEditor;
        AssetId: Serenity.IntegerEditor;
    }
    class DocumentForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AssetManagement.AddAnAsset {
    interface DocumentRow {
        Id?: number;
        Document?: string;
        Description?: string;
        AssetId?: number;
    }
    namespace DocumentRow {
        const idProperty = "Id";
        const nameProperty = "Document";
        const localTextPrefix = "AddAnAsset.Document";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Document = "Document",
            Description = "Description",
            AssetId = "AssetId"
        }
    }
}
declare namespace AssetManagement.AddAnAsset {
    namespace DocumentService {
        const baseUrl = "AddAnAsset/Document";
        function Create(request: Serenity.SaveRequest<DocumentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DocumentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DocumentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DocumentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "AddAnAsset/Document/Create",
            Update = "AddAnAsset/Document/Update",
            Delete = "AddAnAsset/Document/Delete",
            Retrieve = "AddAnAsset/Document/Retrieve",
            List = "AddAnAsset/Document/List"
        }
    }
}
declare namespace AssetManagement.Administration {
}
declare namespace AssetManagement.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AssetManagement.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace AssetManagement.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace AssetManagement.Administration {
}
declare namespace AssetManagement.Administration {
}
declare namespace AssetManagement.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AssetManagement.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace AssetManagement.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace AssetManagement.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace AssetManagement.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace AssetManagement.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace AssetManagement.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace AssetManagement.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace AssetManagement.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace AssetManagement.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace AssetManagement.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace AssetManagement.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace AssetManagement.Administration {
}
declare namespace AssetManagement.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AssetManagement.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace AssetManagement.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace AssetManagement.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace AssetManagement.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace AssetManagement.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace AssetManagement.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace AssetManagement.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace AssetManagement.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace AssetManagement.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace AssetManagement.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace AssetManagement.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace AssetManagement.Advanced {
}
declare namespace AssetManagement.Advanced {
    interface CustomersForm {
        CustomerName: Serenity.StringEditor;
        Company: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        City: Serenity.StringEditor;
        StateId: Serenity.LookupEditor;
        Zip: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Notes: Serenity.TextAreaEditor;
    }
    class CustomersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AssetManagement.Advanced {
    interface CustomersRow {
        CustomerId?: number;
        CustomerName?: string;
        Company?: string;
        Address?: string;
        City?: string;
        StateId?: number;
        Zip?: string;
        CountryId?: number;
        Phone?: string;
        Email?: string;
        Notes?: string;
        StateName?: string;
        SiteStateId?: number;
        CountryCountryName?: string;
    }
    namespace CustomersRow {
        const idProperty = "CustomerId";
        const nameProperty = "CustomerName";
        const localTextPrefix = "Advanced.Customers";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CustomerId = "CustomerId",
            CustomerName = "CustomerName",
            Company = "Company",
            Address = "Address",
            City = "City",
            StateId = "StateId",
            Zip = "Zip",
            CountryId = "CountryId",
            Phone = "Phone",
            Email = "Email",
            Notes = "Notes",
            StateName = "StateName",
            SiteStateId = "SiteStateId",
            CountryCountryName = "CountryCountryName"
        }
    }
}
declare namespace AssetManagement.Advanced {
    namespace CustomersService {
        const baseUrl = "Advanced/Customers";
        function Create(request: Serenity.SaveRequest<CustomersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Advanced/Customers/Create",
            Update = "Advanced/Customers/Update",
            Delete = "Advanced/Customers/Delete",
            Retrieve = "Advanced/Customers/Retrieve",
            List = "Advanced/Customers/List"
        }
    }
}
declare namespace AssetManagement.Advanced {
}
declare namespace AssetManagement.Advanced {
    interface EmployeeForm {
        EmployeeName: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Phone: Serenity.IntegerEditor;
        Email: Serenity.StringEditor;
        SiteId: Serenity.LookupEditor;
        LocationId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
        Note: Serenity.TextAreaEditor;
    }
    class EmployeeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AssetManagement.Advanced {
    interface EmployeeRow {
        EmployeeId?: number;
        EmployeeName?: string;
        Title?: string;
        Phone?: number;
        Email?: string;
        SiteId?: number;
        LocationId?: number;
        DepartmentId?: number;
        Note?: string;
        SiteSiteName?: string;
        SiteDescription?: string;
        SiteAddress?: string;
        SiteSuite?: string;
        SiteCity?: string;
        SiteStateId?: number;
        LocationSiteId?: number;
        Location?: string;
        Department?: string;
    }
    namespace EmployeeRow {
        const idProperty = "EmployeeId";
        const nameProperty = "EmployeeName";
        const localTextPrefix = "Advanced.Employee";
        const lookupKey = "Advanced.Employee";
        function getLookup(): Q.Lookup<EmployeeRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            EmployeeId = "EmployeeId",
            EmployeeName = "EmployeeName",
            Title = "Title",
            Phone = "Phone",
            Email = "Email",
            SiteId = "SiteId",
            LocationId = "LocationId",
            DepartmentId = "DepartmentId",
            Note = "Note",
            SiteSiteName = "SiteSiteName",
            SiteDescription = "SiteDescription",
            SiteAddress = "SiteAddress",
            SiteSuite = "SiteSuite",
            SiteCity = "SiteCity",
            SiteStateId = "SiteStateId",
            LocationSiteId = "LocationSiteId",
            Location = "Location",
            Department = "Department"
        }
    }
}
declare namespace AssetManagement.Advanced {
    namespace EmployeeService {
        const baseUrl = "Advanced/Employee";
        function Create(request: Serenity.SaveRequest<EmployeeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Advanced/Employee/Create",
            Update = "Advanced/Employee/Update",
            Delete = "Advanced/Employee/Delete",
            Retrieve = "Advanced/Employee/Retrieve",
            List = "Advanced/Employee/List"
        }
    }
}
declare namespace AssetManagement.Advanced {
}
declare namespace AssetManagement.Advanced {
    interface FundingForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Amount: Serenity.DecimalEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        IsActive: Serenity.BooleanEditor;
        Notes: Serenity.TextAreaEditor;
    }
    class FundingForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AssetManagement.Advanced {
    interface FundingRow {
        FundingId?: number;
        Name?: string;
        Description?: string;
        Amount?: number;
        StartDate?: string;
        EndDate?: string;
        IsActive?: boolean;
        Notes?: string;
    }
    namespace FundingRow {
        const idProperty = "FundingId";
        const nameProperty = "Name";
        const localTextPrefix = "Advanced.Funding";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            FundingId = "FundingId",
            Name = "Name",
            Description = "Description",
            Amount = "Amount",
            StartDate = "StartDate",
            EndDate = "EndDate",
            IsActive = "IsActive",
            Notes = "Notes"
        }
    }
}
declare namespace AssetManagement.Advanced {
    namespace FundingService {
        const baseUrl = "Advanced/Funding";
        function Create(request: Serenity.SaveRequest<FundingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FundingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FundingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FundingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Advanced/Funding/Create",
            Update = "Advanced/Funding/Update",
            Delete = "Advanced/Funding/Delete",
            Retrieve = "Advanced/Funding/Retrieve",
            List = "Advanced/Funding/List"
        }
    }
}
declare namespace AssetManagement.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace AssetManagement.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace AssetManagement.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace AssetManagement.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace AssetManagement.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace AssetManagement {
    enum DepreciableAsset {
        No = 1,
        Yes = 2
    }
}
declare namespace AssetManagement {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace AssetManagement {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace AssetManagement {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace AssetManagement {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace AssetManagement.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AssetManagement.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace AssetManagement.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AssetManagement.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace AssetManagement.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AssetManagement.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace AssetManagement.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AssetManagement.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace AssetManagement.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AssetManagement.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace AssetManagement {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace AssetManagement.Setup {
}
declare namespace AssetManagement.Setup {
    interface BrandForm {
        BrandName: Serenity.StringEditor;
    }
    class BrandForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AssetManagement.Setup {
    interface BrandRow {
        BrandId?: number;
        BrandName?: string;
    }
    namespace BrandRow {
        const idProperty = "BrandId";
        const nameProperty = "BrandName";
        const localTextPrefix = "Setup.Brand";
        const lookupKey = "Setup.Brand";
        function getLookup(): Q.Lookup<BrandRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            BrandId = "BrandId",
            BrandName = "BrandName"
        }
    }
}
declare namespace AssetManagement.Setup {
    namespace BrandService {
        const baseUrl = "Setup/Brand";
        function Create(request: Serenity.SaveRequest<BrandRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BrandRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BrandRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BrandRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Setup/Brand/Create",
            Update = "Setup/Brand/Update",
            Delete = "Setup/Brand/Delete",
            Retrieve = "Setup/Brand/Retrieve",
            List = "Setup/Brand/List"
        }
    }
}
declare namespace AssetManagement.Setup {
}
declare namespace AssetManagement.Setup {
    interface CategoryForm {
        Category: Serenity.StringEditor;
    }
    class CategoryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AssetManagement.Setup {
    interface CategoryRow {
        CategoryId?: number;
        Category?: string;
    }
    namespace CategoryRow {
        const idProperty = "CategoryId";
        const nameProperty = "Category";
        const localTextPrefix = "Setup.Category";
        const lookupKey = "Setup.Category";
        function getLookup(): Q.Lookup<CategoryRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CategoryId = "CategoryId",
            Category = "Category"
        }
    }
}
declare namespace AssetManagement.Setup {
    namespace CategoryService {
        const baseUrl = "Setup/Category";
        function Create(request: Serenity.SaveRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Setup/Category/Create",
            Update = "Setup/Category/Update",
            Delete = "Setup/Category/Delete",
            Retrieve = "Setup/Category/Retrieve",
            List = "Setup/Category/List"
        }
    }
}
declare namespace AssetManagement.Setup {
}
declare namespace AssetManagement.Setup {
    interface CompanyForm {
        CompanyName: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
        Suite: Serenity.StringEditor;
        City: Serenity.StringEditor;
        StateId: Serenity.LookupEditor;
        PostalCode: Serenity.StringEditor;
    }
    class CompanyForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AssetManagement.Setup {
    interface CompanyRow {
        CompanyId?: number;
        CompanyName?: string;
        CountryId?: number;
        Address?: string;
        Suite?: string;
        City?: string;
        StateId?: number;
        PostalCode?: string;
        CountryCountryName?: string;
        StateStateName?: string;
    }
    namespace CompanyRow {
        const idProperty = "CompanyId";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Setup.Company";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CompanyId = "CompanyId",
            CompanyName = "CompanyName",
            CountryId = "CountryId",
            Address = "Address",
            Suite = "Suite",
            City = "City",
            StateId = "StateId",
            PostalCode = "PostalCode",
            CountryCountryName = "CountryCountryName",
            StateStateName = "StateStateName"
        }
    }
}
declare namespace AssetManagement.Setup {
    namespace CompanyService {
        const baseUrl = "Setup/Company";
        function Create(request: Serenity.SaveRequest<CompanyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CompanyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CompanyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CompanyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Setup/Company/Create",
            Update = "Setup/Company/Update",
            Delete = "Setup/Company/Delete",
            Retrieve = "Setup/Company/Retrieve",
            List = "Setup/Company/List"
        }
    }
}
declare namespace AssetManagement.Setup {
}
declare namespace AssetManagement.Setup {
    interface CountryForm {
        CountryName: Serenity.StringEditor;
    }
    class CountryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AssetManagement.Setup {
    interface CountryRow {
        CountryId?: number;
        CountryName?: string;
    }
    namespace CountryRow {
        const idProperty = "CountryId";
        const nameProperty = "CountryName";
        const localTextPrefix = "Setup.Country";
        const lookupKey = "Company.Country";
        function getLookup(): Q.Lookup<CountryRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CountryId = "CountryId",
            CountryName = "CountryName"
        }
    }
}
declare namespace AssetManagement.Setup {
    namespace CountryService {
        const baseUrl = "Setup/Country";
        function Create(request: Serenity.SaveRequest<CountryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CountryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CountryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CountryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Setup/Country/Create",
            Update = "Setup/Country/Update",
            Delete = "Setup/Country/Delete",
            Retrieve = "Setup/Country/Retrieve",
            List = "Setup/Country/List"
        }
    }
}
declare namespace AssetManagement.Setup {
}
declare namespace AssetManagement.Setup {
    interface CurrencyForm {
        CurrencyName: Serenity.StringEditor;
    }
    class CurrencyForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AssetManagement.Setup {
    interface CurrencyRow {
        CurrencyId?: number;
        CurrencyName?: string;
    }
    namespace CurrencyRow {
        const idProperty = "CurrencyId";
        const nameProperty = "CurrencyName";
        const localTextPrefix = "Setup.Currency";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CurrencyId = "CurrencyId",
            CurrencyName = "CurrencyName"
        }
    }
}
declare namespace AssetManagement.Setup {
    namespace CurrencyService {
        const baseUrl = "Setup/Currency";
        function Create(request: Serenity.SaveRequest<CurrencyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CurrencyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CurrencyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CurrencyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Setup/Currency/Create",
            Update = "Setup/Currency/Update",
            Delete = "Setup/Currency/Delete",
            Retrieve = "Setup/Currency/Retrieve",
            List = "Setup/Currency/List"
        }
    }
}
declare namespace AssetManagement.Setup {
}
declare namespace AssetManagement.Setup {
    interface DepartmentForm {
        Department: Serenity.StringEditor;
    }
    class DepartmentForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AssetManagement.Setup {
    interface DepartmentRow {
        DepartmentId?: number;
        Department?: string;
    }
    namespace DepartmentRow {
        const idProperty = "DepartmentId";
        const nameProperty = "Department";
        const localTextPrefix = "Setup.Department";
        const lookupKey = "Setup.Department";
        function getLookup(): Q.Lookup<DepartmentRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            DepartmentId = "DepartmentId",
            Department = "Department"
        }
    }
}
declare namespace AssetManagement.Setup {
    namespace DepartmentService {
        const baseUrl = "Setup/Department";
        function Create(request: Serenity.SaveRequest<DepartmentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DepartmentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DepartmentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DepartmentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Setup/Department/Create",
            Update = "Setup/Department/Update",
            Delete = "Setup/Department/Delete",
            Retrieve = "Setup/Department/Retrieve",
            List = "Setup/Department/List"
        }
    }
}
declare namespace AssetManagement.Setup {
}
declare namespace AssetManagement.Setup {
    interface LocationForm {
        SiteId: Serenity.LookupEditor;
        Location: Serenity.StringEditor;
    }
    class LocationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AssetManagement.Setup {
    interface LocationRow {
        LocationId?: number;
        SiteId?: number;
        Location?: string;
        SiteSiteName?: string;
        SiteDescription?: string;
        SiteAddress?: string;
        SiteSuite?: string;
        SiteCity?: string;
        SiteStateId?: number;
    }
    namespace LocationRow {
        const idProperty = "LocationId";
        const nameProperty = "Location";
        const localTextPrefix = "Setup.Location";
        const lookupKey = "Setup.Location";
        function getLookup(): Q.Lookup<LocationRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            LocationId = "LocationId",
            SiteId = "SiteId",
            Location = "Location",
            SiteSiteName = "SiteSiteName",
            SiteDescription = "SiteDescription",
            SiteAddress = "SiteAddress",
            SiteSuite = "SiteSuite",
            SiteCity = "SiteCity",
            SiteStateId = "SiteStateId"
        }
    }
}
declare namespace AssetManagement.Setup {
    namespace LocationService {
        const baseUrl = "Setup/Location";
        function Create(request: Serenity.SaveRequest<LocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LocationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LocationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Setup/Location/Create",
            Update = "Setup/Location/Update",
            Delete = "Setup/Location/Delete",
            Retrieve = "Setup/Location/Retrieve",
            List = "Setup/Location/List"
        }
    }
}
declare namespace AssetManagement.Setup {
}
declare namespace AssetManagement.Setup {
    interface MaintenanceStatusForm {
        MaintenanceStatus: Serenity.StringEditor;
    }
    class MaintenanceStatusForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AssetManagement.Setup {
    interface MaintenanceStatusRow {
        Id?: number;
        MaintenanceStatus?: string;
    }
    namespace MaintenanceStatusRow {
        const idProperty = "Id";
        const nameProperty = "MaintenanceStatus";
        const localTextPrefix = "Setup.MaintenanceStatus";
        const lookupKey = "Setup.MaintenanceStatus";
        function getLookup(): Q.Lookup<MaintenanceStatusRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            MaintenanceStatus = "MaintenanceStatus"
        }
    }
}
declare namespace AssetManagement.Setup {
    namespace MaintenanceStatusService {
        const baseUrl = "Setup/MaintenanceStatus";
        function Create(request: Serenity.SaveRequest<MaintenanceStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MaintenanceStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MaintenanceStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MaintenanceStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Setup/MaintenanceStatus/Create",
            Update = "Setup/MaintenanceStatus/Update",
            Delete = "Setup/MaintenanceStatus/Delete",
            Retrieve = "Setup/MaintenanceStatus/Retrieve",
            List = "Setup/MaintenanceStatus/List"
        }
    }
}
declare namespace AssetManagement.Setup {
}
declare namespace AssetManagement.Setup {
    interface SiteForm {
        SiteName: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Address: Serenity.TextAreaEditor;
        Suite: Serenity.StringEditor;
        City: Serenity.StringEditor;
        StateId: Serenity.LookupEditor;
    }
    class SiteForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AssetManagement.Setup {
    interface SiteRow {
        SiteId?: number;
        SiteName?: string;
        Description?: string;
        Address?: string;
        Suite?: string;
        City?: string;
        StateId?: number;
        StateStateName?: string;
    }
    namespace SiteRow {
        const idProperty = "SiteId";
        const nameProperty = "SiteName";
        const localTextPrefix = "Setup.Site";
        const lookupKey = "Setup.Site";
        function getLookup(): Q.Lookup<SiteRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            SiteId = "SiteId",
            SiteName = "SiteName",
            Description = "Description",
            Address = "Address",
            Suite = "Suite",
            City = "City",
            StateId = "StateId",
            StateStateName = "StateStateName"
        }
    }
}
declare namespace AssetManagement.Setup {
    namespace SiteService {
        const baseUrl = "Setup/Site";
        function Create(request: Serenity.SaveRequest<SiteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SiteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SiteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SiteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Setup/Site/Create",
            Update = "Setup/Site/Update",
            Delete = "Setup/Site/Delete",
            Retrieve = "Setup/Site/Retrieve",
            List = "Setup/Site/List"
        }
    }
}
declare namespace AssetManagement.Setup {
}
declare namespace AssetManagement.Setup {
    interface StateForm {
        StateName: Serenity.StringEditor;
    }
    class StateForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AssetManagement.Setup {
    interface StateRow {
        StateId?: number;
        StateName?: string;
    }
    namespace StateRow {
        const idProperty = "StateId";
        const nameProperty = "StateName";
        const localTextPrefix = "Setup.State";
        const lookupKey = "Setup.State";
        function getLookup(): Q.Lookup<StateRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            StateId = "StateId",
            StateName = "StateName"
        }
    }
}
declare namespace AssetManagement.Setup {
    namespace StateService {
        const baseUrl = "Setup/State";
        function Create(request: Serenity.SaveRequest<StateRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StateRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StateRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StateRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Setup/State/Create",
            Update = "Setup/State/Update",
            Delete = "Setup/State/Delete",
            Retrieve = "Setup/State/Retrieve",
            List = "Setup/State/List"
        }
    }
}
declare namespace AssetManagement.Texts {
}
declare namespace AssetManagement.AddAnAsset {
    class AssetDetailsDialog extends Serenity.EntityDialog<AssetDetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AssetDetailsForm;
        private DocumentGrid;
        private AssetWarrantyGrid;
        private AssetMaintenanceGrid;
        constructor();
        protected afterLoadEntity(): void;
    }
}
declare namespace AssetManagement.AddAnAsset {
    class AssetDetailsGrid extends Serenity.EntityGrid<AssetDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
    }
}
declare namespace AssetManagement.AddAnAsset {
    class AssetMaintenanceDialog extends Serenity.EntityDialog<AssetMaintenanceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AssetMaintenanceForm;
    }
}
declare namespace AssetManagement.AddAnAsset {
    class AssetMaintenanceGrid extends Serenity.EntityGrid<AssetMaintenanceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetMaintenanceDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected addButtonClick(): void;
        protected usePager(): boolean;
        protected getGridCanLoad(): boolean;
        private _AssetId;
        readonly AssetId: number;
        AssetMaintenanceId: number;
    }
}
declare namespace AssetManagement.AddAnAsset {
    class AssetWarrantyDialog extends Serenity.EntityDialog<AssetWarrantyRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AssetWarrantyForm;
    }
}
declare namespace AssetManagement.AddAnAsset {
    class AssetWarrantyGrid extends Serenity.EntityGrid<AssetWarrantyRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssetWarrantyDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected addButtonClick(): void;
        protected usePager(): boolean;
        protected getGridCanLoad(): boolean;
        private _AssetId;
        readonly AssetId: number;
        Id: number;
    }
}
declare namespace AssetManagement.AddAnAsset {
    class DocumentDialog extends Serenity.EntityDialog<DocumentRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DocumentForm;
    }
}
declare namespace AssetManagement.AddAnAsset {
    class DocumentGrid extends Serenity.EntityGrid<DocumentRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DocumentDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected addButtonClick(): void;
        protected usePager(): boolean;
        protected getGridCanLoad(): boolean;
        private _AssetId;
        readonly AssetId: number;
        Id: number;
    }
}
declare namespace AssetManagement.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace AssetManagement.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace AssetManagement.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace AssetManagement.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace AssetManagement.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace AssetManagement.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace AssetManagement.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace AssetManagement.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace AssetManagement.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace AssetManagement.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace AssetManagement.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace AssetManagement.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace AssetManagement.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace AssetManagement.Advanced {
    class CustomersDialog extends Serenity.EntityDialog<CustomersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CustomersForm;
    }
}
declare namespace AssetManagement.Advanced {
    class CustomersGrid extends Serenity.EntityGrid<CustomersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomersDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AssetManagement.Advanced {
    class EmployeeDialog extends Serenity.EntityDialog<EmployeeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EmployeeForm;
    }
}
declare namespace AssetManagement.Advanced {
    class EmployeeGrid extends Serenity.EntityGrid<EmployeeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AssetManagement.Advanced {
    class FundingDialog extends Serenity.EntityDialog<FundingRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: FundingForm;
    }
}
declare namespace AssetManagement.Advanced {
    class FundingGrid extends Serenity.EntityGrid<FundingRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FundingDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AssetManagement.LanguageList {
    function getValue(): string[][];
}
declare namespace AssetManagement.ScriptInitialization {
}
declare namespace AssetManagement {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace AssetManagement.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace AssetManagement.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace AssetManagement.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace AssetManagement.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace AssetManagement.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
        protected enableDeleteColumn(): boolean;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace AssetManagement.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace AssetManagement {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace AssetManagement.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace AssetManagement.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace AssetManagement.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace AssetManagement.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace AssetManagement.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace AssetManagement.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace AssetManagement.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace AssetManagement.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace AssetManagement.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected getTemplate(): string;
    }
}
declare namespace AssetManagement.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace AssetManagement.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace AssetManagement.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace AssetManagement.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace AssetManagement.Setup {
    class BrandDialog extends Serenity.EntityDialog<BrandRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BrandForm;
    }
}
declare namespace AssetManagement.Setup {
    class BrandGrid extends Serenity.EntityGrid<BrandRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BrandDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AssetManagement.Setup {
    class CategoryDialog extends Serenity.EntityDialog<CategoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CategoryForm;
    }
}
declare namespace AssetManagement.Setup {
    class CategoryGrid extends Serenity.EntityGrid<CategoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CategoryDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AssetManagement.Setup {
    class CompanyDialog extends Serenity.EntityDialog<CompanyRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CompanyForm;
    }
}
declare namespace AssetManagement.Setup {
    class CompanyGrid extends Serenity.EntityGrid<CompanyRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CompanyDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AssetManagement.Setup {
    class CountryDialog extends Serenity.EntityDialog<CountryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CountryForm;
    }
}
declare namespace AssetManagement.Setup {
    class CountryGrid extends Serenity.EntityGrid<CountryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CountryDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AssetManagement.Setup {
    class CurrencyDialog extends Serenity.EntityDialog<CurrencyRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CurrencyForm;
    }
}
declare namespace AssetManagement.Setup {
    class CurrencyGrid extends Serenity.EntityGrid<CurrencyRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CurrencyDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AssetManagement.Setup {
    class DepartmentDialog extends Serenity.EntityDialog<DepartmentRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DepartmentForm;
    }
}
declare namespace AssetManagement.Setup {
    class DepartmentGrid extends Serenity.EntityGrid<DepartmentRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DepartmentDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AssetManagement.Setup {
    class LocationDialog extends Serenity.EntityDialog<LocationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: LocationForm;
    }
}
declare namespace AssetManagement.Setup {
    class LocationGrid extends Serenity.EntityGrid<LocationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LocationDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AssetManagement.Setup {
    class MaintenanceStatusDialog extends Serenity.EntityDialog<MaintenanceStatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MaintenanceStatusForm;
    }
}
declare namespace AssetManagement.Setup {
    class MaintenanceStatusGrid extends Serenity.EntityGrid<MaintenanceStatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MaintenanceStatusDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AssetManagement.Setup {
    class SiteDialog extends Serenity.EntityDialog<SiteRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SiteForm;
    }
}
declare namespace AssetManagement.Setup {
    class SiteGrid extends Serenity.EntityGrid<SiteRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SiteDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AssetManagement.Setup {
    class StateDialog extends Serenity.EntityDialog<StateRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: StateForm;
    }
}
declare namespace AssetManagement.Setup {
    class StateGrid extends Serenity.EntityGrid<StateRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StateDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
