namespace AssetManagement.Setup {
    export interface SiteForm {
        SiteName: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Address: Serenity.TextAreaEditor;
        Suite: Serenity.StringEditor;
        City: Serenity.StringEditor;
        StateId: Serenity.LookupEditor;
    }

    export class SiteForm extends Serenity.PrefixedContext {
        static formKey = 'Setup.Site';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SiteForm.init)  {
                SiteForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.LookupEditor;

                Q.initFormType(SiteForm, [
                    'SiteName', w0,
                    'Description', w1,
                    'Address', w1,
                    'Suite', w0,
                    'City', w0,
                    'StateId', w2
                ]);
            }
        }
    }
}

