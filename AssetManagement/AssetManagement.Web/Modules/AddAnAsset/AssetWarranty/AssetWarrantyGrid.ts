
namespace AssetManagement.AddAnAsset {

    @Serenity.Decorators.registerClass()
    export class AssetWarrantyGrid extends Serenity.EntityGrid<AssetWarrantyRow, any> {
        protected getColumnsKey() { return 'AddAnAsset.AssetWarranty'; }
        protected getDialogType() { return AssetWarrantyDialog; }
        protected getIdProperty() { return AssetWarrantyRow.idProperty; }
        protected getInsertPermission() { return AssetWarrantyRow.insertPermission; }
        protected getLocalTextPrefix() { return AssetWarrantyRow.localTextPrefix; }
        protected getService() { return AssetWarrantyService.baseUrl; }
        constructor(container: JQuery) {
            super(container);
        }

        protected addButtonClick() {
            this.editItem({
                AssetId: this.AssetId
            });

        }

        //protected getInitialTitle() {
        //    return null;
        //}

        protected usePager() {
            return false;
        }

        //protected getGridCanLoad() {
        //    return this.AssetId != null;
        //}

        private _AssetId: number;

        get AssetId() {
            return this._AssetId;
        }
        set AssetId(value: number) {
            if (this._AssetId != value) {
                this._AssetId = value;
                this.setEquality(AssetWarrantyRow.Fields.AssetId, value);
                this.refresh();
            }
        }
    }
}