namespace AssetManagement.Setup {
    export interface DepartmentRow {
        DepartmentId?: number;
        Department?: string;
    }

    export namespace DepartmentRow {
        export const idProperty = 'DepartmentId';
        export const nameProperty = 'Department';
        export const localTextPrefix = 'Setup.Department';
        export const lookupKey = 'Setup.Department';

        export function getLookup(): Q.Lookup<DepartmentRow> {
            return Q.getLookup<DepartmentRow>('Setup.Department');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            DepartmentId = "DepartmentId",
            Department = "Department"
        }
    }
}

