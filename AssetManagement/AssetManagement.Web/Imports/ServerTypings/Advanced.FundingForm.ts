namespace AssetManagement.Advanced {
    export interface FundingForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Amount: Serenity.DecimalEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        IsActive: Serenity.BooleanEditor;
        Notes: Serenity.TextAreaEditor;
    }

    export class FundingForm extends Serenity.PrefixedContext {
        static formKey = 'Advanced.Funding';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FundingForm.init)  {
                FundingForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.DateEditor;
                var w4 = s.BooleanEditor;

                Q.initFormType(FundingForm, [
                    'Name', w0,
                    'Description', w1,
                    'Amount', w2,
                    'StartDate', w3,
                    'EndDate', w3,
                    'IsActive', w4,
                    'Notes', w1
                ]);
            }
        }
    }
}

