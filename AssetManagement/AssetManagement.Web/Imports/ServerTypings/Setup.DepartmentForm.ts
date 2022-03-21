﻿namespace AssetManagement.Setup {
    export interface DepartmentForm {
        Department: Serenity.StringEditor;
    }

    export class DepartmentForm extends Serenity.PrefixedContext {
        static formKey = 'Setup.Department';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DepartmentForm.init)  {
                DepartmentForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(DepartmentForm, [
                    'Department', w0
                ]);
            }
        }
    }
}

