namespace AssetManagement.Setup {
    export interface CompanyForm {
        CompanyName: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
        Suite: Serenity.StringEditor;
        City: Serenity.StringEditor;
        StateId: Serenity.LookupEditor;
        PostalCode: Serenity.StringEditor;
    }

    export class CompanyForm extends Serenity.PrefixedContext {
        static formKey = 'Setup.Company';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CompanyForm.init)  {
                CompanyForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(CompanyForm, [
                    'CompanyName', w0,
                    'CountryId', w1,
                    'Address', w0,
                    'Suite', w0,
                    'City', w0,
                    'StateId', w1,
                    'PostalCode', w0
                ]);
            }
        }
    }
}

