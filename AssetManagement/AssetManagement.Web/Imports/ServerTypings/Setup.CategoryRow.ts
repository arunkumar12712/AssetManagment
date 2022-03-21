namespace AssetManagement.Setup {
    export interface CategoryRow {
        CategoryId?: number;
        Category?: string;
    }

    export namespace CategoryRow {
        export const idProperty = 'CategoryId';
        export const nameProperty = 'Category';
        export const localTextPrefix = 'Setup.Category';
        export const lookupKey = 'Setup.Category';

        export function getLookup(): Q.Lookup<CategoryRow> {
            return Q.getLookup<CategoryRow>('Setup.Category');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CategoryId = "CategoryId",
            Category = "Category"
        }
    }
}

