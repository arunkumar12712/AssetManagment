namespace AssetManagement.Setup {
    export interface CategoryForm {
        Category: Serenity.StringEditor;
    }

    export class CategoryForm extends Serenity.PrefixedContext {
        static formKey = 'Setup.Category';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CategoryForm.init)  {
                CategoryForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CategoryForm, [
                    'Category', w0
                ]);
            }
        }
    }
}

