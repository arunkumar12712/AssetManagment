
namespace AssetManagement.AddAnAsset {

    @Serenity.Decorators.registerClass()
    export class DisposeAssetGrid extends Serenity.EntityGrid<DisposeAssetRow, any> {
        protected getColumnsKey() { return 'AddAnAsset.DisposeAsset'; }
        protected getDialogType() { return DisposeAssetDialog; }
        protected getIdProperty() { return DisposeAssetRow.idProperty; }
        protected getInsertPermission() { return DisposeAssetRow.insertPermission; }
        protected getLocalTextPrefix() { return DisposeAssetRow.localTextPrefix; }
        protected getService() { return DisposeAssetService.baseUrl; }

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
                this.setEquality(DisposeAssetRow.Fields.AssetId, value);
                this.refresh();
            }
        }
    }
}