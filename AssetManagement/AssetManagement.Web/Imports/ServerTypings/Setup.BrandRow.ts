namespace AssetManagement.Setup {
    export interface BrandRow {
        BrandId?: number;
        BrandName?: string;
    }

    export namespace BrandRow {
        export const idProperty = 'BrandId';
        export const nameProperty = 'BrandName';
        export const localTextPrefix = 'Setup.Brand';
        export const lookupKey = 'Setup.Brand';

        export function getLookup(): Q.Lookup<BrandRow> {
            return Q.getLookup<BrandRow>('Setup.Brand');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            BrandId = "BrandId",
            BrandName = "BrandName"
        }
    }
}

