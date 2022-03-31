
namespace AssetManagement.AddAnAsset {

    @Serenity.Decorators.registerClass()
    export class SellAssetGrid extends Serenity.EntityGrid<SellAssetRow, any> {
        protected getColumnsKey() { return 'AddAnAsset.SellAsset'; }
        protected getDialogType() { return SellAssetDialog; }
        protected getIdProperty() { return SellAssetRow.idProperty; }
        protected getInsertPermission() { return SellAssetRow.insertPermission; }
        protected getLocalTextPrefix() { return SellAssetRow.localTextPrefix; }
        protected getService() { return SellAssetService.baseUrl; }

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
                this.setEquality(SellAssetRow.Fields.AssetId, value);
                this.refresh();
            }
        }
    }
}