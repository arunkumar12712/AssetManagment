namespace AssetManagement.Setup {
    export interface StateForm {
        StateName: Serenity.StringEditor;
    }

    export class StateForm extends Serenity.PrefixedContext {
        static formKey = 'Setup.State';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!StateForm.init)  {
                StateForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(StateForm, [
                    'StateName', w0
                ]);
            }
        }
    }
}

