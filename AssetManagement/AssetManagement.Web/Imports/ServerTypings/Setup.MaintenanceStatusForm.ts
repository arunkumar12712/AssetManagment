namespace AssetManagement.Setup {
    export interface MaintenanceStatusForm {
        MaintenanceStatus: Serenity.StringEditor;
    }

    export class MaintenanceStatusForm extends Serenity.PrefixedContext {
        static formKey = 'Setup.MaintenanceStatus';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MaintenanceStatusForm.init)  {
                MaintenanceStatusForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(MaintenanceStatusForm, [
                    'MaintenanceStatus', w0
                ]);
            }
        }
    }
}

