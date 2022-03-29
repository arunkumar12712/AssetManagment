namespace AssetManagement.AddAnAsset {
    export interface CheckInForm {
        DueDate: Serenity.DateEditor;
        ReturnDate: Serenity.DateEditor;
        SiteId: Serenity.LookupEditor;
        LocationId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
        Notes: Serenity.TextAreaEditor;
        SendMail: Serenity.BooleanEditor;
        Email: Serenity.StringEditor;
        AssetId: Serenity.IntegerEditor;
    }

    export class CheckInForm extends Serenity.PrefixedContext {
        static formKey = 'AddAnAsset.CheckIn';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CheckInForm.init)  {
                CheckInForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.LookupEditor;
                var w2 = s.TextAreaEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.StringEditor;
                var w5 = s.IntegerEditor;

                Q.initFormType(CheckInForm, [
                    'DueDate', w0,
                    'ReturnDate', w0,
                    'SiteId', w1,
                    'LocationId', w1,
                    'DepartmentId', w1,
                    'Notes', w2,
                    'SendMail', w3,
                    'Email', w4,
                    'AssetId', w5
                ]);
            }
        }
    }
}

