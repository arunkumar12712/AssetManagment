namespace AssetManagement.AddAnAsset {
    export interface BrokenAssetForm {
        DateBroken: Serenity.DateEditor;
        Notes: Serenity.TextAreaEditor;
        AssetId: Serenity.IntegerEditor;
    }

    export class BrokenAssetForm extends Serenity.PrefixedContext {
        static formKey = 'AddAnAsset.BrokenAsset';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BrokenAssetForm.init)  {
                BrokenAssetForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(BrokenAssetForm, [
                    'DateBroken', w0,
                    'Notes', w1,
                    'AssetId', w2
                ]);
            }
        }
    }
}

