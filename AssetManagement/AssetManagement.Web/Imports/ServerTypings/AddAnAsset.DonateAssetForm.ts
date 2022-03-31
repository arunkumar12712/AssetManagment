namespace AssetManagement.AddAnAsset {
    export interface DonateAssetForm {
        DateDonated: Serenity.DateEditor;
        DonateTo: Serenity.StringEditor;
        DonateValue: Serenity.DecimalEditor;
        Deductible: Serenity.RadioButtonEditor;
        Notes: Serenity.TextAreaEditor;
        AssetId: Serenity.IntegerEditor;
    }

    export class DonateAssetForm extends Serenity.PrefixedContext {
        static formKey = 'AddAnAsset.DonateAsset';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DonateAssetForm.init)  {
                DonateAssetForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.RadioButtonEditor;
                var w4 = s.TextAreaEditor;
                var w5 = s.IntegerEditor;

                Q.initFormType(DonateAssetForm, [
                    'DateDonated', w0,
                    'DonateTo', w1,
                    'DonateValue', w2,
                    'Deductible', w3,
                    'Notes', w4,
                    'AssetId', w5
                ]);
            }
        }
    }
}

