namespace AssetManagement.Setup {
    export interface CurrencyRow {
        CurrencyId?: number;
        CurrencyName?: string;
    }

    export namespace CurrencyRow {
        export const idProperty = 'CurrencyId';
        export const nameProperty = 'CurrencyName';
        export const localTextPrefix = 'Setup.Currency';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CurrencyId = "CurrencyId",
            CurrencyName = "CurrencyName"
        }
    }
}

