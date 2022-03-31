
namespace AssetManagement.AddAnAsset {

    @Serenity.Decorators.registerClass()
    export class RepairAssetGrid extends Serenity.EntityGrid<RepairAssetRow, any> {
        protected getColumnsKey() { return 'AddAnAsset.RepairAsset'; }
        protected getDialogType() { return RepairAssetDialog; }
        protected getIdProperty() { return RepairAssetRow.idProperty; }
        protected getInsertPermission() { return RepairAssetRow.insertPermission; }
        protected getLocalTextPrefix() { return RepairAssetRow.localTextPrefix; }
        protected getService() { return RepairAssetService.baseUrl; }

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
                this.setEquality(RepairAssetRow.Fields.AssetId, value);
                this.refresh();
            }
        }
    }
}