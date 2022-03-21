namespace AssetManagement.AddAnAsset {
    export interface AssetWarrantyRow {
        Id?: number;
        Length?: number;
        ExpirationDate?: string;
        Notes?: string;
        AssetId?: number;
    }

    export namespace AssetWarrantyRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Notes';
        export const localTextPrefix = 'AddAnAsset.AssetWarranty';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Length = "Length",
            ExpirationDate = "ExpirationDate",
            Notes = "Notes",
            AssetId = "AssetId"
        }
    }
}

