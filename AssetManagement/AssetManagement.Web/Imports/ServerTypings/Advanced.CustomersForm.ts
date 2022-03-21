namespace AssetManagement.Advanced {
    export interface CustomersForm {
        CustomerName: Serenity.StringEditor;
        Company: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        City: Serenity.StringEditor;
        StateId: Serenity.LookupEditor;
        Zip: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Notes: Serenity.TextAreaEditor;
    }

    export class CustomersForm extends Serenity.PrefixedContext {
        static formKey = 'Advanced.Customers';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomersForm.init)  {
                CustomersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.LookupEditor;

                Q.initFormType(CustomersForm, [
                    'CustomerName', w0,
                    'Company', w0,
                    'Address', w1,
                    'City', w0,
                    'StateId', w2,
                    'Zip', w0,
                    'CountryId', w2,
                    'Phone', w0,
                    'Email', w0,
                    'Notes', w1
                ]);
            }
        }
    }
}

