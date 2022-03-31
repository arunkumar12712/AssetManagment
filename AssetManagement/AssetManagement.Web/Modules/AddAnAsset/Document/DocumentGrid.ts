
namespace AssetManagement.AddAnAsset {

    @Serenity.Decorators.registerClass()
    export class DocumentGrid extends Serenity.EntityGrid<DocumentRow, any> {
        protected getColumnsKey() { return 'AddAnAsset.Document'; }
        protected getDialogType() { return DocumentDialog; }
        protected getIdProperty() { return DocumentRow.idProperty; }
        protected getInsertPermission() { return DocumentRow.insertPermission; }
        protected getLocalTextPrefix() { return DocumentRow.localTextPrefix; }
        protected getService() { return DocumentService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected addButtonClick() {
            this.editItem({
                AssetId: this.AssetId
            });

        }
        protected usePager() {
            return false;
        }
        private _AssetId: number;

        get AssetId() {
            return this._AssetId;
        }
        set AssetId(value: number) {
            if (this._AssetId != value) {
                this._AssetId = value;
                this.setEquality(DocumentRow.Fields.AssetId, value);
                this.refresh();
            }
        }
    }
}