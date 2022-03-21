namespace AssetManagement.Setup {
    export interface LocationForm {
        SiteId: Serenity.LookupEditor;
        Location: Serenity.StringEditor;
    }

    export class LocationForm extends Serenity.PrefixedContext {
        static formKey = 'Setup.Location';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LocationForm.init)  {
                LocationForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(LocationForm, [
                    'SiteId', w0,
                    'Location', w1
                ]);
            }
        }
    }
}

