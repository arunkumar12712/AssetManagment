namespace AssetManagement.AddAnAsset {
    export interface DisposeAssetForm {
        DateDisposed: Serenity.DateEditor;
        DisposeTo: Serenity.StringEditor;
        Notes: Serenity.TextAreaEditor;
        AssetId: Serenity.IntegerEditor;
    }

    export class DisposeAssetForm extends Serenity.PrefixedContext {
        static formKey = 'AddAnAsset.DisposeAsset';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DisposeAssetForm.init)  {
                DisposeAssetForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;
                var w2 = s.TextAreaEditor;
                var w3 = s.IntegerEditor;

                Q.initFormType(DisposeAssetForm, [
                    'DateDisposed', w0,
                    'DisposeTo', w1,
                    'Notes', w2,
                    'AssetId', w3
                ]);
            }
        }
    }
}

