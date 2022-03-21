namespace AssetManagement.AddAnAsset {
    export interface AssetMaintenanceForm {
        Title: Serenity.TextAreaEditor;
        Details: Serenity.TextAreaEditor;
        DueDate: Serenity.DateEditor;
        MaintenanceBy: Serenity.TextAreaEditor;
        Id: Serenity.LookupEditor;
        DateCompleted: Serenity.DateEditor;
        AssetId: Serenity.IntegerEditor;
    }

    export class AssetMaintenanceForm extends Serenity.PrefixedContext {
        static formKey = 'AddAnAsset.AssetMaintenance';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AssetMaintenanceForm.init)  {
                AssetMaintenanceForm.init = true;

                var s = Serenity;
                var w0 = s.TextAreaEditor;
                var w1 = s.DateEditor;
                var w2 = s.LookupEditor;
                var w3 = s.IntegerEditor;

                Q.initFormType(AssetMaintenanceForm, [
                    'Title', w0,
                    'Details', w0,
                    'DueDate', w1,
                    'MaintenanceBy', w0,
                    'Id', w2,
                    'DateCompleted', w1,
                    'AssetId', w3
                ]);
            }
        }
    }
}

