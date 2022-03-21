namespace AssetManagement.AddAnAsset {
    export interface DocumentRow {
        Id?: number;
        Document?: string;
        Description?: string;
        AssetId?: number;
    }

    export namespace DocumentRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Document';
        export const localTextPrefix = 'AddAnAsset.Document';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Document = "Document",
            Description = "Description",
            AssetId = "AssetId"
        }
    }
}

