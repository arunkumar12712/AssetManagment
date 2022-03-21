namespace AssetManagement.Advanced {
    export interface EmployeeForm {
        EmployeeName: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Phone: Serenity.IntegerEditor;
        Email: Serenity.StringEditor;
        SiteId: Serenity.LookupEditor;
        LocationId: Serenity.LookupEditor;
        DepartmentId: Serenity.LookupEditor;
        Note: Serenity.TextAreaEditor;
    }

    export class EmployeeForm extends Serenity.PrefixedContext {
        static formKey = 'Advanced.Employee';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmployeeForm.init)  {
                EmployeeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.LookupEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(EmployeeForm, [
                    'EmployeeName', w0,
                    'Title', w0,
                    'Phone', w1,
                    'Email', w0,
                    'SiteId', w2,
                    'LocationId', w2,
                    'DepartmentId', w2,
                    'Note', w3
                ]);
            }
        }
    }
}

