namespace AssetManagement.AddAnAsset {
    export interface SellAssetForm {
        SaleDate: Serenity.DateEditor;
        SoldTo: Serenity.StringEditor;
        SaleAmount: Serenity.DecimalEditor;
        Notes: Serenity.StringEditor;
        AssetId: Serenity.IntegerEditor;
    }

    export class SellAssetForm extends Serenity.PrefixedContext {
        static formKey = 'AddAnAsset.SellAsset';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SellAssetForm.init)  {
                SellAssetForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.IntegerEditor;

                Q.initFormType(SellAssetForm, [
                    'SaleDate', w0,
                    'SoldTo', w1,
                    'SaleAmount', w2,
                    'Notes', w1,
                    'AssetId', w3
                ]);
            }
        }
    }
}

