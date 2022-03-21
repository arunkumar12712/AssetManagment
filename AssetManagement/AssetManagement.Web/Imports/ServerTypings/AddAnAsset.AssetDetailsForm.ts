namespace AssetManagement.AddAnAsset {
    export interface AssetDetailsForm {
        Description: Serenity.TextAreaEditor;
        AssetTagId: Serenity.IntegerEditor;
        Purchasedfrom: Serenity.StringEditor;
        PurchaseDate: Serenity.DateEditor;
        BrandId: Serenity.LookupEditor;
        Cost: Serenity.DecimalEditor;
        Model: Serenity.StringEditor;
        Color: Serenity.StringEditor;
        SiteId: Serenity.LookupEditor;
        CategoryId: Serenity.LookupEditor;
        LocationId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
        AssetPhoto: Serenity.ImageUploadEditor;
        DepreciableAsset: Serenity.RadioButtonEditor;
        DepreciableCost: Serenity.DecimalEditor;
        AssetLife: Serenity.IntegerEditor;
        SalvageValue: Serenity.DecimalEditor;
        DepreciationMethod: Serenity.StringEditor;
        DateAcquired: Serenity.DateEditor;
    }

    export class AssetDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'AddAnAsset.AssetDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AssetDetailsForm.init)  {
                AssetDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.TextAreaEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.StringEditor;
                var w3 = s.DateEditor;
                var w4 = s.LookupEditor;
                var w5 = s.DecimalEditor;
                var w6 = s.ImageUploadEditor;
                var w7 = s.RadioButtonEditor;

                Q.initFormType(AssetDetailsForm, [
                    'Description', w0,
                    'AssetTagId', w1,
                    'Purchasedfrom', w2,
                    'PurchaseDate', w3,
                    'BrandId', w4,
                    'Cost', w5,
                    'Model', w2,
                    'Color', w2,
                    'SiteId', w4,
                    'CategoryId', w4,
                    'LocationId', w4,
                    'DepartmentId', w4,
                    'AssetPhoto', w6,
                    'DepreciableAsset', w7,
                    'DepreciableCost', w5,
                    'AssetLife', w1,
                    'SalvageValue', w5,
                    'DepreciationMethod', w2,
                    'DateAcquired', w3
                ]);
            }
        }
    }
}

