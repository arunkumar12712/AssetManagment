
namespace AssetManagement.AddAnAsset {

    @Serenity.Decorators.registerClass()
    export class BrokenAssetGrid extends Serenity.EntityGrid<BrokenAssetRow, any> {
        protected getColumnsKey() { return 'AddAnAsset.BrokenAsset'; }
        protected getDialogType() { return BrokenAssetDialog; }
        protected getIdProperty() { return BrokenAssetRow.idProperty; }
        protected getInsertPermission() { return BrokenAssetRow.insertPermission; }
        protected getLocalTextPrefix() { return BrokenAssetRow.localTextPrefix; }
        protected getService() { return BrokenAssetService.baseUrl; }

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
                this.setEquality(BrokenAssetRow.Fields.AssetId, value);
                this.refresh();
            }
        }
    }
}