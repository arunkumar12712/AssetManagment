
namespace AssetManagement.AddAnAsset {

    @Serenity.Decorators.registerClass()
    export class CheckOutGrid extends Serenity.EntityGrid<CheckOutRow, any> {
        protected getColumnsKey() { return 'AddAnAsset.CheckOut'; }
        protected getDialogType() { return CheckOutDialog; }
        protected getIdProperty() { return CheckOutRow.idProperty; }
        protected getInsertPermission() { return CheckOutRow.insertPermission; }
        protected getLocalTextPrefix() { return CheckOutRow.localTextPrefix; }
        protected getService() { return CheckOutService.baseUrl; }

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
                this.setEquality(CheckOutRow.Fields.AssetId, value);
                this.refresh();
            }
        }
    }
}