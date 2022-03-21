namespace AssetManagement.Setup {
    export interface StateRow {
        StateId?: number;
        StateName?: string;
    }

    export namespace StateRow {
        export const idProperty = 'StateId';
        export const nameProperty = 'StateName';
        export const localTextPrefix = 'Setup.State';
        export const lookupKey = 'Setup.State';

        export function getLookup(): Q.Lookup<StateRow> {
            return Q.getLookup<StateRow>('Setup.State');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            StateId = "StateId",
            StateName = "StateName"
        }
    }
}

