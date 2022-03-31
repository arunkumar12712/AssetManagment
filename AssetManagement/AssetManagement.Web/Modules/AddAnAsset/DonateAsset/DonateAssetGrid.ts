
namespace AssetManagement.AddAnAsset {

    @Serenity.Decorators.registerClass()
    export class DonateAssetGrid extends Serenity.EntityGrid<DonateAssetRow, any> {
        protected getColumnsKey() { return 'AddAnAsset.DonateAsset'; }
        protected getDialogType() { return DonateAssetDialog; }
        protected getIdProperty() { return DonateAssetRow.idProperty; }
        protected getInsertPermission() { return DonateAssetRow.insertPermission; }
        protected getLocalTextPrefix() { return DonateAssetRow.localTextPrefix; }
        protected getService() { return DonateAssetService.baseUrl; }

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
                this.setEquality(DonateAssetRow.Fields.AssetId, value);
                this.refresh();
            }
        }
    }
}