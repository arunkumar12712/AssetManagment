namespace AssetManagement.Advanced {
    export interface EmployeeForm {
        EmployeeName: Serenity.StringEditor;
        Title: Serenity.TextAreaEditor;
        Phone: Serenity.StringEditor;
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
                var w1 = s.TextAreaEditor;
                var w2 = s.LookupEditor;

                Q.initFormType(EmployeeForm, [
                    'EmployeeName', w0,
                    'Title', w1,
                    'Phone', w0,
                    'Email', w0,
                    'SiteId', w2,
                    'LocationId', w2,
                    'DepartmentId', w2,
                    'Note', w1
                ]);
            }
        }
    }
}

