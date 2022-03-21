namespace AssetManagement.Setup {
    export interface BrandForm {
        BrandName: Serenity.StringEditor;
    }

    export class BrandForm extends Serenity.PrefixedContext {
        static formKey = 'Setup.Brand';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BrandForm.init)  {
                BrandForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(BrandForm, [
                    'BrandName', w0
                ]);
            }
        }
    }
}

