namespace AssetManagement.Setup {
    export interface CurrencyForm {
        CurrencyName: Serenity.StringEditor;
    }

    export class CurrencyForm extends Serenity.PrefixedContext {
        static formKey = 'Setup.Currency';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CurrencyForm.init)  {
                CurrencyForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CurrencyForm, [
                    'CurrencyName', w0
                ]);
            }
        }
    }
}

