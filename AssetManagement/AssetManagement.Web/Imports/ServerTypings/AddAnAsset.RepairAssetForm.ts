namespace AssetManagement.AddAnAsset {
    export interface RepairAssetForm {
        ScheduleDate: Serenity.DateEditor;
        AssignedTo: Serenity.StringEditor;
        DateCompleted: Serenity.DateEditor;
        RepairCost: Serenity.DecimalEditor;
        Notes: Serenity.TextAreaEditor;
        AssetId: Serenity.IntegerEditor;
    }

    export class RepairAssetForm extends Serenity.PrefixedContext {
        static formKey = 'AddAnAsset.RepairAsset';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RepairAssetForm.init)  {
                RepairAssetForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.TextAreaEditor;
                var w4 = s.IntegerEditor;

                Q.initFormType(RepairAssetForm, [
                    'ScheduleDate', w0,
                    'AssignedTo', w1,
                    'DateCompleted', w0,
                    'RepairCost', w2,
                    'Notes', w3,
                    'AssetId', w4
                ]);
            }
        }
    }
}

