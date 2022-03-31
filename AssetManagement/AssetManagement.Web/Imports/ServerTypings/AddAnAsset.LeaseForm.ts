namespace AssetManagement.AddAnAsset {
    export interface LeaseForm {
        LeaseBegins: Serenity.DateEditor;
        CustomerId: Serenity.LookupEditor;
        LeaseExpires: Serenity.DateEditor;
        Notes: Serenity.TextAreaEditor;
        SendEmail: Serenity.BooleanEditor;
        Email: Serenity.StringEditor;
        AssetId: Serenity.IntegerEditor;
    }

    export class LeaseForm extends Serenity.PrefixedContext {
        static formKey = 'AddAnAsset.Lease';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LeaseForm.init)  {
                LeaseForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.LookupEditor;
                var w2 = s.TextAreaEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.StringEditor;
                var w5 = s.IntegerEditor;

                Q.initFormType(LeaseForm, [
                    'LeaseBegins', w0,
                    'CustomerId', w1,
                    'LeaseExpires', w0,
                    'Notes', w2,
                    'SendEmail', w3,
                    'Email', w4,
                    'AssetId', w5
                ]);
            }
        }
    }
}

