
namespace AssetManagement.AddAnAsset {

    @Serenity.Decorators.registerClass()
    export class DocumentDialog extends Serenity.EntityDialog<DocumentRow, any> {
        protected getFormKey() { return DocumentForm.formKey; }
        protected getIdProperty() { return DocumentRow.idProperty; }
        protected getLocalTextPrefix() { return DocumentRow.localTextPrefix; }
        protected getNameProperty() { return DocumentRow.nameProperty; }
        protected getService() { return DocumentService.baseUrl; }
        protected getDeletePermission() { return DocumentRow.deletePermission; }
        protected getInsertPermission() { return DocumentRow.insertPermission; }
        protected getUpdatePermission() { return DocumentRow.updatePermission; }

        protected form = new DocumentForm(this.idPrefix);

    }
}