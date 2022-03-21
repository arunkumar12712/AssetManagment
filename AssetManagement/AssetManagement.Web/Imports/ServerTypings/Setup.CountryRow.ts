﻿namespace AssetManagement.Setup {
    export interface CountryRow {
        CountryId?: number;
        CountryName?: string;
    }

    export namespace CountryRow {
        export const idProperty = 'CountryId';
        export const nameProperty = 'CountryName';
        export const localTextPrefix = 'Setup.Country';
        export const lookupKey = 'Company.Country';

        export function getLookup(): Q.Lookup<CountryRow> {
            return Q.getLookup<CountryRow>('Company.Country');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CountryId = "CountryId",
            CountryName = "CountryName"
        }
    }
}

