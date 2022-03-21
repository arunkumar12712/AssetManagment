namespace AssetManagement.AddAnAsset {
    export interface DocumentForm {
        Document: Serenity.ImageUploadEditor;
        Description: Serenity.TextAreaEditor;
        AssetId: Serenity.IntegerEditor;
    }

    export class DocumentForm extends Serenity.PrefixedContext {
        static formKey = 'AddAnAsset.Document';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DocumentForm.init)  {
                DocumentForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(DocumentForm, [
                    'Document', w0,
                    'Description', w1,
                    'AssetId', w2
                ]);
            }
        }
    }
}

