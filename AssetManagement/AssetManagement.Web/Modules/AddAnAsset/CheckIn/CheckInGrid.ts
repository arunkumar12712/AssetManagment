
namespace AssetManagement.AddAnAsset {

    @Serenity.Decorators.registerClass()
    export class CheckInGrid extends Serenity.EntityGrid<CheckInRow, any> {
        protected getColumnsKey() { return 'AddAnAsset.CheckIn'; }
        protected getDialogType() { return CheckInDialog; }
        protected getIdProperty() { return CheckInRow.idProperty; }
        protected getInsertPermission() { return CheckInRow.insertPermission; }
        protected getLocalTextPrefix() { return CheckInRow.localTextPrefix; }
        protected getService() { return CheckInService.baseUrl; }

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
                this.setEquality(CheckInRow.Fields.AssetId, value);
                this.refresh();
            }
        }
    }
}