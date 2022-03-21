namespace AssetManagement.AddAnAsset {
    export interface AssetWarrantyForm {
        Length: Serenity.IntegerEditor;
        ExpirationDate: Serenity.DateEditor;
        Notes: Serenity.TextAreaEditor;
        AssetId: Serenity.IntegerEditor;
    }

    export class AssetWarrantyForm extends Serenity.PrefixedContext {
        static formKey = 'AddAnAsset.AssetWarranty';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AssetWarrantyForm.init)  {
                AssetWarrantyForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(AssetWarrantyForm, [
                    'Length', w0,
                    'ExpirationDate', w1,
                    'Notes', w2,
                    'AssetId', w0
                ]);
            }
        }
    }
}

