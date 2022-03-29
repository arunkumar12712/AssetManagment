namespace AssetManagement.AddAnAsset {
    export interface CheckOutForm {
        CheckOutDate: Serenity.DateEditor;
        CheckOutTo: Serenity.RadioButtonEditor;
        EmployeeId: Serenity.LookupEditor;
        NoDueDate: Serenity.BooleanEditor;
        DueDate: Serenity.DateEditor;
        SiteId: Serenity.LookupEditor;
        LocationId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
        Notes: Serenity.TextAreaEditor;
        SendMail: Serenity.BooleanEditor;
        Email: Serenity.StringEditor;
        AssetId: Serenity.IntegerEditor;
    }

    export class CheckOutForm extends Serenity.PrefixedContext {
        static formKey = 'AddAnAsset.CheckOut';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CheckOutForm.init)  {
                CheckOutForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.RadioButtonEditor;
                var w2 = s.LookupEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.TextAreaEditor;
                var w5 = s.StringEditor;
                var w6 = s.IntegerEditor;

                Q.initFormType(CheckOutForm, [
                    'CheckOutDate', w0,
                    'CheckOutTo', w1,
                    'EmployeeId', w2,
                    'NoDueDate', w3,
                    'DueDate', w0,
                    'SiteId', w2,
                    'LocationId', w2,
                    'DepartmentId', w2,
                    'Notes', w4,
                    'SendMail', w3,
                    'Email', w5,
                    'AssetId', w6
                ]);
            }
        }
    }
}

