namespace AssetManagement.Setup {
    export interface CompanyRow {
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

    export namespace CompanyRow {
        export const idProperty = 'CompanyId';
        export const nameProperty = 'CompanyName';
        export const localTextPrefix = 'Setup.Company';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
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

