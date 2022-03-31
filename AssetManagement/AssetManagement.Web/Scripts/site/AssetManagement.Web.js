var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var AssetDetailsForm = /** @class */ (function (_super) {
            __extends(AssetDetailsForm, _super);
            function AssetDetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AssetDetailsForm.init) {
                    AssetDetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.TextAreaEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.DateEditor;
                    var w4 = s.LookupEditor;
                    var w5 = s.DecimalEditor;
                    var w6 = s.ImageUploadEditor;
                    var w7 = s.RadioButtonEditor;
                    Q.initFormType(AssetDetailsForm, [
                        'Description', w0,
                        'AssetTagId', w1,
                        'Purchasedfrom', w2,
                        'PurchaseDate', w3,
                        'BrandId', w4,
                        'Cost', w5,
                        'Model', w2,
                        'Color', w2,
                        'SiteId', w4,
                        'CategoryId', w4,
                        'LocationId', w4,
                        'DepartmentId', w4,
                        'AssetPhoto', w6,
                        'DepreciableAsset', w7,
                        'DepreciableCost', w5,
                        'AssetLife', w1,
                        'SalvageValue', w5,
                        'DepreciationMethod', w2,
                        'DateAcquired', w3
                    ]);
                }
                return _this;
            }
            AssetDetailsForm.formKey = 'AddAnAsset.AssetDetails';
            return AssetDetailsForm;
        }(Serenity.PrefixedContext));
        AddAnAsset.AssetDetailsForm = AssetDetailsForm;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var AssetDetailsRow;
        (function (AssetDetailsRow) {
            AssetDetailsRow.idProperty = 'AssetId';
            AssetDetailsRow.nameProperty = 'Description';
            AssetDetailsRow.localTextPrefix = 'AddAnAsset.AssetDetails';
            AssetDetailsRow.deletePermission = 'Administration:General';
            AssetDetailsRow.insertPermission = 'Administration:General';
            AssetDetailsRow.readPermission = 'Administration:General';
            AssetDetailsRow.updatePermission = 'Administration:General';
        })(AssetDetailsRow = AddAnAsset.AssetDetailsRow || (AddAnAsset.AssetDetailsRow = {}));
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var AssetDetailsService;
        (function (AssetDetailsService) {
            AssetDetailsService.baseUrl = 'AddAnAsset/AssetDetails';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetDetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AssetDetailsService = AddAnAsset.AssetDetailsService || (AddAnAsset.AssetDetailsService = {}));
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var AssetMaintenanceForm = /** @class */ (function (_super) {
            __extends(AssetMaintenanceForm, _super);
            function AssetMaintenanceForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AssetMaintenanceForm.init) {
                    AssetMaintenanceForm.init = true;
                    var s = Serenity;
                    var w0 = s.TextAreaEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.IntegerEditor;
                    Q.initFormType(AssetMaintenanceForm, [
                        'Title', w0,
                        'Details', w0,
                        'DueDate', w1,
                        'MaintenanceBy', w0,
                        'Id', w2,
                        'DateCompleted', w1,
                        'AssetId', w3
                    ]);
                }
                return _this;
            }
            AssetMaintenanceForm.formKey = 'AddAnAsset.AssetMaintenance';
            return AssetMaintenanceForm;
        }(Serenity.PrefixedContext));
        AddAnAsset.AssetMaintenanceForm = AssetMaintenanceForm;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var AssetMaintenanceRow;
        (function (AssetMaintenanceRow) {
            AssetMaintenanceRow.idProperty = 'AssetMaintenanceId';
            AssetMaintenanceRow.nameProperty = 'Title';
            AssetMaintenanceRow.localTextPrefix = 'AddAnAsset.AssetMaintenance';
            AssetMaintenanceRow.deletePermission = 'Administration:General';
            AssetMaintenanceRow.insertPermission = 'Administration:General';
            AssetMaintenanceRow.readPermission = 'Administration:General';
            AssetMaintenanceRow.updatePermission = 'Administration:General';
        })(AssetMaintenanceRow = AddAnAsset.AssetMaintenanceRow || (AddAnAsset.AssetMaintenanceRow = {}));
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var AssetMaintenanceService;
        (function (AssetMaintenanceService) {
            AssetMaintenanceService.baseUrl = 'AddAnAsset/AssetMaintenance';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetMaintenanceService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetMaintenanceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AssetMaintenanceService = AddAnAsset.AssetMaintenanceService || (AddAnAsset.AssetMaintenanceService = {}));
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var AssetWarrantyForm = /** @class */ (function (_super) {
            __extends(AssetWarrantyForm, _super);
            function AssetWarrantyForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AssetWarrantyForm.init) {
                    AssetWarrantyForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.TextAreaEditor;
                    Q.initFormType(AssetWarrantyForm, [
                        'Length', w0,
                        'ExpirationDate', w1,
                        'Notes', w2,
                        'AssetId', w0
                    ]);
                }
                return _this;
            }
            AssetWarrantyForm.formKey = 'AddAnAsset.AssetWarranty';
            return AssetWarrantyForm;
        }(Serenity.PrefixedContext));
        AddAnAsset.AssetWarrantyForm = AssetWarrantyForm;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var AssetWarrantyRow;
        (function (AssetWarrantyRow) {
            AssetWarrantyRow.idProperty = 'Id';
            AssetWarrantyRow.nameProperty = 'Notes';
            AssetWarrantyRow.localTextPrefix = 'AddAnAsset.AssetWarranty';
            AssetWarrantyRow.deletePermission = 'Administration:General';
            AssetWarrantyRow.insertPermission = 'Administration:General';
            AssetWarrantyRow.readPermission = 'Administration:General';
            AssetWarrantyRow.updatePermission = 'Administration:General';
        })(AssetWarrantyRow = AddAnAsset.AssetWarrantyRow || (AddAnAsset.AssetWarrantyRow = {}));
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var AssetWarrantyService;
        (function (AssetWarrantyService) {
            AssetWarrantyService.baseUrl = 'AddAnAsset/AssetWarranty';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AssetWarrantyService[x] = function (r, s, o) {
                    return Q.serviceRequest(AssetWarrantyService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AssetWarrantyService = AddAnAsset.AssetWarrantyService || (AddAnAsset.AssetWarrantyService = {}));
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var BrokenAssetForm = /** @class */ (function (_super) {
            __extends(BrokenAssetForm, _super);
            function BrokenAssetForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BrokenAssetForm.init) {
                    BrokenAssetForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(BrokenAssetForm, [
                        'DateBroken', w0,
                        'Notes', w1,
                        'AssetId', w2
                    ]);
                }
                return _this;
            }
            BrokenAssetForm.formKey = 'AddAnAsset.BrokenAsset';
            return BrokenAssetForm;
        }(Serenity.PrefixedContext));
        AddAnAsset.BrokenAssetForm = BrokenAssetForm;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var BrokenAssetRow;
        (function (BrokenAssetRow) {
            BrokenAssetRow.idProperty = 'BrokenId';
            BrokenAssetRow.nameProperty = 'Notes';
            BrokenAssetRow.localTextPrefix = 'AddAnAsset.BrokenAsset';
            BrokenAssetRow.deletePermission = 'Administration:General';
            BrokenAssetRow.insertPermission = 'Administration:General';
            BrokenAssetRow.readPermission = 'Administration:General';
            BrokenAssetRow.updatePermission = 'Administration:General';
        })(BrokenAssetRow = AddAnAsset.BrokenAssetRow || (AddAnAsset.BrokenAssetRow = {}));
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var BrokenAssetService;
        (function (BrokenAssetService) {
            BrokenAssetService.baseUrl = 'AddAnAsset/BrokenAsset';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BrokenAssetService[x] = function (r, s, o) {
                    return Q.serviceRequest(BrokenAssetService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BrokenAssetService = AddAnAsset.BrokenAssetService || (AddAnAsset.BrokenAssetService = {}));
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var CheckInForm = /** @class */ (function (_super) {
            __extends(CheckInForm, _super);
            function CheckInForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CheckInForm.init) {
                    CheckInForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.BooleanEditor;
                    var w4 = s.StringEditor;
                    var w5 = s.IntegerEditor;
                    Q.initFormType(CheckInForm, [
                        'DueDate', w0,
                        'ReturnDate', w0,
                        'SiteId', w1,
                        'LocationId', w1,
                        'DepartmentId', w1,
                        'Notes', w2,
                        'SendMail', w3,
                        'Email', w4,
                        'AssetId', w5
                    ]);
                }
                return _this;
            }
            CheckInForm.formKey = 'AddAnAsset.CheckIn';
            return CheckInForm;
        }(Serenity.PrefixedContext));
        AddAnAsset.CheckInForm = CheckInForm;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var CheckInRow;
        (function (CheckInRow) {
            CheckInRow.idProperty = 'CheckId';
            CheckInRow.nameProperty = 'Notes';
            CheckInRow.localTextPrefix = 'AddAnAsset.CheckIn';
            CheckInRow.deletePermission = 'Administration:General';
            CheckInRow.insertPermission = 'Administration:General';
            CheckInRow.readPermission = 'Administration:General';
            CheckInRow.updatePermission = 'Administration:General';
        })(CheckInRow = AddAnAsset.CheckInRow || (AddAnAsset.CheckInRow = {}));
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var CheckInService;
        (function (CheckInService) {
            CheckInService.baseUrl = 'AddAnAsset/CheckIn';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CheckInService[x] = function (r, s, o) {
                    return Q.serviceRequest(CheckInService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CheckInService = AddAnAsset.CheckInService || (AddAnAsset.CheckInService = {}));
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var CheckOutForm = /** @class */ (function (_super) {
            __extends(CheckOutForm, _super);
            function CheckOutForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CheckOutForm.init) {
                    CheckOutForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.RadioButtonEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.BooleanEditor;
                    var w4 = s.TextAreaEditor;
                    var w5 = s.StringEditor;
                    var w6 = s.IntegerEditor;
                    Q.initFormType(CheckOutForm, [
                        'CheckOutDate', w0,
                        'CheckOutTo', w1,
                        'EmployeeId', w2,
                        'NoDueDate', w3,
                        'DueDate', w0,
                        'SiteId', w2,
                        'LocationId', w2,
                        'DepartmentId', w2,
                        'Notes', w4,
                        'SendMail', w3,
                        'Email', w5,
                        'AssetId', w6
                    ]);
                }
                return _this;
            }
            CheckOutForm.formKey = 'AddAnAsset.CheckOut';
            return CheckOutForm;
        }(Serenity.PrefixedContext));
        AddAnAsset.CheckOutForm = CheckOutForm;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var CheckOutRow;
        (function (CheckOutRow) {
            CheckOutRow.idProperty = 'CheckOutId';
            CheckOutRow.nameProperty = 'Notes';
            CheckOutRow.localTextPrefix = 'AddAnAsset.CheckOut';
            CheckOutRow.deletePermission = 'Administration:General';
            CheckOutRow.insertPermission = 'Administration:General';
            CheckOutRow.readPermission = 'Administration:General';
            CheckOutRow.updatePermission = 'Administration:General';
        })(CheckOutRow = AddAnAsset.CheckOutRow || (AddAnAsset.CheckOutRow = {}));
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var CheckOutService;
        (function (CheckOutService) {
            CheckOutService.baseUrl = 'AddAnAsset/CheckOut';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CheckOutService[x] = function (r, s, o) {
                    return Q.serviceRequest(CheckOutService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CheckOutService = AddAnAsset.CheckOutService || (AddAnAsset.CheckOutService = {}));
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var DisposeAssetForm = /** @class */ (function (_super) {
            __extends(DisposeAssetForm, _super);
            function DisposeAssetForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DisposeAssetForm.init) {
                    DisposeAssetForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.IntegerEditor;
                    Q.initFormType(DisposeAssetForm, [
                        'DateDisposed', w0,
                        'DisposeTo', w1,
                        'Notes', w2,
                        'AssetId', w3
                    ]);
                }
                return _this;
            }
            DisposeAssetForm.formKey = 'AddAnAsset.DisposeAsset';
            return DisposeAssetForm;
        }(Serenity.PrefixedContext));
        AddAnAsset.DisposeAssetForm = DisposeAssetForm;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var DisposeAssetRow;
        (function (DisposeAssetRow) {
            DisposeAssetRow.idProperty = 'DisposeId';
            DisposeAssetRow.nameProperty = 'DisposeTo';
            DisposeAssetRow.localTextPrefix = 'AddAnAsset.DisposeAsset';
            DisposeAssetRow.deletePermission = 'Administration:General';
            DisposeAssetRow.insertPermission = 'Administration:General';
            DisposeAssetRow.readPermission = 'Administration:General';
            DisposeAssetRow.updatePermission = 'Administration:General';
        })(DisposeAssetRow = AddAnAsset.DisposeAssetRow || (AddAnAsset.DisposeAssetRow = {}));
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var DisposeAssetService;
        (function (DisposeAssetService) {
            DisposeAssetService.baseUrl = 'AddAnAsset/DisposeAsset';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DisposeAssetService[x] = function (r, s, o) {
                    return Q.serviceRequest(DisposeAssetService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DisposeAssetService = AddAnAsset.DisposeAssetService || (AddAnAsset.DisposeAssetService = {}));
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var DocumentForm = /** @class */ (function (_super) {
            __extends(DocumentForm, _super);
            function DocumentForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DocumentForm.init) {
                    DocumentForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(DocumentForm, [
                        'Document', w0,
                        'Description', w1,
                        'AssetId', w2
                    ]);
                }
                return _this;
            }
            DocumentForm.formKey = 'AddAnAsset.Document';
            return DocumentForm;
        }(Serenity.PrefixedContext));
        AddAnAsset.DocumentForm = DocumentForm;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var DocumentRow;
        (function (DocumentRow) {
            DocumentRow.idProperty = 'Id';
            DocumentRow.nameProperty = 'Document';
            DocumentRow.localTextPrefix = 'AddAnAsset.Document';
            DocumentRow.deletePermission = 'Administration:General';
            DocumentRow.insertPermission = 'Administration:General';
            DocumentRow.readPermission = 'Administration:General';
            DocumentRow.updatePermission = 'Administration:General';
        })(DocumentRow = AddAnAsset.DocumentRow || (AddAnAsset.DocumentRow = {}));
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var DocumentService;
        (function (DocumentService) {
            DocumentService.baseUrl = 'AddAnAsset/Document';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DocumentService[x] = function (r, s, o) {
                    return Q.serviceRequest(DocumentService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DocumentService = AddAnAsset.DocumentService || (AddAnAsset.DocumentService = {}));
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var DonateAssetForm = /** @class */ (function (_super) {
            __extends(DonateAssetForm, _super);
            function DonateAssetForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DonateAssetForm.init) {
                    DonateAssetForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.RadioButtonEditor;
                    var w4 = s.TextAreaEditor;
                    var w5 = s.IntegerEditor;
                    Q.initFormType(DonateAssetForm, [
                        'DateDonated', w0,
                        'DonateTo', w1,
                        'DonateValue', w2,
                        'Deductible', w3,
                        'Notes', w4,
                        'AssetId', w5
                    ]);
                }
                return _this;
            }
            DonateAssetForm.formKey = 'AddAnAsset.DonateAsset';
            return DonateAssetForm;
        }(Serenity.PrefixedContext));
        AddAnAsset.DonateAssetForm = DonateAssetForm;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var DonateAssetRow;
        (function (DonateAssetRow) {
            DonateAssetRow.idProperty = 'DonateId';
            DonateAssetRow.nameProperty = 'DonateTo';
            DonateAssetRow.localTextPrefix = 'AddAnAsset.DonateAsset';
            DonateAssetRow.deletePermission = 'Administration:General';
            DonateAssetRow.insertPermission = 'Administration:General';
            DonateAssetRow.readPermission = 'Administration:General';
            DonateAssetRow.updatePermission = 'Administration:General';
        })(DonateAssetRow = AddAnAsset.DonateAssetRow || (AddAnAsset.DonateAssetRow = {}));
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var DonateAssetService;
        (function (DonateAssetService) {
            DonateAssetService.baseUrl = 'AddAnAsset/DonateAsset';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DonateAssetService[x] = function (r, s, o) {
                    return Q.serviceRequest(DonateAssetService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DonateAssetService = AddAnAsset.DonateAssetService || (AddAnAsset.DonateAssetService = {}));
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var LeaseForm = /** @class */ (function (_super) {
            __extends(LeaseForm, _super);
            function LeaseForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LeaseForm.init) {
                    LeaseForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.BooleanEditor;
                    var w4 = s.StringEditor;
                    var w5 = s.IntegerEditor;
                    Q.initFormType(LeaseForm, [
                        'LeaseBegins', w0,
                        'CustomerId', w1,
                        'LeaseExpires', w0,
                        'Notes', w2,
                        'SendEmail', w3,
                        'Email', w4,
                        'AssetId', w5
                    ]);
                }
                return _this;
            }
            LeaseForm.formKey = 'AddAnAsset.Lease';
            return LeaseForm;
        }(Serenity.PrefixedContext));
        AddAnAsset.LeaseForm = LeaseForm;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var LeaseRow;
        (function (LeaseRow) {
            LeaseRow.idProperty = 'LeaseId';
            LeaseRow.nameProperty = 'Notes';
            LeaseRow.localTextPrefix = 'AddAnAsset.Lease';
            LeaseRow.deletePermission = 'Administration:General';
            LeaseRow.insertPermission = 'Administration:General';
            LeaseRow.readPermission = 'Administration:General';
            LeaseRow.updatePermission = 'Administration:General';
        })(LeaseRow = AddAnAsset.LeaseRow || (AddAnAsset.LeaseRow = {}));
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var LeaseService;
        (function (LeaseService) {
            LeaseService.baseUrl = 'AddAnAsset/Lease';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LeaseService[x] = function (r, s, o) {
                    return Q.serviceRequest(LeaseService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LeaseService = AddAnAsset.LeaseService || (AddAnAsset.LeaseService = {}));
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var RepairAssetForm = /** @class */ (function (_super) {
            __extends(RepairAssetForm, _super);
            function RepairAssetForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RepairAssetForm.init) {
                    RepairAssetForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.TextAreaEditor;
                    var w4 = s.IntegerEditor;
                    Q.initFormType(RepairAssetForm, [
                        'ScheduleDate', w0,
                        'AssignedTo', w1,
                        'DateCompleted', w0,
                        'RepairCost', w2,
                        'Notes', w3,
                        'AssetId', w4
                    ]);
                }
                return _this;
            }
            RepairAssetForm.formKey = 'AddAnAsset.RepairAsset';
            return RepairAssetForm;
        }(Serenity.PrefixedContext));
        AddAnAsset.RepairAssetForm = RepairAssetForm;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var RepairAssetRow;
        (function (RepairAssetRow) {
            RepairAssetRow.idProperty = 'Id';
            RepairAssetRow.nameProperty = 'AssignedTo';
            RepairAssetRow.localTextPrefix = 'AddAnAsset.RepairAsset';
            RepairAssetRow.deletePermission = 'Administration:General';
            RepairAssetRow.insertPermission = 'Administration:General';
            RepairAssetRow.readPermission = 'Administration:General';
            RepairAssetRow.updatePermission = 'Administration:General';
        })(RepairAssetRow = AddAnAsset.RepairAssetRow || (AddAnAsset.RepairAssetRow = {}));
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var RepairAssetService;
        (function (RepairAssetService) {
            RepairAssetService.baseUrl = 'AddAnAsset/RepairAsset';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RepairAssetService[x] = function (r, s, o) {
                    return Q.serviceRequest(RepairAssetService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RepairAssetService = AddAnAsset.RepairAssetService || (AddAnAsset.RepairAssetService = {}));
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var SellAssetForm = /** @class */ (function (_super) {
            __extends(SellAssetForm, _super);
            function SellAssetForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SellAssetForm.init) {
                    SellAssetForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.IntegerEditor;
                    Q.initFormType(SellAssetForm, [
                        'SaleDate', w0,
                        'SoldTo', w1,
                        'SaleAmount', w2,
                        'Notes', w1,
                        'AssetId', w3
                    ]);
                }
                return _this;
            }
            SellAssetForm.formKey = 'AddAnAsset.SellAsset';
            return SellAssetForm;
        }(Serenity.PrefixedContext));
        AddAnAsset.SellAssetForm = SellAssetForm;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var SellAssetRow;
        (function (SellAssetRow) {
            SellAssetRow.idProperty = 'SellId';
            SellAssetRow.nameProperty = 'SoldTo';
            SellAssetRow.localTextPrefix = 'AddAnAsset.SellAsset';
            SellAssetRow.deletePermission = 'Administration:General';
            SellAssetRow.insertPermission = 'Administration:General';
            SellAssetRow.readPermission = 'Administration:General';
            SellAssetRow.updatePermission = 'Administration:General';
        })(SellAssetRow = AddAnAsset.SellAssetRow || (AddAnAsset.SellAssetRow = {}));
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var SellAssetService;
        (function (SellAssetService) {
            SellAssetService.baseUrl = 'AddAnAsset/SellAsset';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SellAssetService[x] = function (r, s, o) {
                    return Q.serviceRequest(SellAssetService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SellAssetService = AddAnAsset.SellAssetService || (AddAnAsset.SellAssetService = {}));
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = AssetManagement.Administration || (AssetManagement.Administration = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = AssetManagement.Administration || (AssetManagement.Administration = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = AssetManagement.Administration || (AssetManagement.Administration = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Administration;
    (function (Administration) {
    })(Administration = AssetManagement.Administration || (AssetManagement.Administration = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = AssetManagement.Administration || (AssetManagement.Administration = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = AssetManagement.Administration || (AssetManagement.Administration = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = AssetManagement.Administration || (AssetManagement.Administration = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = AssetManagement.Administration || (AssetManagement.Administration = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = AssetManagement.Administration || (AssetManagement.Administration = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = AssetManagement.Administration || (AssetManagement.Administration = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = AssetManagement.Administration || (AssetManagement.Administration = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = AssetManagement.Administration || (AssetManagement.Administration = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = AssetManagement.Administration || (AssetManagement.Administration = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = AssetManagement.Administration || (AssetManagement.Administration = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = AssetManagement.Administration || (AssetManagement.Administration = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = AssetManagement.Administration || (AssetManagement.Administration = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = AssetManagement.Administration || (AssetManagement.Administration = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Advanced;
    (function (Advanced) {
        var CustomersForm = /** @class */ (function (_super) {
            __extends(CustomersForm, _super);
            function CustomersForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomersForm.init) {
                    CustomersForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.LookupEditor;
                    Q.initFormType(CustomersForm, [
                        'CustomerName', w0,
                        'Company', w0,
                        'Address', w1,
                        'City', w0,
                        'StateId', w2,
                        'Zip', w0,
                        'CountryId', w2,
                        'Phone', w0,
                        'Email', w0,
                        'Notes', w1
                    ]);
                }
                return _this;
            }
            CustomersForm.formKey = 'Advanced.Customers';
            return CustomersForm;
        }(Serenity.PrefixedContext));
        Advanced.CustomersForm = CustomersForm;
    })(Advanced = AssetManagement.Advanced || (AssetManagement.Advanced = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Advanced;
    (function (Advanced) {
        var CustomersRow;
        (function (CustomersRow) {
            CustomersRow.idProperty = 'CustomerId';
            CustomersRow.nameProperty = 'CustomerName';
            CustomersRow.localTextPrefix = 'Advanced.Customers';
            CustomersRow.lookupKey = 'Advanced.Customers';
            function getLookup() {
                return Q.getLookup('Advanced.Customers');
            }
            CustomersRow.getLookup = getLookup;
            CustomersRow.deletePermission = 'Administration:General';
            CustomersRow.insertPermission = 'Administration:General';
            CustomersRow.readPermission = 'Administration:General';
            CustomersRow.updatePermission = 'Administration:General';
        })(CustomersRow = Advanced.CustomersRow || (Advanced.CustomersRow = {}));
    })(Advanced = AssetManagement.Advanced || (AssetManagement.Advanced = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Advanced;
    (function (Advanced) {
        var CustomersService;
        (function (CustomersService) {
            CustomersService.baseUrl = 'Advanced/Customers';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomersService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomersService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomersService = Advanced.CustomersService || (Advanced.CustomersService = {}));
    })(Advanced = AssetManagement.Advanced || (AssetManagement.Advanced = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Advanced;
    (function (Advanced) {
        var EmployeeForm = /** @class */ (function (_super) {
            __extends(EmployeeForm, _super);
            function EmployeeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EmployeeForm.init) {
                    EmployeeForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.LookupEditor;
                    Q.initFormType(EmployeeForm, [
                        'EmployeeName', w0,
                        'Title', w1,
                        'Phone', w0,
                        'Email', w0,
                        'SiteId', w2,
                        'LocationId', w2,
                        'DepartmentId', w2,
                        'Note', w1
                    ]);
                }
                return _this;
            }
            EmployeeForm.formKey = 'Advanced.Employee';
            return EmployeeForm;
        }(Serenity.PrefixedContext));
        Advanced.EmployeeForm = EmployeeForm;
    })(Advanced = AssetManagement.Advanced || (AssetManagement.Advanced = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Advanced;
    (function (Advanced) {
        var EmployeeRow;
        (function (EmployeeRow) {
            EmployeeRow.idProperty = 'EmployeeId';
            EmployeeRow.nameProperty = 'EmployeeName';
            EmployeeRow.localTextPrefix = 'Advanced.Employee';
            EmployeeRow.lookupKey = 'Advanced.Employee';
            function getLookup() {
                return Q.getLookup('Advanced.Employee');
            }
            EmployeeRow.getLookup = getLookup;
            EmployeeRow.deletePermission = 'Administration:General';
            EmployeeRow.insertPermission = 'Administration:General';
            EmployeeRow.readPermission = 'Administration:General';
            EmployeeRow.updatePermission = 'Administration:General';
        })(EmployeeRow = Advanced.EmployeeRow || (Advanced.EmployeeRow = {}));
    })(Advanced = AssetManagement.Advanced || (AssetManagement.Advanced = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Advanced;
    (function (Advanced) {
        var EmployeeService;
        (function (EmployeeService) {
            EmployeeService.baseUrl = 'Advanced/Employee';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmployeeService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmployeeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmployeeService = Advanced.EmployeeService || (Advanced.EmployeeService = {}));
    })(Advanced = AssetManagement.Advanced || (AssetManagement.Advanced = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Advanced;
    (function (Advanced) {
        var FundingForm = /** @class */ (function (_super) {
            __extends(FundingForm, _super);
            function FundingForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FundingForm.init) {
                    FundingForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.DateEditor;
                    var w4 = s.BooleanEditor;
                    Q.initFormType(FundingForm, [
                        'Name', w0,
                        'Description', w1,
                        'Amount', w2,
                        'StartDate', w3,
                        'EndDate', w3,
                        'IsActive', w4,
                        'Notes', w1
                    ]);
                }
                return _this;
            }
            FundingForm.formKey = 'Advanced.Funding';
            return FundingForm;
        }(Serenity.PrefixedContext));
        Advanced.FundingForm = FundingForm;
    })(Advanced = AssetManagement.Advanced || (AssetManagement.Advanced = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Advanced;
    (function (Advanced) {
        var FundingRow;
        (function (FundingRow) {
            FundingRow.idProperty = 'FundingId';
            FundingRow.nameProperty = 'Name';
            FundingRow.localTextPrefix = 'Advanced.Funding';
            FundingRow.deletePermission = 'Administration:General';
            FundingRow.insertPermission = 'Administration:General';
            FundingRow.readPermission = 'Administration:General';
            FundingRow.updatePermission = 'Administration:General';
        })(FundingRow = Advanced.FundingRow || (Advanced.FundingRow = {}));
    })(Advanced = AssetManagement.Advanced || (AssetManagement.Advanced = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Advanced;
    (function (Advanced) {
        var FundingService;
        (function (FundingService) {
            FundingService.baseUrl = 'Advanced/Funding';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FundingService[x] = function (r, s, o) {
                    return Q.serviceRequest(FundingService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(FundingService = Advanced.FundingService || (Advanced.FundingService = {}));
    })(Advanced = AssetManagement.Advanced || (AssetManagement.Advanced = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            UserPreferenceRow.deletePermission = '';
            UserPreferenceRow.insertPermission = '';
            UserPreferenceRow.readPermission = '';
            UserPreferenceRow.updatePermission = '';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = AssetManagement.Common || (AssetManagement.Common = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = AssetManagement.Common || (AssetManagement.Common = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var DepreciableAsset;
    (function (DepreciableAsset) {
        DepreciableAsset[DepreciableAsset["No"] = 1] = "No";
        DepreciableAsset[DepreciableAsset["Yes"] = 2] = "Yes";
    })(DepreciableAsset = AssetManagement.DepreciableAsset || (AssetManagement.DepreciableAsset = {}));
    Serenity.Decorators.registerEnumType(DepreciableAsset, 'AssetManagement.DepreciableAsset', 'AssetDetails.DepreciableAsset');
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = AssetManagement.Membership || (AssetManagement.Membership = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = AssetManagement.Membership || (AssetManagement.Membership = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = AssetManagement.Membership || (AssetManagement.Membership = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = AssetManagement.Membership || (AssetManagement.Membership = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = AssetManagement.Membership || (AssetManagement.Membership = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Modules;
    (function (Modules) {
        var AddAnAsset;
        (function (AddAnAsset) {
            var CheckOut;
            (function (CheckOut) {
                var CheckOutTo;
                (function (CheckOutTo) {
                    CheckOutTo[CheckOutTo["Person"] = 1] = "Person";
                    CheckOutTo[CheckOutTo["Site_Location"] = 2] = "Site_Location";
                })(CheckOutTo = CheckOut.CheckOutTo || (CheckOut.CheckOutTo = {}));
                Serenity.Decorators.registerEnumType(CheckOutTo, 'AssetManagement.Modules.AddAnAsset.CheckOut.CheckOutTo', 'CheckOut.CheckOutTo');
            })(CheckOut = AddAnAsset.CheckOut || (AddAnAsset.CheckOut = {}));
        })(AddAnAsset = Modules.AddAnAsset || (Modules.AddAnAsset = {}));
    })(Modules = AssetManagement.Modules || (AssetManagement.Modules = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Modules;
    (function (Modules) {
        var AddAnAsset;
        (function (AddAnAsset) {
            var DonateAsset;
            (function (DonateAsset) {
                var Deductible;
                (function (Deductible) {
                    Deductible[Deductible["Yes"] = 1] = "Yes";
                    Deductible[Deductible["No"] = 2] = "No";
                })(Deductible = DonateAsset.Deductible || (DonateAsset.Deductible = {}));
                Serenity.Decorators.registerEnumType(Deductible, 'AssetManagement.Modules.AddAnAsset.DonateAsset.Deductible', 'DonateAsset.Deductible');
            })(DonateAsset = AddAnAsset.DonateAsset || (AddAnAsset.DonateAsset = {}));
        })(AddAnAsset = Modules.AddAnAsset || (Modules.AddAnAsset = {}));
    })(Modules = AssetManagement.Modules || (AssetManagement.Modules = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var BrandForm = /** @class */ (function (_super) {
            __extends(BrandForm, _super);
            function BrandForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BrandForm.init) {
                    BrandForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(BrandForm, [
                        'BrandName', w0
                    ]);
                }
                return _this;
            }
            BrandForm.formKey = 'Setup.Brand';
            return BrandForm;
        }(Serenity.PrefixedContext));
        Setup.BrandForm = BrandForm;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var BrandRow;
        (function (BrandRow) {
            BrandRow.idProperty = 'BrandId';
            BrandRow.nameProperty = 'BrandName';
            BrandRow.localTextPrefix = 'Setup.Brand';
            BrandRow.lookupKey = 'Setup.Brand';
            function getLookup() {
                return Q.getLookup('Setup.Brand');
            }
            BrandRow.getLookup = getLookup;
            BrandRow.deletePermission = 'Administration:General';
            BrandRow.insertPermission = 'Administration:General';
            BrandRow.readPermission = 'Administration:General';
            BrandRow.updatePermission = 'Administration:General';
        })(BrandRow = Setup.BrandRow || (Setup.BrandRow = {}));
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var BrandService;
        (function (BrandService) {
            BrandService.baseUrl = 'Setup/Brand';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BrandService[x] = function (r, s, o) {
                    return Q.serviceRequest(BrandService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BrandService = Setup.BrandService || (Setup.BrandService = {}));
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var CategoryForm = /** @class */ (function (_super) {
            __extends(CategoryForm, _super);
            function CategoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CategoryForm.init) {
                    CategoryForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(CategoryForm, [
                        'Category', w0
                    ]);
                }
                return _this;
            }
            CategoryForm.formKey = 'Setup.Category';
            return CategoryForm;
        }(Serenity.PrefixedContext));
        Setup.CategoryForm = CategoryForm;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var CategoryRow;
        (function (CategoryRow) {
            CategoryRow.idProperty = 'CategoryId';
            CategoryRow.nameProperty = 'Category';
            CategoryRow.localTextPrefix = 'Setup.Category';
            CategoryRow.lookupKey = 'Setup.Category';
            function getLookup() {
                return Q.getLookup('Setup.Category');
            }
            CategoryRow.getLookup = getLookup;
            CategoryRow.deletePermission = 'Administration:General';
            CategoryRow.insertPermission = 'Administration:General';
            CategoryRow.readPermission = 'Administration:General';
            CategoryRow.updatePermission = 'Administration:General';
        })(CategoryRow = Setup.CategoryRow || (Setup.CategoryRow = {}));
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var CategoryService;
        (function (CategoryService) {
            CategoryService.baseUrl = 'Setup/Category';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CategoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoryService = Setup.CategoryService || (Setup.CategoryService = {}));
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var CompanyForm = /** @class */ (function (_super) {
            __extends(CompanyForm, _super);
            function CompanyForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CompanyForm.init) {
                    CompanyForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    Q.initFormType(CompanyForm, [
                        'CompanyName', w0,
                        'CountryId', w1,
                        'Address', w0,
                        'Suite', w0,
                        'City', w0,
                        'StateId', w1,
                        'PostalCode', w0
                    ]);
                }
                return _this;
            }
            CompanyForm.formKey = 'Setup.Company';
            return CompanyForm;
        }(Serenity.PrefixedContext));
        Setup.CompanyForm = CompanyForm;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var CompanyRow;
        (function (CompanyRow) {
            CompanyRow.idProperty = 'CompanyId';
            CompanyRow.nameProperty = 'CompanyName';
            CompanyRow.localTextPrefix = 'Setup.Company';
            CompanyRow.deletePermission = 'Administration:General';
            CompanyRow.insertPermission = 'Administration:General';
            CompanyRow.readPermission = 'Administration:General';
            CompanyRow.updatePermission = 'Administration:General';
        })(CompanyRow = Setup.CompanyRow || (Setup.CompanyRow = {}));
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var CompanyService;
        (function (CompanyService) {
            CompanyService.baseUrl = 'Setup/Company';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CompanyService[x] = function (r, s, o) {
                    return Q.serviceRequest(CompanyService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CompanyService = Setup.CompanyService || (Setup.CompanyService = {}));
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var CountryForm = /** @class */ (function (_super) {
            __extends(CountryForm, _super);
            function CountryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CountryForm.init) {
                    CountryForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(CountryForm, [
                        'CountryName', w0
                    ]);
                }
                return _this;
            }
            CountryForm.formKey = 'Setup.Country';
            return CountryForm;
        }(Serenity.PrefixedContext));
        Setup.CountryForm = CountryForm;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var CountryRow;
        (function (CountryRow) {
            CountryRow.idProperty = 'CountryId';
            CountryRow.nameProperty = 'CountryName';
            CountryRow.localTextPrefix = 'Setup.Country';
            CountryRow.lookupKey = 'Company.Country';
            function getLookup() {
                return Q.getLookup('Company.Country');
            }
            CountryRow.getLookup = getLookup;
            CountryRow.deletePermission = 'Administration:General';
            CountryRow.insertPermission = 'Administration:General';
            CountryRow.readPermission = 'Administration:General';
            CountryRow.updatePermission = 'Administration:General';
        })(CountryRow = Setup.CountryRow || (Setup.CountryRow = {}));
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var CountryService;
        (function (CountryService) {
            CountryService.baseUrl = 'Setup/Country';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CountryService[x] = function (r, s, o) {
                    return Q.serviceRequest(CountryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CountryService = Setup.CountryService || (Setup.CountryService = {}));
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var CurrencyForm = /** @class */ (function (_super) {
            __extends(CurrencyForm, _super);
            function CurrencyForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CurrencyForm.init) {
                    CurrencyForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(CurrencyForm, [
                        'CurrencyName', w0
                    ]);
                }
                return _this;
            }
            CurrencyForm.formKey = 'Setup.Currency';
            return CurrencyForm;
        }(Serenity.PrefixedContext));
        Setup.CurrencyForm = CurrencyForm;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var CurrencyRow;
        (function (CurrencyRow) {
            CurrencyRow.idProperty = 'CurrencyId';
            CurrencyRow.nameProperty = 'CurrencyName';
            CurrencyRow.localTextPrefix = 'Setup.Currency';
            CurrencyRow.deletePermission = 'Administration:General';
            CurrencyRow.insertPermission = 'Administration:General';
            CurrencyRow.readPermission = 'Administration:General';
            CurrencyRow.updatePermission = 'Administration:General';
        })(CurrencyRow = Setup.CurrencyRow || (Setup.CurrencyRow = {}));
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var CurrencyService;
        (function (CurrencyService) {
            CurrencyService.baseUrl = 'Setup/Currency';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CurrencyService[x] = function (r, s, o) {
                    return Q.serviceRequest(CurrencyService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CurrencyService = Setup.CurrencyService || (Setup.CurrencyService = {}));
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var DepartmentForm = /** @class */ (function (_super) {
            __extends(DepartmentForm, _super);
            function DepartmentForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DepartmentForm.init) {
                    DepartmentForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(DepartmentForm, [
                        'Department', w0
                    ]);
                }
                return _this;
            }
            DepartmentForm.formKey = 'Setup.Department';
            return DepartmentForm;
        }(Serenity.PrefixedContext));
        Setup.DepartmentForm = DepartmentForm;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var DepartmentRow;
        (function (DepartmentRow) {
            DepartmentRow.idProperty = 'DepartmentId';
            DepartmentRow.nameProperty = 'Department';
            DepartmentRow.localTextPrefix = 'Setup.Department';
            DepartmentRow.lookupKey = 'Setup.Department';
            function getLookup() {
                return Q.getLookup('Setup.Department');
            }
            DepartmentRow.getLookup = getLookup;
            DepartmentRow.deletePermission = 'Administration:General';
            DepartmentRow.insertPermission = 'Administration:General';
            DepartmentRow.readPermission = 'Administration:General';
            DepartmentRow.updatePermission = 'Administration:General';
        })(DepartmentRow = Setup.DepartmentRow || (Setup.DepartmentRow = {}));
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var DepartmentService;
        (function (DepartmentService) {
            DepartmentService.baseUrl = 'Setup/Department';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DepartmentService[x] = function (r, s, o) {
                    return Q.serviceRequest(DepartmentService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DepartmentService = Setup.DepartmentService || (Setup.DepartmentService = {}));
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var LocationForm = /** @class */ (function (_super) {
            __extends(LocationForm, _super);
            function LocationForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LocationForm.init) {
                    LocationForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(LocationForm, [
                        'SiteId', w0,
                        'Location', w1
                    ]);
                }
                return _this;
            }
            LocationForm.formKey = 'Setup.Location';
            return LocationForm;
        }(Serenity.PrefixedContext));
        Setup.LocationForm = LocationForm;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var LocationRow;
        (function (LocationRow) {
            LocationRow.idProperty = 'LocationId';
            LocationRow.nameProperty = 'Location';
            LocationRow.localTextPrefix = 'Setup.Location';
            LocationRow.lookupKey = 'Setup.Location';
            function getLookup() {
                return Q.getLookup('Setup.Location');
            }
            LocationRow.getLookup = getLookup;
            LocationRow.deletePermission = 'Administration:General';
            LocationRow.insertPermission = 'Administration:General';
            LocationRow.readPermission = 'Administration:General';
            LocationRow.updatePermission = 'Administration:General';
        })(LocationRow = Setup.LocationRow || (Setup.LocationRow = {}));
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var LocationService;
        (function (LocationService) {
            LocationService.baseUrl = 'Setup/Location';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LocationService[x] = function (r, s, o) {
                    return Q.serviceRequest(LocationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LocationService = Setup.LocationService || (Setup.LocationService = {}));
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var MaintenanceStatusForm = /** @class */ (function (_super) {
            __extends(MaintenanceStatusForm, _super);
            function MaintenanceStatusForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MaintenanceStatusForm.init) {
                    MaintenanceStatusForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(MaintenanceStatusForm, [
                        'MaintenanceStatus', w0
                    ]);
                }
                return _this;
            }
            MaintenanceStatusForm.formKey = 'Setup.MaintenanceStatus';
            return MaintenanceStatusForm;
        }(Serenity.PrefixedContext));
        Setup.MaintenanceStatusForm = MaintenanceStatusForm;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var MaintenanceStatusRow;
        (function (MaintenanceStatusRow) {
            MaintenanceStatusRow.idProperty = 'Id';
            MaintenanceStatusRow.nameProperty = 'MaintenanceStatus';
            MaintenanceStatusRow.localTextPrefix = 'Setup.MaintenanceStatus';
            MaintenanceStatusRow.lookupKey = 'Setup.MaintenanceStatus';
            function getLookup() {
                return Q.getLookup('Setup.MaintenanceStatus');
            }
            MaintenanceStatusRow.getLookup = getLookup;
            MaintenanceStatusRow.deletePermission = 'Administration:General';
            MaintenanceStatusRow.insertPermission = 'Administration:General';
            MaintenanceStatusRow.readPermission = 'Administration:General';
            MaintenanceStatusRow.updatePermission = 'Administration:General';
        })(MaintenanceStatusRow = Setup.MaintenanceStatusRow || (Setup.MaintenanceStatusRow = {}));
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var MaintenanceStatusService;
        (function (MaintenanceStatusService) {
            MaintenanceStatusService.baseUrl = 'Setup/MaintenanceStatus';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MaintenanceStatusService[x] = function (r, s, o) {
                    return Q.serviceRequest(MaintenanceStatusService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MaintenanceStatusService = Setup.MaintenanceStatusService || (Setup.MaintenanceStatusService = {}));
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var SiteForm = /** @class */ (function (_super) {
            __extends(SiteForm, _super);
            function SiteForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SiteForm.init) {
                    SiteForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.LookupEditor;
                    Q.initFormType(SiteForm, [
                        'SiteName', w0,
                        'Description', w1,
                        'Address', w1,
                        'Suite', w0,
                        'City', w0,
                        'StateId', w2
                    ]);
                }
                return _this;
            }
            SiteForm.formKey = 'Setup.Site';
            return SiteForm;
        }(Serenity.PrefixedContext));
        Setup.SiteForm = SiteForm;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var SiteRow;
        (function (SiteRow) {
            SiteRow.idProperty = 'SiteId';
            SiteRow.nameProperty = 'SiteName';
            SiteRow.localTextPrefix = 'Setup.Site';
            SiteRow.lookupKey = 'Setup.Site';
            function getLookup() {
                return Q.getLookup('Setup.Site');
            }
            SiteRow.getLookup = getLookup;
            SiteRow.deletePermission = 'Administration:General';
            SiteRow.insertPermission = 'Administration:General';
            SiteRow.readPermission = 'Administration:General';
            SiteRow.updatePermission = 'Administration:General';
        })(SiteRow = Setup.SiteRow || (Setup.SiteRow = {}));
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var SiteService;
        (function (SiteService) {
            SiteService.baseUrl = 'Setup/Site';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SiteService[x] = function (r, s, o) {
                    return Q.serviceRequest(SiteService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SiteService = Setup.SiteService || (Setup.SiteService = {}));
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var StateForm = /** @class */ (function (_super) {
            __extends(StateForm, _super);
            function StateForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!StateForm.init) {
                    StateForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(StateForm, [
                        'StateName', w0
                    ]);
                }
                return _this;
            }
            StateForm.formKey = 'Setup.State';
            return StateForm;
        }(Serenity.PrefixedContext));
        Setup.StateForm = StateForm;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var StateRow;
        (function (StateRow) {
            StateRow.idProperty = 'StateId';
            StateRow.nameProperty = 'StateName';
            StateRow.localTextPrefix = 'Setup.State';
            StateRow.lookupKey = 'Setup.State';
            function getLookup() {
                return Q.getLookup('Setup.State');
            }
            StateRow.getLookup = getLookup;
            StateRow.deletePermission = 'Administration:General';
            StateRow.insertPermission = 'Administration:General';
            StateRow.readPermission = 'Administration:General';
            StateRow.updatePermission = 'Administration:General';
        })(StateRow = Setup.StateRow || (Setup.StateRow = {}));
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var StateService;
        (function (StateService) {
            StateService.baseUrl = 'Setup/State';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                StateService[x] = function (r, s, o) {
                    return Q.serviceRequest(StateService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(StateService = Setup.StateService || (Setup.StateService = {}));
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Texts;
    (function (Texts) {
        AssetManagement['Texts'] = Q.proxyTexts(Texts, '', { Db: { AddAnAsset: { AssetDetails: { AssetId: 1, AssetLife: 1, AssetPhoto: 1, AssetTagId: 1, BrandBrandName: 1, BrandId: 1, Category: 1, CategoryId: 1, Color: 1, Cost: 1, Createdby: 1, DateAcquired: 1, Department: 1, DepartmentId: 1, DepreciableAsset: 1, DepreciableCost: 1, DepreciationMethod: 1, Description: 1, Location: 1, LocationId: 1, LocationSiteId: 1, Model: 1, OnCreated: 1, PurchaseDate: 1, Purchasedfrom: 1, SalvageValue: 1, SiteAddress: 1, SiteCity: 1, SiteDescription: 1, SiteId: 1, SiteSiteName: 1, SiteStateId: 1, SiteSuite: 1, UserId: 1 }, AssetMaintenance: { AssetId: 1, AssetMaintenanceId: 1, DateCompleted: 1, Details: 1, DueDate: 1, Id: 1, MaintenanceBy: 1, MaintenanceStatus: 1, Title: 1 }, AssetWarranty: { AssetId: 1, ExpirationDate: 1, Id: 1, Length: 1, Notes: 1 }, BrokenAsset: { AssetAssetLife: 1, AssetAssetPhoto: 1, AssetAssetTagId: 1, AssetBrandId: 1, AssetCategoryId: 1, AssetColor: 1, AssetCost: 1, AssetCreatedby: 1, AssetDateAcquired: 1, AssetDepartmentId: 1, AssetDepreciableAsset: 1, AssetDepreciableCost: 1, AssetDepreciationMethod: 1, AssetDescription: 1, AssetId: 1, AssetLocationId: 1, AssetModel: 1, AssetOnCreated: 1, AssetPurchaseDate: 1, AssetPurchasedfrom: 1, AssetSalvageValue: 1, AssetSiteId: 1, AssetUserId: 1, BrokenId: 1, DateBroken: 1, Notes: 1 }, CheckIn: { AssetAssetLife: 1, AssetAssetPhoto: 1, AssetAssetTagId: 1, AssetBrandId: 1, AssetCategoryId: 1, AssetColor: 1, AssetCost: 1, AssetCreatedby: 1, AssetDateAcquired: 1, AssetDepartmentId: 1, AssetDepreciableAsset: 1, AssetDepreciableCost: 1, AssetDepreciationMethod: 1, AssetDescription: 1, AssetId: 1, AssetLocationId: 1, AssetModel: 1, AssetOnCreated: 1, AssetPurchaseDate: 1, AssetPurchasedfrom: 1, AssetSalvageValue: 1, AssetSiteId: 1, AssetUserId: 1, CheckId: 1, Department: 1, DepartmentId: 1, DueDate: 1, Email: 1, Location: 1, LocationId: 1, LocationSiteId: 1, Notes: 1, ReturnDate: 1, SendMail: 1, SiteAddress: 1, SiteCity: 1, SiteDescription: 1, SiteId: 1, SiteSiteName: 1, SiteStateId: 1, SiteSuite: 1 }, CheckOut: { AssetAssetLife: 1, AssetAssetPhoto: 1, AssetAssetTagId: 1, AssetBrandId: 1, AssetCategoryId: 1, AssetColor: 1, AssetCost: 1, AssetCreatedby: 1, AssetDateAcquired: 1, AssetDepartmentId: 1, AssetDepreciableAsset: 1, AssetDepreciableCost: 1, AssetDepreciationMethod: 1, AssetDescription: 1, AssetId: 1, AssetLocationId: 1, AssetModel: 1, AssetOnCreated: 1, AssetPurchaseDate: 1, AssetPurchasedfrom: 1, AssetSalvageValue: 1, AssetSiteId: 1, AssetUserId: 1, CheckOutDate: 1, CheckOutId: 1, CheckOutTo: 1, Department: 1, DepartmentId: 1, DueDate: 1, Email: 1, EmployeeDepartmentId: 1, EmployeeEmail: 1, EmployeeEmployeeName: 1, EmployeeId: 1, EmployeeLocationId: 1, EmployeeNote: 1, EmployeePhone: 1, EmployeeSiteId: 1, EmployeeTitle: 1, Location: 1, LocationId: 1, LocationSiteId: 1, NoDueDate: 1, Notes: 1, SendMail: 1, SiteAddress: 1, SiteCity: 1, SiteDescription: 1, SiteId: 1, SiteSiteName: 1, SiteStateId: 1, SiteSuite: 1 }, DisposeAsset: { AssetAssetLife: 1, AssetAssetPhoto: 1, AssetAssetTagId: 1, AssetBrandId: 1, AssetCategoryId: 1, AssetColor: 1, AssetCost: 1, AssetCreatedby: 1, AssetDateAcquired: 1, AssetDepartmentId: 1, AssetDepreciableAsset: 1, AssetDepreciableCost: 1, AssetDepreciationMethod: 1, AssetDescription: 1, AssetId: 1, AssetLocationId: 1, AssetModel: 1, AssetOnCreated: 1, AssetPurchaseDate: 1, AssetPurchasedfrom: 1, AssetSalvageValue: 1, AssetSiteId: 1, AssetUserId: 1, DateDisposed: 1, DisposeId: 1, DisposeTo: 1, Notes: 1 }, Document: { AssetId: 1, Description: 1, Document: 1, Id: 1 }, DonateAsset: { AssetAssetLife: 1, AssetAssetPhoto: 1, AssetAssetTagId: 1, AssetBrandId: 1, AssetCategoryId: 1, AssetColor: 1, AssetCost: 1, AssetCreatedby: 1, AssetDateAcquired: 1, AssetDepartmentId: 1, AssetDepreciableAsset: 1, AssetDepreciableCost: 1, AssetDepreciationMethod: 1, AssetDescription: 1, AssetId: 1, AssetLocationId: 1, AssetModel: 1, AssetOnCreated: 1, AssetPurchaseDate: 1, AssetPurchasedfrom: 1, AssetSalvageValue: 1, AssetSiteId: 1, AssetUserId: 1, DateDonated: 1, Deductible: 1, DonateId: 1, DonateTo: 1, DonateValue: 1, Notes: 1 }, Lease: { AssetAssetLife: 1, AssetAssetPhoto: 1, AssetAssetTagId: 1, AssetBrandId: 1, AssetCategoryId: 1, AssetColor: 1, AssetCost: 1, AssetCreatedby: 1, AssetDateAcquired: 1, AssetDepartmentId: 1, AssetDepreciableAsset: 1, AssetDepreciableCost: 1, AssetDepreciationMethod: 1, AssetDescription: 1, AssetId: 1, AssetLocationId: 1, AssetModel: 1, AssetOnCreated: 1, AssetPurchaseDate: 1, AssetPurchasedfrom: 1, AssetSalvageValue: 1, AssetSiteId: 1, AssetUserId: 1, CustomerAddress: 1, CustomerCity: 1, CustomerCompany: 1, CustomerCountryId: 1, CustomerEmail: 1, CustomerId: 1, CustomerName: 1, CustomerNotes: 1, CustomerPhone: 1, CustomerStateId: 1, CustomerZip: 1, Email: 1, LeaseBegins: 1, LeaseExpires: 1, LeaseId: 1, Notes: 1, SendEmail: 1 }, RepairAsset: { AssetAssetLife: 1, AssetAssetPhoto: 1, AssetAssetTagId: 1, AssetBrandId: 1, AssetCategoryId: 1, AssetColor: 1, AssetCost: 1, AssetCreatedby: 1, AssetDateAcquired: 1, AssetDepartmentId: 1, AssetDepreciableAsset: 1, AssetDepreciableCost: 1, AssetDepreciationMethod: 1, AssetDescription: 1, AssetId: 1, AssetLocationId: 1, AssetModel: 1, AssetOnCreated: 1, AssetPurchaseDate: 1, AssetPurchasedfrom: 1, AssetSalvageValue: 1, AssetSiteId: 1, AssetUserId: 1, AssignedTo: 1, DateCompleted: 1, Id: 1, Notes: 1, RepairCost: 1, ScheduleDate: 1 }, SellAsset: { AssetAssetLife: 1, AssetAssetPhoto: 1, AssetAssetTagId: 1, AssetBrandId: 1, AssetCategoryId: 1, AssetColor: 1, AssetCost: 1, AssetCreatedby: 1, AssetDateAcquired: 1, AssetDepartmentId: 1, AssetDepreciableAsset: 1, AssetDepreciableCost: 1, AssetDepreciationMethod: 1, AssetDescription: 1, AssetId: 1, AssetLocationId: 1, AssetModel: 1, AssetOnCreated: 1, AssetPurchaseDate: 1, AssetPurchasedfrom: 1, AssetSalvageValue: 1, AssetSiteId: 1, AssetUserId: 1, Notes: 1, SaleAmount: 1, SaleDate: 1, SellId: 1, SoldTo: 1 } }, Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Advanced: { Customers: { Address: 1, City: 1, Company: 1, CountryCountryName: 1, CountryId: 1, CustomerId: 1, CustomerName: 1, Email: 1, Notes: 1, Phone: 1, SiteStateId: 1, StateId: 1, StateName: 1, Zip: 1 }, Employee: { Department: 1, DepartmentId: 1, Email: 1, EmployeeId: 1, EmployeeName: 1, Location: 1, LocationId: 1, LocationSiteId: 1, Note: 1, Phone: 1, SiteAddress: 1, SiteCity: 1, SiteDescription: 1, SiteId: 1, SiteSiteName: 1, SiteStateId: 1, SiteSuite: 1, Title: 1 }, Funding: { Amount: 1, Description: 1, EndDate: 1, FundingId: 1, IsActive: 1, Name: 1, Notes: 1, StartDate: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Setup: { Brand: { BrandId: 1, BrandName: 1 }, Category: { Category: 1, CategoryId: 1 }, Company: { Address: 1, City: 1, CompanyId: 1, CompanyName: 1, CountryCountryName: 1, CountryId: 1, PostalCode: 1, StateId: 1, StateStateName: 1, Suite: 1 }, Country: { CountryId: 1, CountryName: 1 }, Currency: { CurrencyId: 1, CurrencyName: 1 }, Department: { Department: 1, DepartmentId: 1 }, Location: { Location: 1, LocationId: 1, SiteAddress: 1, SiteCity: 1, SiteDescription: 1, SiteId: 1, SiteSiteName: 1, SiteStateId: 1, SiteSuite: 1 }, MaintenanceStatus: { Id: 1, MaintenanceStatus: 1 }, Site: { Address: 1, City: 1, Description: 1, SiteId: 1, SiteName: 1, StateId: 1, StateStateName: 1, Suite: 1 }, State: { StateId: 1, StateName: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = AssetManagement.Texts || (AssetManagement.Texts = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var AssetDetailsDialog = /** @class */ (function (_super) {
            __extends(AssetDetailsDialog, _super);
            function AssetDetailsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new AddAnAsset.AssetDetailsForm(_this.idPrefix);
                _this.DocumentGrid = new AddAnAsset.DocumentGrid(_this.byId("DocumentGrid"));
                _this.tabs.on('tabsactivate', function (e, i) {
                    _this.arrange();
                });
                _this.AssetWarrantyGrid = new AddAnAsset.AssetWarrantyGrid(_this.byId("AssetWarrantyGrid"));
                _this.tabs.on('tabsactivate', function (e, i) {
                    _this.arrange();
                });
                _this.AssetMaintenanceGrid = new AddAnAsset.AssetMaintenanceGrid(_this.byId("AssetMaintenanceGrid"));
                _this.tabs.on('tabsactivate', function (e, i) {
                    _this.arrange();
                });
                _this.CheckInGrid = new AddAnAsset.CheckInGrid(_this.byId("CheckInGrid"));
                _this.tabs.on('tabsactivate', function (e, i) {
                    _this.arrange();
                });
                _this.CheckOutGrid = new AddAnAsset.CheckOutGrid(_this.byId("CheckOutGrid"));
                _this.tabs.on('tabsactivate', function (e, i) {
                    _this.arrange();
                });
                _this.LeaseGrid = new AddAnAsset.LeaseGrid(_this.byId("LeaseGrid"));
                _this.tabs.on('tabsactivate', function (e, i) {
                    _this.arrange();
                });
                _this.RepairAssetGrid = new AddAnAsset.RepairAssetGrid(_this.byId("RepairAssetGrid"));
                _this.tabs.on('tabsactivate', function (e, i) {
                    _this.arrange();
                });
                _this.BrokenAssetGrid = new AddAnAsset.BrokenAssetGrid(_this.byId("BrokenAssetGrid"));
                _this.tabs.on('tabsactivate', function (e, i) {
                    _this.arrange();
                });
                _this.DisposeAssetGrid = new AddAnAsset.DisposeAssetGrid(_this.byId("DisposeAssetGrid"));
                _this.tabs.on('tabsactivate', function (e, i) {
                    _this.arrange();
                });
                _this.DonateAssetGrid = new AddAnAsset.DonateAssetGrid(_this.byId("DonateAssetGrid"));
                _this.tabs.on('tabsactivate', function (e, i) {
                    _this.arrange();
                });
                _this.SellAssetGrid = new AddAnAsset.SellAssetGrid(_this.byId("SellAssetGrid"));
                _this.tabs.on('tabsactivate', function (e, i) {
                    _this.arrange();
                });
                return _this;
            }
            AssetDetailsDialog.prototype.getFormKey = function () { return AddAnAsset.AssetDetailsForm.formKey; };
            AssetDetailsDialog.prototype.getIdProperty = function () { return AddAnAsset.AssetDetailsRow.idProperty; };
            AssetDetailsDialog.prototype.getLocalTextPrefix = function () { return AddAnAsset.AssetDetailsRow.localTextPrefix; };
            AssetDetailsDialog.prototype.getNameProperty = function () { return AddAnAsset.AssetDetailsRow.nameProperty; };
            AssetDetailsDialog.prototype.getService = function () { return AddAnAsset.AssetDetailsService.baseUrl; };
            AssetDetailsDialog.prototype.getDeletePermission = function () { return AddAnAsset.AssetDetailsRow.deletePermission; };
            AssetDetailsDialog.prototype.getInsertPermission = function () { return AddAnAsset.AssetDetailsRow.insertPermission; };
            AssetDetailsDialog.prototype.getUpdatePermission = function () { return AddAnAsset.AssetDetailsRow.updatePermission; };
            AssetDetailsDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                this.DocumentGrid.AssetId = this.entity.AssetId;
                this.AssetWarrantyGrid.AssetId = this.entity.AssetId;
                this.AssetMaintenanceGrid.AssetId = this.entity.AssetId;
                this.CheckInGrid.AssetId = this.entity.AssetId;
                this.CheckOutGrid.AssetId = this.entity.AssetId;
                this.LeaseGrid.AssetId = this.entity.AssetId;
                this.RepairAssetGrid.AssetId = this.entity.AssetId;
                this.BrokenAssetGrid.AssetId = this.entity.AssetId;
                this.DisposeAssetGrid.AssetId = this.entity.AssetId;
                this.DonateAssetGrid.AssetId = this.entity.AssetId;
                this.SellAssetGrid.AssetId = this.entity.AssetId;
            };
            AssetDetailsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], AssetDetailsDialog);
            return AssetDetailsDialog;
        }(Serenity.EntityDialog));
        AddAnAsset.AssetDetailsDialog = AssetDetailsDialog;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var AssetDetailsGrid = /** @class */ (function (_super) {
            __extends(AssetDetailsGrid, _super);
            function AssetDetailsGrid() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetDetailsGrid.prototype.getColumnsKey = function () { return 'AddAnAsset.AssetDetails'; };
            AssetDetailsGrid.prototype.getDialogType = function () { return AddAnAsset.AssetDetailsDialog; };
            AssetDetailsGrid.prototype.getIdProperty = function () { return AddAnAsset.AssetDetailsRow.idProperty; };
            AssetDetailsGrid.prototype.getInsertPermission = function () { return AddAnAsset.AssetDetailsRow.insertPermission; };
            AssetDetailsGrid.prototype.getLocalTextPrefix = function () { return AddAnAsset.AssetDetailsRow.localTextPrefix; };
            AssetDetailsGrid.prototype.getService = function () { return AddAnAsset.AssetDetailsService.baseUrl; };
            AssetDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetDetailsGrid);
            return AssetDetailsGrid;
        }(Serenity.EntityGrid));
        AddAnAsset.AssetDetailsGrid = AssetDetailsGrid;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var AssetMaintenanceDialog = /** @class */ (function (_super) {
            __extends(AssetMaintenanceDialog, _super);
            function AssetMaintenanceDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new AddAnAsset.AssetMaintenanceForm(_this.idPrefix);
                return _this;
            }
            AssetMaintenanceDialog.prototype.getFormKey = function () { return AddAnAsset.AssetMaintenanceForm.formKey; };
            AssetMaintenanceDialog.prototype.getIdProperty = function () { return AddAnAsset.AssetMaintenanceRow.idProperty; };
            AssetMaintenanceDialog.prototype.getLocalTextPrefix = function () { return AddAnAsset.AssetMaintenanceRow.localTextPrefix; };
            AssetMaintenanceDialog.prototype.getNameProperty = function () { return AddAnAsset.AssetMaintenanceRow.nameProperty; };
            AssetMaintenanceDialog.prototype.getService = function () { return AddAnAsset.AssetMaintenanceService.baseUrl; };
            AssetMaintenanceDialog.prototype.getDeletePermission = function () { return AddAnAsset.AssetMaintenanceRow.deletePermission; };
            AssetMaintenanceDialog.prototype.getInsertPermission = function () { return AddAnAsset.AssetMaintenanceRow.insertPermission; };
            AssetMaintenanceDialog.prototype.getUpdatePermission = function () { return AddAnAsset.AssetMaintenanceRow.updatePermission; };
            AssetMaintenanceDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetMaintenanceDialog);
            return AssetMaintenanceDialog;
        }(Serenity.EntityDialog));
        AddAnAsset.AssetMaintenanceDialog = AssetMaintenanceDialog;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var AssetMaintenanceGrid = /** @class */ (function (_super) {
            __extends(AssetMaintenanceGrid, _super);
            function AssetMaintenanceGrid(container) {
                return _super.call(this, container) || this;
            }
            AssetMaintenanceGrid.prototype.getColumnsKey = function () { return 'AddAnAsset.AssetMaintenance'; };
            AssetMaintenanceGrid.prototype.getDialogType = function () { return AddAnAsset.AssetMaintenanceDialog; };
            AssetMaintenanceGrid.prototype.getIdProperty = function () { return AddAnAsset.AssetMaintenanceRow.idProperty; };
            AssetMaintenanceGrid.prototype.getInsertPermission = function () { return AddAnAsset.AssetMaintenanceRow.insertPermission; };
            AssetMaintenanceGrid.prototype.getLocalTextPrefix = function () { return AddAnAsset.AssetMaintenanceRow.localTextPrefix; };
            AssetMaintenanceGrid.prototype.getService = function () { return AddAnAsset.AssetMaintenanceService.baseUrl; };
            AssetMaintenanceGrid.prototype.addButtonClick = function () {
                this.editItem({
                    AssetId: this.AssetId
                });
            };
            //protected getInitialTitle() {
            //    return null;
            //}
            AssetMaintenanceGrid.prototype.usePager = function () {
                return false;
            };
            Object.defineProperty(AssetMaintenanceGrid.prototype, "AssetId", {
                get: function () {
                    return this._AssetId;
                },
                set: function (value) {
                    if (this._AssetId != value) {
                        this._AssetId = value;
                        this.setEquality("AssetId" /* AssetId */, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            AssetMaintenanceGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetMaintenanceGrid);
            return AssetMaintenanceGrid;
        }(Serenity.EntityGrid));
        AddAnAsset.AssetMaintenanceGrid = AssetMaintenanceGrid;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var AssetWarrantyDialog = /** @class */ (function (_super) {
            __extends(AssetWarrantyDialog, _super);
            function AssetWarrantyDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new AddAnAsset.AssetWarrantyForm(_this.idPrefix);
                return _this;
            }
            AssetWarrantyDialog.prototype.getFormKey = function () { return AddAnAsset.AssetWarrantyForm.formKey; };
            AssetWarrantyDialog.prototype.getIdProperty = function () { return AddAnAsset.AssetWarrantyRow.idProperty; };
            AssetWarrantyDialog.prototype.getLocalTextPrefix = function () { return AddAnAsset.AssetWarrantyRow.localTextPrefix; };
            AssetWarrantyDialog.prototype.getNameProperty = function () { return AddAnAsset.AssetWarrantyRow.nameProperty; };
            AssetWarrantyDialog.prototype.getService = function () { return AddAnAsset.AssetWarrantyService.baseUrl; };
            AssetWarrantyDialog.prototype.getDeletePermission = function () { return AddAnAsset.AssetWarrantyRow.deletePermission; };
            AssetWarrantyDialog.prototype.getInsertPermission = function () { return AddAnAsset.AssetWarrantyRow.insertPermission; };
            AssetWarrantyDialog.prototype.getUpdatePermission = function () { return AddAnAsset.AssetWarrantyRow.updatePermission; };
            AssetWarrantyDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetWarrantyDialog);
            return AssetWarrantyDialog;
        }(Serenity.EntityDialog));
        AddAnAsset.AssetWarrantyDialog = AssetWarrantyDialog;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var AssetWarrantyGrid = /** @class */ (function (_super) {
            __extends(AssetWarrantyGrid, _super);
            function AssetWarrantyGrid(container) {
                return _super.call(this, container) || this;
            }
            AssetWarrantyGrid.prototype.getColumnsKey = function () { return 'AddAnAsset.AssetWarranty'; };
            AssetWarrantyGrid.prototype.getDialogType = function () { return AddAnAsset.AssetWarrantyDialog; };
            AssetWarrantyGrid.prototype.getIdProperty = function () { return AddAnAsset.AssetWarrantyRow.idProperty; };
            AssetWarrantyGrid.prototype.getInsertPermission = function () { return AddAnAsset.AssetWarrantyRow.insertPermission; };
            AssetWarrantyGrid.prototype.getLocalTextPrefix = function () { return AddAnAsset.AssetWarrantyRow.localTextPrefix; };
            AssetWarrantyGrid.prototype.getService = function () { return AddAnAsset.AssetWarrantyService.baseUrl; };
            AssetWarrantyGrid.prototype.addButtonClick = function () {
                this.editItem({
                    AssetId: this.AssetId
                });
            };
            //protected getInitialTitle() {
            //    return null;
            //}
            AssetWarrantyGrid.prototype.usePager = function () {
                return false;
            };
            Object.defineProperty(AssetWarrantyGrid.prototype, "AssetId", {
                get: function () {
                    return this._AssetId;
                },
                set: function (value) {
                    if (this._AssetId != value) {
                        this._AssetId = value;
                        this.setEquality("AssetId" /* AssetId */, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            AssetWarrantyGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AssetWarrantyGrid);
            return AssetWarrantyGrid;
        }(Serenity.EntityGrid));
        AddAnAsset.AssetWarrantyGrid = AssetWarrantyGrid;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var BrokenAssetDialog = /** @class */ (function (_super) {
            __extends(BrokenAssetDialog, _super);
            function BrokenAssetDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new AddAnAsset.BrokenAssetForm(_this.idPrefix);
                return _this;
            }
            BrokenAssetDialog.prototype.getFormKey = function () { return AddAnAsset.BrokenAssetForm.formKey; };
            BrokenAssetDialog.prototype.getIdProperty = function () { return AddAnAsset.BrokenAssetRow.idProperty; };
            BrokenAssetDialog.prototype.getLocalTextPrefix = function () { return AddAnAsset.BrokenAssetRow.localTextPrefix; };
            BrokenAssetDialog.prototype.getNameProperty = function () { return AddAnAsset.BrokenAssetRow.nameProperty; };
            BrokenAssetDialog.prototype.getService = function () { return AddAnAsset.BrokenAssetService.baseUrl; };
            BrokenAssetDialog.prototype.getDeletePermission = function () { return AddAnAsset.BrokenAssetRow.deletePermission; };
            BrokenAssetDialog.prototype.getInsertPermission = function () { return AddAnAsset.BrokenAssetRow.insertPermission; };
            BrokenAssetDialog.prototype.getUpdatePermission = function () { return AddAnAsset.BrokenAssetRow.updatePermission; };
            BrokenAssetDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BrokenAssetDialog);
            return BrokenAssetDialog;
        }(Serenity.EntityDialog));
        AddAnAsset.BrokenAssetDialog = BrokenAssetDialog;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var BrokenAssetGrid = /** @class */ (function (_super) {
            __extends(BrokenAssetGrid, _super);
            function BrokenAssetGrid(container) {
                return _super.call(this, container) || this;
            }
            BrokenAssetGrid.prototype.getColumnsKey = function () { return 'AddAnAsset.BrokenAsset'; };
            BrokenAssetGrid.prototype.getDialogType = function () { return AddAnAsset.BrokenAssetDialog; };
            BrokenAssetGrid.prototype.getIdProperty = function () { return AddAnAsset.BrokenAssetRow.idProperty; };
            BrokenAssetGrid.prototype.getInsertPermission = function () { return AddAnAsset.BrokenAssetRow.insertPermission; };
            BrokenAssetGrid.prototype.getLocalTextPrefix = function () { return AddAnAsset.BrokenAssetRow.localTextPrefix; };
            BrokenAssetGrid.prototype.getService = function () { return AddAnAsset.BrokenAssetService.baseUrl; };
            BrokenAssetGrid.prototype.addButtonClick = function () {
                this.editItem({
                    AssetId: this.AssetId
                });
            };
            BrokenAssetGrid.prototype.usePager = function () {
                return false;
            };
            Object.defineProperty(BrokenAssetGrid.prototype, "AssetId", {
                get: function () {
                    return this._AssetId;
                },
                set: function (value) {
                    if (this._AssetId != value) {
                        this._AssetId = value;
                        this.setEquality("AssetId" /* AssetId */, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            BrokenAssetGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BrokenAssetGrid);
            return BrokenAssetGrid;
        }(Serenity.EntityGrid));
        AddAnAsset.BrokenAssetGrid = BrokenAssetGrid;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var CheckInDialog = /** @class */ (function (_super) {
            __extends(CheckInDialog, _super);
            function CheckInDialog() {
                var _this = _super.call(this) || this;
                _this.form = new AddAnAsset.CheckInForm(_this.idPrefix);
                _this.form.SendMail.change(function (e) {
                    _this.getGridField();
                    if (!_this.form.SendMail.value)
                        Serenity.EditorUtils.setReadOnly(_this.form.Email, true);
                    else {
                        Serenity.EditorUtils.setReadOnly(_this.form.Email, false);
                    }
                });
                if (!_this.form.SendMail.value)
                    Serenity.EditorUtils.setReadOnly(_this.form.Email, true);
                return _this;
            }
            CheckInDialog.prototype.getFormKey = function () { return AddAnAsset.CheckInForm.formKey; };
            CheckInDialog.prototype.getIdProperty = function () { return AddAnAsset.CheckInRow.idProperty; };
            CheckInDialog.prototype.getLocalTextPrefix = function () { return AddAnAsset.CheckInRow.localTextPrefix; };
            CheckInDialog.prototype.getNameProperty = function () { return AddAnAsset.CheckInRow.nameProperty; };
            CheckInDialog.prototype.getService = function () { return AddAnAsset.CheckInService.baseUrl; };
            CheckInDialog.prototype.getDeletePermission = function () { return AddAnAsset.CheckInRow.deletePermission; };
            CheckInDialog.prototype.getInsertPermission = function () { return AddAnAsset.CheckInRow.insertPermission; };
            CheckInDialog.prototype.getUpdatePermission = function () { return AddAnAsset.CheckInRow.updatePermission; };
            CheckInDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CheckInDialog);
            return CheckInDialog;
        }(Serenity.EntityDialog));
        AddAnAsset.CheckInDialog = CheckInDialog;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var CheckInGrid = /** @class */ (function (_super) {
            __extends(CheckInGrid, _super);
            function CheckInGrid(container) {
                return _super.call(this, container) || this;
            }
            CheckInGrid.prototype.getColumnsKey = function () { return 'AddAnAsset.CheckIn'; };
            CheckInGrid.prototype.getDialogType = function () { return AddAnAsset.CheckInDialog; };
            CheckInGrid.prototype.getIdProperty = function () { return AddAnAsset.CheckInRow.idProperty; };
            CheckInGrid.prototype.getInsertPermission = function () { return AddAnAsset.CheckInRow.insertPermission; };
            CheckInGrid.prototype.getLocalTextPrefix = function () { return AddAnAsset.CheckInRow.localTextPrefix; };
            CheckInGrid.prototype.getService = function () { return AddAnAsset.CheckInService.baseUrl; };
            CheckInGrid.prototype.addButtonClick = function () {
                this.editItem({
                    AssetId: this.AssetId
                });
            };
            //protected getInitialTitle() {
            //    return null;
            //}
            CheckInGrid.prototype.usePager = function () {
                return false;
            };
            Object.defineProperty(CheckInGrid.prototype, "AssetId", {
                get: function () {
                    return this._AssetId;
                },
                set: function (value) {
                    if (this._AssetId != value) {
                        this._AssetId = value;
                        this.setEquality("AssetId" /* AssetId */, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            CheckInGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CheckInGrid);
            return CheckInGrid;
        }(Serenity.EntityGrid));
        AddAnAsset.CheckInGrid = CheckInGrid;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var CheckOutDialog = /** @class */ (function (_super) {
            __extends(CheckOutDialog, _super);
            function CheckOutDialog() {
                var _this = _super.call(this) || this;
                _this.form = new AddAnAsset.CheckOutForm(_this.idPrefix);
                return _this;
            }
            CheckOutDialog.prototype.getFormKey = function () { return AddAnAsset.CheckOutForm.formKey; };
            CheckOutDialog.prototype.getIdProperty = function () { return AddAnAsset.CheckOutRow.idProperty; };
            CheckOutDialog.prototype.getLocalTextPrefix = function () { return AddAnAsset.CheckOutRow.localTextPrefix; };
            CheckOutDialog.prototype.getNameProperty = function () { return AddAnAsset.CheckOutRow.nameProperty; };
            CheckOutDialog.prototype.getService = function () { return AddAnAsset.CheckOutService.baseUrl; };
            CheckOutDialog.prototype.getDeletePermission = function () { return AddAnAsset.CheckOutRow.deletePermission; };
            CheckOutDialog.prototype.getInsertPermission = function () { return AddAnAsset.CheckOutRow.insertPermission; };
            CheckOutDialog.prototype.getUpdatePermission = function () { return AddAnAsset.CheckOutRow.updatePermission; };
            CheckOutDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                this.form.NoDueDate.change(function () {
                    _this.getDueDateFields();
                });
                this.getDueDateFields();
                this.form.CheckOutTo.change(function () {
                    _this.setShowHideFields();
                });
                this.setShowHideFields();
                this.form.SendMail.change(function (e) {
                    _this.getGridField();
                    if (!_this.form.SendMail.value)
                        Serenity.EditorUtils.setReadOnly(_this.form.Email, true);
                    else {
                        Serenity.EditorUtils.setReadOnly(_this.form.Email, false);
                    }
                });
                if (!this.form.SendMail.value)
                    Serenity.EditorUtils.setReadOnly(this.form.Email, true);
            };
            CheckOutDialog.prototype.setShowHideFields = function () {
                this.form.EmployeeId.getGridField().toggle(false);
                if (this.form.CheckOutTo.value) {
                    if (this.form.CheckOutTo.value == '1') {
                        this.form.EmployeeId.getGridField().toggle(true);
                    }
                    this.form.SendMail.getGridField().toggle(true);
                    if (this.form.CheckOutTo.value) {
                        if (this.form.CheckOutTo.value == '2') {
                            this.form.SendMail.getGridField().toggle(false);
                        }
                        this.form.Email.getGridField().toggle(true);
                        if (this.form.CheckOutTo.value) {
                            if (this.form.CheckOutTo.value == '2') {
                                this.form.Email.getGridField().toggle(false);
                            }
                        }
                    }
                }
            };
            CheckOutDialog.prototype.getDueDateFields = function () {
                this.form.DueDate.getGridField().toggle(true);
                if (this.form.NoDueDate.value) {
                    this.form.DueDate.getGridField().toggle(false);
                }
            };
            CheckOutDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CheckOutDialog);
            return CheckOutDialog;
        }(Serenity.EntityDialog));
        AddAnAsset.CheckOutDialog = CheckOutDialog;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var CheckOutGrid = /** @class */ (function (_super) {
            __extends(CheckOutGrid, _super);
            function CheckOutGrid(container) {
                return _super.call(this, container) || this;
            }
            CheckOutGrid.prototype.getColumnsKey = function () { return 'AddAnAsset.CheckOut'; };
            CheckOutGrid.prototype.getDialogType = function () { return AddAnAsset.CheckOutDialog; };
            CheckOutGrid.prototype.getIdProperty = function () { return AddAnAsset.CheckOutRow.idProperty; };
            CheckOutGrid.prototype.getInsertPermission = function () { return AddAnAsset.CheckOutRow.insertPermission; };
            CheckOutGrid.prototype.getLocalTextPrefix = function () { return AddAnAsset.CheckOutRow.localTextPrefix; };
            CheckOutGrid.prototype.getService = function () { return AddAnAsset.CheckOutService.baseUrl; };
            CheckOutGrid.prototype.addButtonClick = function () {
                this.editItem({
                    AssetId: this.AssetId
                });
            };
            //protected getInitialTitle() {
            //    return null;
            //}
            CheckOutGrid.prototype.usePager = function () {
                return false;
            };
            Object.defineProperty(CheckOutGrid.prototype, "AssetId", {
                get: function () {
                    return this._AssetId;
                },
                set: function (value) {
                    if (this._AssetId != value) {
                        this._AssetId = value;
                        this.setEquality("AssetId" /* AssetId */, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            CheckOutGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CheckOutGrid);
            return CheckOutGrid;
        }(Serenity.EntityGrid));
        AddAnAsset.CheckOutGrid = CheckOutGrid;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var DisposeAssetDialog = /** @class */ (function (_super) {
            __extends(DisposeAssetDialog, _super);
            function DisposeAssetDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new AddAnAsset.DisposeAssetForm(_this.idPrefix);
                return _this;
            }
            DisposeAssetDialog.prototype.getFormKey = function () { return AddAnAsset.DisposeAssetForm.formKey; };
            DisposeAssetDialog.prototype.getIdProperty = function () { return AddAnAsset.DisposeAssetRow.idProperty; };
            DisposeAssetDialog.prototype.getLocalTextPrefix = function () { return AddAnAsset.DisposeAssetRow.localTextPrefix; };
            DisposeAssetDialog.prototype.getNameProperty = function () { return AddAnAsset.DisposeAssetRow.nameProperty; };
            DisposeAssetDialog.prototype.getService = function () { return AddAnAsset.DisposeAssetService.baseUrl; };
            DisposeAssetDialog.prototype.getDeletePermission = function () { return AddAnAsset.DisposeAssetRow.deletePermission; };
            DisposeAssetDialog.prototype.getInsertPermission = function () { return AddAnAsset.DisposeAssetRow.insertPermission; };
            DisposeAssetDialog.prototype.getUpdatePermission = function () { return AddAnAsset.DisposeAssetRow.updatePermission; };
            DisposeAssetDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DisposeAssetDialog);
            return DisposeAssetDialog;
        }(Serenity.EntityDialog));
        AddAnAsset.DisposeAssetDialog = DisposeAssetDialog;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var DisposeAssetGrid = /** @class */ (function (_super) {
            __extends(DisposeAssetGrid, _super);
            function DisposeAssetGrid(container) {
                return _super.call(this, container) || this;
            }
            DisposeAssetGrid.prototype.getColumnsKey = function () { return 'AddAnAsset.DisposeAsset'; };
            DisposeAssetGrid.prototype.getDialogType = function () { return AddAnAsset.DisposeAssetDialog; };
            DisposeAssetGrid.prototype.getIdProperty = function () { return AddAnAsset.DisposeAssetRow.idProperty; };
            DisposeAssetGrid.prototype.getInsertPermission = function () { return AddAnAsset.DisposeAssetRow.insertPermission; };
            DisposeAssetGrid.prototype.getLocalTextPrefix = function () { return AddAnAsset.DisposeAssetRow.localTextPrefix; };
            DisposeAssetGrid.prototype.getService = function () { return AddAnAsset.DisposeAssetService.baseUrl; };
            DisposeAssetGrid.prototype.addButtonClick = function () {
                this.editItem({
                    AssetId: this.AssetId
                });
            };
            DisposeAssetGrid.prototype.usePager = function () {
                return false;
            };
            Object.defineProperty(DisposeAssetGrid.prototype, "AssetId", {
                get: function () {
                    return this._AssetId;
                },
                set: function (value) {
                    if (this._AssetId != value) {
                        this._AssetId = value;
                        this.setEquality("AssetId" /* AssetId */, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            DisposeAssetGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DisposeAssetGrid);
            return DisposeAssetGrid;
        }(Serenity.EntityGrid));
        AddAnAsset.DisposeAssetGrid = DisposeAssetGrid;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var DocumentDialog = /** @class */ (function (_super) {
            __extends(DocumentDialog, _super);
            function DocumentDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new AddAnAsset.DocumentForm(_this.idPrefix);
                return _this;
            }
            DocumentDialog.prototype.getFormKey = function () { return AddAnAsset.DocumentForm.formKey; };
            DocumentDialog.prototype.getIdProperty = function () { return AddAnAsset.DocumentRow.idProperty; };
            DocumentDialog.prototype.getLocalTextPrefix = function () { return AddAnAsset.DocumentRow.localTextPrefix; };
            DocumentDialog.prototype.getNameProperty = function () { return AddAnAsset.DocumentRow.nameProperty; };
            DocumentDialog.prototype.getService = function () { return AddAnAsset.DocumentService.baseUrl; };
            DocumentDialog.prototype.getDeletePermission = function () { return AddAnAsset.DocumentRow.deletePermission; };
            DocumentDialog.prototype.getInsertPermission = function () { return AddAnAsset.DocumentRow.insertPermission; };
            DocumentDialog.prototype.getUpdatePermission = function () { return AddAnAsset.DocumentRow.updatePermission; };
            DocumentDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DocumentDialog);
            return DocumentDialog;
        }(Serenity.EntityDialog));
        AddAnAsset.DocumentDialog = DocumentDialog;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var DocumentGrid = /** @class */ (function (_super) {
            __extends(DocumentGrid, _super);
            function DocumentGrid(container) {
                return _super.call(this, container) || this;
            }
            DocumentGrid.prototype.getColumnsKey = function () { return 'AddAnAsset.Document'; };
            DocumentGrid.prototype.getDialogType = function () { return AddAnAsset.DocumentDialog; };
            DocumentGrid.prototype.getIdProperty = function () { return AddAnAsset.DocumentRow.idProperty; };
            DocumentGrid.prototype.getInsertPermission = function () { return AddAnAsset.DocumentRow.insertPermission; };
            DocumentGrid.prototype.getLocalTextPrefix = function () { return AddAnAsset.DocumentRow.localTextPrefix; };
            DocumentGrid.prototype.getService = function () { return AddAnAsset.DocumentService.baseUrl; };
            DocumentGrid.prototype.addButtonClick = function () {
                this.editItem({
                    AssetId: this.AssetId
                });
            };
            DocumentGrid.prototype.usePager = function () {
                return false;
            };
            Object.defineProperty(DocumentGrid.prototype, "AssetId", {
                get: function () {
                    return this._AssetId;
                },
                set: function (value) {
                    if (this._AssetId != value) {
                        this._AssetId = value;
                        this.setEquality("AssetId" /* AssetId */, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            DocumentGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DocumentGrid);
            return DocumentGrid;
        }(Serenity.EntityGrid));
        AddAnAsset.DocumentGrid = DocumentGrid;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var DonateAssetDialog = /** @class */ (function (_super) {
            __extends(DonateAssetDialog, _super);
            function DonateAssetDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new AddAnAsset.DonateAssetForm(_this.idPrefix);
                return _this;
            }
            DonateAssetDialog.prototype.getFormKey = function () { return AddAnAsset.DonateAssetForm.formKey; };
            DonateAssetDialog.prototype.getIdProperty = function () { return AddAnAsset.DonateAssetRow.idProperty; };
            DonateAssetDialog.prototype.getLocalTextPrefix = function () { return AddAnAsset.DonateAssetRow.localTextPrefix; };
            DonateAssetDialog.prototype.getNameProperty = function () { return AddAnAsset.DonateAssetRow.nameProperty; };
            DonateAssetDialog.prototype.getService = function () { return AddAnAsset.DonateAssetService.baseUrl; };
            DonateAssetDialog.prototype.getDeletePermission = function () { return AddAnAsset.DonateAssetRow.deletePermission; };
            DonateAssetDialog.prototype.getInsertPermission = function () { return AddAnAsset.DonateAssetRow.insertPermission; };
            DonateAssetDialog.prototype.getUpdatePermission = function () { return AddAnAsset.DonateAssetRow.updatePermission; };
            DonateAssetDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DonateAssetDialog);
            return DonateAssetDialog;
        }(Serenity.EntityDialog));
        AddAnAsset.DonateAssetDialog = DonateAssetDialog;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var DonateAssetGrid = /** @class */ (function (_super) {
            __extends(DonateAssetGrid, _super);
            function DonateAssetGrid(container) {
                return _super.call(this, container) || this;
            }
            DonateAssetGrid.prototype.getColumnsKey = function () { return 'AddAnAsset.DonateAsset'; };
            DonateAssetGrid.prototype.getDialogType = function () { return AddAnAsset.DonateAssetDialog; };
            DonateAssetGrid.prototype.getIdProperty = function () { return AddAnAsset.DonateAssetRow.idProperty; };
            DonateAssetGrid.prototype.getInsertPermission = function () { return AddAnAsset.DonateAssetRow.insertPermission; };
            DonateAssetGrid.prototype.getLocalTextPrefix = function () { return AddAnAsset.DonateAssetRow.localTextPrefix; };
            DonateAssetGrid.prototype.getService = function () { return AddAnAsset.DonateAssetService.baseUrl; };
            DonateAssetGrid.prototype.addButtonClick = function () {
                this.editItem({
                    AssetId: this.AssetId
                });
            };
            DonateAssetGrid.prototype.usePager = function () {
                return false;
            };
            Object.defineProperty(DonateAssetGrid.prototype, "AssetId", {
                get: function () {
                    return this._AssetId;
                },
                set: function (value) {
                    if (this._AssetId != value) {
                        this._AssetId = value;
                        this.setEquality("AssetId" /* AssetId */, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            DonateAssetGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DonateAssetGrid);
            return DonateAssetGrid;
        }(Serenity.EntityGrid));
        AddAnAsset.DonateAssetGrid = DonateAssetGrid;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var LeaseDialog = /** @class */ (function (_super) {
            __extends(LeaseDialog, _super);
            function LeaseDialog() {
                var _this = _super.call(this) || this;
                _this.form = new AddAnAsset.LeaseForm(_this.idPrefix);
                _this.form.SendEmail.change(function (e) {
                    if (!_this.form.SendEmail.value)
                        Serenity.EditorUtils.setReadOnly(_this.form.Email, true);
                    else {
                        Serenity.EditorUtils.setReadOnly(_this.form.Email, false);
                    }
                });
                if (!_this.form.SendEmail.value)
                    Serenity.EditorUtils.setReadOnly(_this.form.Email, true);
                return _this;
            }
            LeaseDialog.prototype.getFormKey = function () { return AddAnAsset.LeaseForm.formKey; };
            LeaseDialog.prototype.getIdProperty = function () { return AddAnAsset.LeaseRow.idProperty; };
            LeaseDialog.prototype.getLocalTextPrefix = function () { return AddAnAsset.LeaseRow.localTextPrefix; };
            LeaseDialog.prototype.getNameProperty = function () { return AddAnAsset.LeaseRow.nameProperty; };
            LeaseDialog.prototype.getService = function () { return AddAnAsset.LeaseService.baseUrl; };
            LeaseDialog.prototype.getDeletePermission = function () { return AddAnAsset.LeaseRow.deletePermission; };
            LeaseDialog.prototype.getInsertPermission = function () { return AddAnAsset.LeaseRow.insertPermission; };
            LeaseDialog.prototype.getUpdatePermission = function () { return AddAnAsset.LeaseRow.updatePermission; };
            LeaseDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LeaseDialog);
            return LeaseDialog;
        }(Serenity.EntityDialog));
        AddAnAsset.LeaseDialog = LeaseDialog;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var LeaseGrid = /** @class */ (function (_super) {
            __extends(LeaseGrid, _super);
            function LeaseGrid(container) {
                return _super.call(this, container) || this;
            }
            LeaseGrid.prototype.getColumnsKey = function () { return 'AddAnAsset.Lease'; };
            LeaseGrid.prototype.getDialogType = function () { return AddAnAsset.LeaseDialog; };
            LeaseGrid.prototype.getIdProperty = function () { return AddAnAsset.LeaseRow.idProperty; };
            LeaseGrid.prototype.getInsertPermission = function () { return AddAnAsset.LeaseRow.insertPermission; };
            LeaseGrid.prototype.getLocalTextPrefix = function () { return AddAnAsset.LeaseRow.localTextPrefix; };
            LeaseGrid.prototype.getService = function () { return AddAnAsset.LeaseService.baseUrl; };
            LeaseGrid.prototype.addButtonClick = function () {
                this.editItem({
                    AssetId: this.AssetId
                });
            };
            LeaseGrid.prototype.usePager = function () {
                return false;
            };
            Object.defineProperty(LeaseGrid.prototype, "AssetId", {
                get: function () {
                    return this._AssetId;
                },
                set: function (value) {
                    if (this._AssetId != value) {
                        this._AssetId = value;
                        this.setEquality("AssetId" /* AssetId */, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            LeaseGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LeaseGrid);
            return LeaseGrid;
        }(Serenity.EntityGrid));
        AddAnAsset.LeaseGrid = LeaseGrid;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var RepairAssetDialog = /** @class */ (function (_super) {
            __extends(RepairAssetDialog, _super);
            function RepairAssetDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new AddAnAsset.RepairAssetForm(_this.idPrefix);
                return _this;
            }
            RepairAssetDialog.prototype.getFormKey = function () { return AddAnAsset.RepairAssetForm.formKey; };
            RepairAssetDialog.prototype.getIdProperty = function () { return AddAnAsset.RepairAssetRow.idProperty; };
            RepairAssetDialog.prototype.getLocalTextPrefix = function () { return AddAnAsset.RepairAssetRow.localTextPrefix; };
            RepairAssetDialog.prototype.getNameProperty = function () { return AddAnAsset.RepairAssetRow.nameProperty; };
            RepairAssetDialog.prototype.getService = function () { return AddAnAsset.RepairAssetService.baseUrl; };
            RepairAssetDialog.prototype.getDeletePermission = function () { return AddAnAsset.RepairAssetRow.deletePermission; };
            RepairAssetDialog.prototype.getInsertPermission = function () { return AddAnAsset.RepairAssetRow.insertPermission; };
            RepairAssetDialog.prototype.getUpdatePermission = function () { return AddAnAsset.RepairAssetRow.updatePermission; };
            RepairAssetDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RepairAssetDialog);
            return RepairAssetDialog;
        }(Serenity.EntityDialog));
        AddAnAsset.RepairAssetDialog = RepairAssetDialog;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var RepairAssetGrid = /** @class */ (function (_super) {
            __extends(RepairAssetGrid, _super);
            function RepairAssetGrid(container) {
                return _super.call(this, container) || this;
            }
            RepairAssetGrid.prototype.getColumnsKey = function () { return 'AddAnAsset.RepairAsset'; };
            RepairAssetGrid.prototype.getDialogType = function () { return AddAnAsset.RepairAssetDialog; };
            RepairAssetGrid.prototype.getIdProperty = function () { return AddAnAsset.RepairAssetRow.idProperty; };
            RepairAssetGrid.prototype.getInsertPermission = function () { return AddAnAsset.RepairAssetRow.insertPermission; };
            RepairAssetGrid.prototype.getLocalTextPrefix = function () { return AddAnAsset.RepairAssetRow.localTextPrefix; };
            RepairAssetGrid.prototype.getService = function () { return AddAnAsset.RepairAssetService.baseUrl; };
            RepairAssetGrid.prototype.addButtonClick = function () {
                this.editItem({
                    AssetId: this.AssetId
                });
            };
            RepairAssetGrid.prototype.usePager = function () {
                return false;
            };
            Object.defineProperty(RepairAssetGrid.prototype, "AssetId", {
                get: function () {
                    return this._AssetId;
                },
                set: function (value) {
                    if (this._AssetId != value) {
                        this._AssetId = value;
                        this.setEquality("AssetId" /* AssetId */, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            RepairAssetGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RepairAssetGrid);
            return RepairAssetGrid;
        }(Serenity.EntityGrid));
        AddAnAsset.RepairAssetGrid = RepairAssetGrid;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var SellAssetDialog = /** @class */ (function (_super) {
            __extends(SellAssetDialog, _super);
            function SellAssetDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new AddAnAsset.SellAssetForm(_this.idPrefix);
                return _this;
            }
            SellAssetDialog.prototype.getFormKey = function () { return AddAnAsset.SellAssetForm.formKey; };
            SellAssetDialog.prototype.getIdProperty = function () { return AddAnAsset.SellAssetRow.idProperty; };
            SellAssetDialog.prototype.getLocalTextPrefix = function () { return AddAnAsset.SellAssetRow.localTextPrefix; };
            SellAssetDialog.prototype.getNameProperty = function () { return AddAnAsset.SellAssetRow.nameProperty; };
            SellAssetDialog.prototype.getService = function () { return AddAnAsset.SellAssetService.baseUrl; };
            SellAssetDialog.prototype.getDeletePermission = function () { return AddAnAsset.SellAssetRow.deletePermission; };
            SellAssetDialog.prototype.getInsertPermission = function () { return AddAnAsset.SellAssetRow.insertPermission; };
            SellAssetDialog.prototype.getUpdatePermission = function () { return AddAnAsset.SellAssetRow.updatePermission; };
            SellAssetDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SellAssetDialog);
            return SellAssetDialog;
        }(Serenity.EntityDialog));
        AddAnAsset.SellAssetDialog = SellAssetDialog;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var AddAnAsset;
    (function (AddAnAsset) {
        var SellAssetGrid = /** @class */ (function (_super) {
            __extends(SellAssetGrid, _super);
            function SellAssetGrid(container) {
                return _super.call(this, container) || this;
            }
            SellAssetGrid.prototype.getColumnsKey = function () { return 'AddAnAsset.SellAsset'; };
            SellAssetGrid.prototype.getDialogType = function () { return AddAnAsset.SellAssetDialog; };
            SellAssetGrid.prototype.getIdProperty = function () { return AddAnAsset.SellAssetRow.idProperty; };
            SellAssetGrid.prototype.getInsertPermission = function () { return AddAnAsset.SellAssetRow.insertPermission; };
            SellAssetGrid.prototype.getLocalTextPrefix = function () { return AddAnAsset.SellAssetRow.localTextPrefix; };
            SellAssetGrid.prototype.getService = function () { return AddAnAsset.SellAssetService.baseUrl; };
            SellAssetGrid.prototype.addButtonClick = function () {
                this.editItem({
                    AssetId: this.AssetId
                });
            };
            SellAssetGrid.prototype.usePager = function () {
                return false;
            };
            Object.defineProperty(SellAssetGrid.prototype, "AssetId", {
                get: function () {
                    return this._AssetId;
                },
                set: function (value) {
                    if (this._AssetId != value) {
                        this._AssetId = value;
                        this.setEquality("AssetId" /* AssetId */, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            SellAssetGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SellAssetGrid);
            return SellAssetGrid;
        }(Serenity.EntityGrid));
        AddAnAsset.SellAssetGrid = SellAssetGrid;
    })(AddAnAsset = AssetManagement.AddAnAsset || (AssetManagement.AddAnAsset = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = AssetManagement.Administration || (AssetManagement.Administration = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = AssetManagement.Administration || (AssetManagement.Administration = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = AssetManagement.Administration || (AssetManagement.Administration = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = AssetManagement.Administration || (AssetManagement.Administration = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = AssetManagement.Administration || (AssetManagement.Administration = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = AssetManagement.Administration || (AssetManagement.Administration = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = AssetManagement.Administration || (AssetManagement.Administration = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = AssetManagement.Administration || (AssetManagement.Administration = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = AssetManagement.Authorization || (AssetManagement.Authorization = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = AssetManagement.Administration || (AssetManagement.Administration = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = AssetManagement.Administration || (AssetManagement.Administration = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = AssetManagement.Administration || (AssetManagement.Administration = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = AssetManagement.Administration || (AssetManagement.Administration = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Advanced;
    (function (Advanced) {
        var CustomersDialog = /** @class */ (function (_super) {
            __extends(CustomersDialog, _super);
            function CustomersDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Advanced.CustomersForm(_this.idPrefix);
                return _this;
            }
            CustomersDialog.prototype.getFormKey = function () { return Advanced.CustomersForm.formKey; };
            CustomersDialog.prototype.getIdProperty = function () { return Advanced.CustomersRow.idProperty; };
            CustomersDialog.prototype.getLocalTextPrefix = function () { return Advanced.CustomersRow.localTextPrefix; };
            CustomersDialog.prototype.getNameProperty = function () { return Advanced.CustomersRow.nameProperty; };
            CustomersDialog.prototype.getService = function () { return Advanced.CustomersService.baseUrl; };
            CustomersDialog.prototype.getDeletePermission = function () { return Advanced.CustomersRow.deletePermission; };
            CustomersDialog.prototype.getInsertPermission = function () { return Advanced.CustomersRow.insertPermission; };
            CustomersDialog.prototype.getUpdatePermission = function () { return Advanced.CustomersRow.updatePermission; };
            CustomersDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomersDialog);
            return CustomersDialog;
        }(Serenity.EntityDialog));
        Advanced.CustomersDialog = CustomersDialog;
    })(Advanced = AssetManagement.Advanced || (AssetManagement.Advanced = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Advanced;
    (function (Advanced) {
        var CustomersGrid = /** @class */ (function (_super) {
            __extends(CustomersGrid, _super);
            function CustomersGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomersGrid.prototype.getColumnsKey = function () { return 'Advanced.Customers'; };
            CustomersGrid.prototype.getDialogType = function () { return Advanced.CustomersDialog; };
            CustomersGrid.prototype.getIdProperty = function () { return Advanced.CustomersRow.idProperty; };
            CustomersGrid.prototype.getInsertPermission = function () { return Advanced.CustomersRow.insertPermission; };
            CustomersGrid.prototype.getLocalTextPrefix = function () { return Advanced.CustomersRow.localTextPrefix; };
            CustomersGrid.prototype.getService = function () { return Advanced.CustomersService.baseUrl; };
            CustomersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomersGrid);
            return CustomersGrid;
        }(Serenity.EntityGrid));
        Advanced.CustomersGrid = CustomersGrid;
    })(Advanced = AssetManagement.Advanced || (AssetManagement.Advanced = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Advanced;
    (function (Advanced) {
        var EmployeeDialog = /** @class */ (function (_super) {
            __extends(EmployeeDialog, _super);
            function EmployeeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Advanced.EmployeeForm(_this.idPrefix);
                return _this;
            }
            EmployeeDialog.prototype.getFormKey = function () { return Advanced.EmployeeForm.formKey; };
            EmployeeDialog.prototype.getIdProperty = function () { return Advanced.EmployeeRow.idProperty; };
            EmployeeDialog.prototype.getLocalTextPrefix = function () { return Advanced.EmployeeRow.localTextPrefix; };
            EmployeeDialog.prototype.getNameProperty = function () { return Advanced.EmployeeRow.nameProperty; };
            EmployeeDialog.prototype.getService = function () { return Advanced.EmployeeService.baseUrl; };
            EmployeeDialog.prototype.getDeletePermission = function () { return Advanced.EmployeeRow.deletePermission; };
            EmployeeDialog.prototype.getInsertPermission = function () { return Advanced.EmployeeRow.insertPermission; };
            EmployeeDialog.prototype.getUpdatePermission = function () { return Advanced.EmployeeRow.updatePermission; };
            EmployeeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeeDialog);
            return EmployeeDialog;
        }(Serenity.EntityDialog));
        Advanced.EmployeeDialog = EmployeeDialog;
    })(Advanced = AssetManagement.Advanced || (AssetManagement.Advanced = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Advanced;
    (function (Advanced) {
        var EmployeeGrid = /** @class */ (function (_super) {
            __extends(EmployeeGrid, _super);
            function EmployeeGrid(container) {
                return _super.call(this, container) || this;
            }
            EmployeeGrid.prototype.getColumnsKey = function () { return 'Advanced.Employee'; };
            EmployeeGrid.prototype.getDialogType = function () { return Advanced.EmployeeDialog; };
            EmployeeGrid.prototype.getIdProperty = function () { return Advanced.EmployeeRow.idProperty; };
            EmployeeGrid.prototype.getInsertPermission = function () { return Advanced.EmployeeRow.insertPermission; };
            EmployeeGrid.prototype.getLocalTextPrefix = function () { return Advanced.EmployeeRow.localTextPrefix; };
            EmployeeGrid.prototype.getService = function () { return Advanced.EmployeeService.baseUrl; };
            EmployeeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeeGrid);
            return EmployeeGrid;
        }(Serenity.EntityGrid));
        Advanced.EmployeeGrid = EmployeeGrid;
    })(Advanced = AssetManagement.Advanced || (AssetManagement.Advanced = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Advanced;
    (function (Advanced) {
        var FundingDialog = /** @class */ (function (_super) {
            __extends(FundingDialog, _super);
            function FundingDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Advanced.FundingForm(_this.idPrefix);
                return _this;
            }
            FundingDialog.prototype.getFormKey = function () { return Advanced.FundingForm.formKey; };
            FundingDialog.prototype.getIdProperty = function () { return Advanced.FundingRow.idProperty; };
            FundingDialog.prototype.getLocalTextPrefix = function () { return Advanced.FundingRow.localTextPrefix; };
            FundingDialog.prototype.getNameProperty = function () { return Advanced.FundingRow.nameProperty; };
            FundingDialog.prototype.getService = function () { return Advanced.FundingService.baseUrl; };
            FundingDialog.prototype.getDeletePermission = function () { return Advanced.FundingRow.deletePermission; };
            FundingDialog.prototype.getInsertPermission = function () { return Advanced.FundingRow.insertPermission; };
            FundingDialog.prototype.getUpdatePermission = function () { return Advanced.FundingRow.updatePermission; };
            FundingDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FundingDialog);
            return FundingDialog;
        }(Serenity.EntityDialog));
        Advanced.FundingDialog = FundingDialog;
    })(Advanced = AssetManagement.Advanced || (AssetManagement.Advanced = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Advanced;
    (function (Advanced) {
        var FundingGrid = /** @class */ (function (_super) {
            __extends(FundingGrid, _super);
            function FundingGrid(container) {
                return _super.call(this, container) || this;
            }
            FundingGrid.prototype.getColumnsKey = function () { return 'Advanced.Funding'; };
            FundingGrid.prototype.getDialogType = function () { return Advanced.FundingDialog; };
            FundingGrid.prototype.getIdProperty = function () { return Advanced.FundingRow.idProperty; };
            FundingGrid.prototype.getInsertPermission = function () { return Advanced.FundingRow.insertPermission; };
            FundingGrid.prototype.getLocalTextPrefix = function () { return Advanced.FundingRow.localTextPrefix; };
            FundingGrid.prototype.getService = function () { return Advanced.FundingService.baseUrl; };
            FundingGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FundingGrid);
            return FundingGrid;
        }(Serenity.EntityGrid));
        Advanced.FundingGrid = FundingGrid;
    })(Advanced = AssetManagement.Advanced || (AssetManagement.Advanced = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = AssetManagement.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = AssetManagement.LanguageList || (AssetManagement.LanguageList = {}));
})(AssetManagement || (AssetManagement = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var AssetManagement;
(function (AssetManagement) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('AssetManagement');
        Serenity.EntityDialog.defaultLanguageList = AssetManagement.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = AssetManagement.ScriptInitialization || (AssetManagement.ScriptInitialization = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    AssetManagement.BasicProgressDialog = BasicProgressDialog;
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new AssetManagement.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = AssetManagement.Common || (AssetManagement.Common = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = AssetManagement.DialogUtils || (AssetManagement.DialogUtils = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = AssetManagement.Common || (AssetManagement.Common = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = AssetManagement.Common || (AssetManagement.Common = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase.prototype.enableDeleteColumn = function () {
                return false;
            };
            GridEditorBase.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (this.enableDeleteColumn()) {
                    columns.unshift({
                        field: 'Delete Row',
                        name: '',
                        format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                            '<i class="fa fa-trash-o text-red"></i></a>'; },
                        width: 24,
                        minWidth: 24,
                        maxWidth: 24
                    });
                }
                return columns;
            };
            GridEditorBase.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (this.enableDeleteColumn()) {
                        if (target.hasClass('delete-row')) {
                            Q.confirm(Q.text('Controls.EntityDialog.DeleteConfirmation'), function () {
                                _this.deleteEntity(item[_this.getIdProperty()]);
                            });
                        }
                    }
                }
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = AssetManagement.Common || (AssetManagement.Common = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = AssetManagement.Common || (AssetManagement.Common = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    AssetManagement.StaticTextBlock = StaticTextBlock;
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = AssetManagement.Common || (AssetManagement.Common = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = AssetManagement.Common || (AssetManagement.Common = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = AssetManagement.Common || (AssetManagement.Common = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        if (output == 'datauri')
                            doc.output(output);
                        else {
                            var tmpOut = doc.output('datauristring');
                            if (output == 'dataurlnewwindow') {
                                var fileTmpName = options.reportTitle || g.getTitle();
                                var url_with_name = tmpOut.replace("data:application/pdf;", "data:application/pdf;name=" + fileTmpName + ".pdf;");
                                var html = '<html>' +
                                    '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
                                    '<body>' +
                                    '<p></p>' +
                                    '<iframe type="application/pdf" src="' + url_with_name + '"></iframe>' +
                                    '</body></html>';
                                var a = window.open("about:blank", "_blank");
                                a.document.write(html);
                                a.document.close();
                            }
                        }
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = AssetManagement.Common || (AssetManagement.Common = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = AssetManagement.Common || (AssetManagement.Common = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = AssetManagement.Common || (AssetManagement.Common = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = AssetManagement.Common || (AssetManagement.Common = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = AssetManagement.Common || (AssetManagement.Common = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Membership;
    (function (Membership) {
        var LoginPanel = /** @class */ (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                $.fn['vegas'] && $('body')['vegas']({
                    delay: 30000,
                    cover: true,
                    overlay: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA3NCSVQICAjb4U" +
                        "/gAAAABlBMVEX///8AAABVwtN+AAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAAAsQAAALEAVuRnQsAAAAWdEVYdENyZWF0" +
                        "aW9uIFRpbWUAMDQvMTMvMTGrW0T6AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAAAxJREFUCJljaGBgAAABhACBrONIPgAAAABJRU5ErkJggg==",
                    slides: [
                        { src: Q.resolveUrl("~/Content/site/slides/slide1.jpg"), transition: 'fade' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide2.jpg"), transition: 'zoomOut' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide3.jpg"), transition: 'swirlLeft' }
                    ]
                });
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            _this.redirectToReturnUrl();
                        },
                        onError: function (response) {
                            if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                                window.location.href = response.Error.Arguments;
                                return;
                            }
                            if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                                Q.notifyError(response.Error.Message);
                                $('#Password').focus();
                                return;
                            }
                            Q.ErrorHandling.showServiceError(response.Error);
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel.prototype.redirectToReturnUrl = function () {
                var q = Q.parseQueryString();
                var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                if (returnUrl) {
                    var hash = window.location.hash;
                    if (hash != null && hash != '#')
                        returnUrl += hash;
                    window.location.href = returnUrl;
                }
                else {
                    window.location.href = Q.resolveUrl('~/');
                }
            };
            LoginPanel.prototype.getTemplate = function () {
                return "\n<div class=\"flex-layout\">\n    <div class=\"logo\"></div>\n    <h3>" + Q.text("Forms.Membership.Login.FormTitle") + "</h3>\n    <form id=\"~_Form\" action=\"\">\n        <div class=\"s-Form\">\n            <div class=\"fieldset ui-widget ui-widget-content ui-corner-all\">\n                <div id=\"~_PropertyGrid\"></div>\n                <div class=\"clear\"></div>\n            </div>\n            <div class=\"buttons\">\n                <button id=\"~_LoginButton\" type=\"submit\" class=\"btn btn-primary\">\n                    " + Q.text("Forms.Membership.Login.SignInButton") + "\n                </button>\n            </div>\n            <div class=\"actions\">\n                <a href=\"" + Q.resolveUrl('~/Account/ForgotPassword') + "\"><i class=\"fa fa-angle-right\"></i>&nbsp;" + Q.text("Forms.Membership.Login.ForgotPassword") + "</a>\n                <a href=\"" + Q.resolveUrl('~/Account/SignUp') + "\"><i class=\"fa fa-angle-right\"></i>&nbsp;" + Q.text("Forms.Membership.Login.SignUpButton") + "</a>\n                <div class=\"clear\"></div>\n            </div>\n        </div>\n    </form>\n</div>\n";
            };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = AssetManagement.Membership || (AssetManagement.Membership = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('NewPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = AssetManagement.Membership || (AssetManagement.Membership = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = AssetManagement.Membership || (AssetManagement.Membership = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = AssetManagement.Membership || (AssetManagement.Membership = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = AssetManagement.Membership || (AssetManagement.Membership = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var BrandDialog = /** @class */ (function (_super) {
            __extends(BrandDialog, _super);
            function BrandDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Setup.BrandForm(_this.idPrefix);
                return _this;
            }
            BrandDialog.prototype.getFormKey = function () { return Setup.BrandForm.formKey; };
            BrandDialog.prototype.getIdProperty = function () { return Setup.BrandRow.idProperty; };
            BrandDialog.prototype.getLocalTextPrefix = function () { return Setup.BrandRow.localTextPrefix; };
            BrandDialog.prototype.getNameProperty = function () { return Setup.BrandRow.nameProperty; };
            BrandDialog.prototype.getService = function () { return Setup.BrandService.baseUrl; };
            BrandDialog.prototype.getDeletePermission = function () { return Setup.BrandRow.deletePermission; };
            BrandDialog.prototype.getInsertPermission = function () { return Setup.BrandRow.insertPermission; };
            BrandDialog.prototype.getUpdatePermission = function () { return Setup.BrandRow.updatePermission; };
            BrandDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BrandDialog);
            return BrandDialog;
        }(Serenity.EntityDialog));
        Setup.BrandDialog = BrandDialog;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var BrandGrid = /** @class */ (function (_super) {
            __extends(BrandGrid, _super);
            function BrandGrid(container) {
                return _super.call(this, container) || this;
            }
            BrandGrid.prototype.getColumnsKey = function () { return 'Setup.Brand'; };
            BrandGrid.prototype.getDialogType = function () { return Setup.BrandDialog; };
            BrandGrid.prototype.getIdProperty = function () { return Setup.BrandRow.idProperty; };
            BrandGrid.prototype.getInsertPermission = function () { return Setup.BrandRow.insertPermission; };
            BrandGrid.prototype.getLocalTextPrefix = function () { return Setup.BrandRow.localTextPrefix; };
            BrandGrid.prototype.getService = function () { return Setup.BrandService.baseUrl; };
            BrandGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BrandGrid);
            return BrandGrid;
        }(Serenity.EntityGrid));
        Setup.BrandGrid = BrandGrid;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var CategoryDialog = /** @class */ (function (_super) {
            __extends(CategoryDialog, _super);
            function CategoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Setup.CategoryForm(_this.idPrefix);
                return _this;
            }
            CategoryDialog.prototype.getFormKey = function () { return Setup.CategoryForm.formKey; };
            CategoryDialog.prototype.getIdProperty = function () { return Setup.CategoryRow.idProperty; };
            CategoryDialog.prototype.getLocalTextPrefix = function () { return Setup.CategoryRow.localTextPrefix; };
            CategoryDialog.prototype.getNameProperty = function () { return Setup.CategoryRow.nameProperty; };
            CategoryDialog.prototype.getService = function () { return Setup.CategoryService.baseUrl; };
            CategoryDialog.prototype.getDeletePermission = function () { return Setup.CategoryRow.deletePermission; };
            CategoryDialog.prototype.getInsertPermission = function () { return Setup.CategoryRow.insertPermission; };
            CategoryDialog.prototype.getUpdatePermission = function () { return Setup.CategoryRow.updatePermission; };
            CategoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryDialog);
            return CategoryDialog;
        }(Serenity.EntityDialog));
        Setup.CategoryDialog = CategoryDialog;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var CategoryGrid = /** @class */ (function (_super) {
            __extends(CategoryGrid, _super);
            function CategoryGrid(container) {
                return _super.call(this, container) || this;
            }
            CategoryGrid.prototype.getColumnsKey = function () { return 'Setup.Category'; };
            CategoryGrid.prototype.getDialogType = function () { return Setup.CategoryDialog; };
            CategoryGrid.prototype.getIdProperty = function () { return Setup.CategoryRow.idProperty; };
            CategoryGrid.prototype.getInsertPermission = function () { return Setup.CategoryRow.insertPermission; };
            CategoryGrid.prototype.getLocalTextPrefix = function () { return Setup.CategoryRow.localTextPrefix; };
            CategoryGrid.prototype.getService = function () { return Setup.CategoryService.baseUrl; };
            CategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryGrid);
            return CategoryGrid;
        }(Serenity.EntityGrid));
        Setup.CategoryGrid = CategoryGrid;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var CompanyDialog = /** @class */ (function (_super) {
            __extends(CompanyDialog, _super);
            function CompanyDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Setup.CompanyForm(_this.idPrefix);
                return _this;
            }
            CompanyDialog.prototype.getFormKey = function () { return Setup.CompanyForm.formKey; };
            CompanyDialog.prototype.getIdProperty = function () { return Setup.CompanyRow.idProperty; };
            CompanyDialog.prototype.getLocalTextPrefix = function () { return Setup.CompanyRow.localTextPrefix; };
            CompanyDialog.prototype.getNameProperty = function () { return Setup.CompanyRow.nameProperty; };
            CompanyDialog.prototype.getService = function () { return Setup.CompanyService.baseUrl; };
            CompanyDialog.prototype.getDeletePermission = function () { return Setup.CompanyRow.deletePermission; };
            CompanyDialog.prototype.getInsertPermission = function () { return Setup.CompanyRow.insertPermission; };
            CompanyDialog.prototype.getUpdatePermission = function () { return Setup.CompanyRow.updatePermission; };
            CompanyDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CompanyDialog);
            return CompanyDialog;
        }(Serenity.EntityDialog));
        Setup.CompanyDialog = CompanyDialog;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var CompanyGrid = /** @class */ (function (_super) {
            __extends(CompanyGrid, _super);
            function CompanyGrid(container) {
                return _super.call(this, container) || this;
            }
            CompanyGrid.prototype.getColumnsKey = function () { return 'Setup.Company'; };
            CompanyGrid.prototype.getDialogType = function () { return Setup.CompanyDialog; };
            CompanyGrid.prototype.getIdProperty = function () { return Setup.CompanyRow.idProperty; };
            CompanyGrid.prototype.getInsertPermission = function () { return Setup.CompanyRow.insertPermission; };
            CompanyGrid.prototype.getLocalTextPrefix = function () { return Setup.CompanyRow.localTextPrefix; };
            CompanyGrid.prototype.getService = function () { return Setup.CompanyService.baseUrl; };
            CompanyGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CompanyGrid);
            return CompanyGrid;
        }(Serenity.EntityGrid));
        Setup.CompanyGrid = CompanyGrid;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var CountryDialog = /** @class */ (function (_super) {
            __extends(CountryDialog, _super);
            function CountryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Setup.CountryForm(_this.idPrefix);
                return _this;
            }
            CountryDialog.prototype.getFormKey = function () { return Setup.CountryForm.formKey; };
            CountryDialog.prototype.getIdProperty = function () { return Setup.CountryRow.idProperty; };
            CountryDialog.prototype.getLocalTextPrefix = function () { return Setup.CountryRow.localTextPrefix; };
            CountryDialog.prototype.getNameProperty = function () { return Setup.CountryRow.nameProperty; };
            CountryDialog.prototype.getService = function () { return Setup.CountryService.baseUrl; };
            CountryDialog.prototype.getDeletePermission = function () { return Setup.CountryRow.deletePermission; };
            CountryDialog.prototype.getInsertPermission = function () { return Setup.CountryRow.insertPermission; };
            CountryDialog.prototype.getUpdatePermission = function () { return Setup.CountryRow.updatePermission; };
            CountryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CountryDialog);
            return CountryDialog;
        }(Serenity.EntityDialog));
        Setup.CountryDialog = CountryDialog;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var CountryGrid = /** @class */ (function (_super) {
            __extends(CountryGrid, _super);
            function CountryGrid(container) {
                return _super.call(this, container) || this;
            }
            CountryGrid.prototype.getColumnsKey = function () { return 'Setup.Country'; };
            CountryGrid.prototype.getDialogType = function () { return Setup.CountryDialog; };
            CountryGrid.prototype.getIdProperty = function () { return Setup.CountryRow.idProperty; };
            CountryGrid.prototype.getInsertPermission = function () { return Setup.CountryRow.insertPermission; };
            CountryGrid.prototype.getLocalTextPrefix = function () { return Setup.CountryRow.localTextPrefix; };
            CountryGrid.prototype.getService = function () { return Setup.CountryService.baseUrl; };
            CountryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CountryGrid);
            return CountryGrid;
        }(Serenity.EntityGrid));
        Setup.CountryGrid = CountryGrid;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var CurrencyDialog = /** @class */ (function (_super) {
            __extends(CurrencyDialog, _super);
            function CurrencyDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Setup.CurrencyForm(_this.idPrefix);
                return _this;
            }
            CurrencyDialog.prototype.getFormKey = function () { return Setup.CurrencyForm.formKey; };
            CurrencyDialog.prototype.getIdProperty = function () { return Setup.CurrencyRow.idProperty; };
            CurrencyDialog.prototype.getLocalTextPrefix = function () { return Setup.CurrencyRow.localTextPrefix; };
            CurrencyDialog.prototype.getNameProperty = function () { return Setup.CurrencyRow.nameProperty; };
            CurrencyDialog.prototype.getService = function () { return Setup.CurrencyService.baseUrl; };
            CurrencyDialog.prototype.getDeletePermission = function () { return Setup.CurrencyRow.deletePermission; };
            CurrencyDialog.prototype.getInsertPermission = function () { return Setup.CurrencyRow.insertPermission; };
            CurrencyDialog.prototype.getUpdatePermission = function () { return Setup.CurrencyRow.updatePermission; };
            CurrencyDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CurrencyDialog);
            return CurrencyDialog;
        }(Serenity.EntityDialog));
        Setup.CurrencyDialog = CurrencyDialog;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var CurrencyGrid = /** @class */ (function (_super) {
            __extends(CurrencyGrid, _super);
            function CurrencyGrid(container) {
                return _super.call(this, container) || this;
            }
            CurrencyGrid.prototype.getColumnsKey = function () { return 'Setup.Currency'; };
            CurrencyGrid.prototype.getDialogType = function () { return Setup.CurrencyDialog; };
            CurrencyGrid.prototype.getIdProperty = function () { return Setup.CurrencyRow.idProperty; };
            CurrencyGrid.prototype.getInsertPermission = function () { return Setup.CurrencyRow.insertPermission; };
            CurrencyGrid.prototype.getLocalTextPrefix = function () { return Setup.CurrencyRow.localTextPrefix; };
            CurrencyGrid.prototype.getService = function () { return Setup.CurrencyService.baseUrl; };
            CurrencyGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CurrencyGrid);
            return CurrencyGrid;
        }(Serenity.EntityGrid));
        Setup.CurrencyGrid = CurrencyGrid;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var DepartmentDialog = /** @class */ (function (_super) {
            __extends(DepartmentDialog, _super);
            function DepartmentDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Setup.DepartmentForm(_this.idPrefix);
                return _this;
            }
            DepartmentDialog.prototype.getFormKey = function () { return Setup.DepartmentForm.formKey; };
            DepartmentDialog.prototype.getIdProperty = function () { return Setup.DepartmentRow.idProperty; };
            DepartmentDialog.prototype.getLocalTextPrefix = function () { return Setup.DepartmentRow.localTextPrefix; };
            DepartmentDialog.prototype.getNameProperty = function () { return Setup.DepartmentRow.nameProperty; };
            DepartmentDialog.prototype.getService = function () { return Setup.DepartmentService.baseUrl; };
            DepartmentDialog.prototype.getDeletePermission = function () { return Setup.DepartmentRow.deletePermission; };
            DepartmentDialog.prototype.getInsertPermission = function () { return Setup.DepartmentRow.insertPermission; };
            DepartmentDialog.prototype.getUpdatePermission = function () { return Setup.DepartmentRow.updatePermission; };
            DepartmentDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DepartmentDialog);
            return DepartmentDialog;
        }(Serenity.EntityDialog));
        Setup.DepartmentDialog = DepartmentDialog;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var DepartmentGrid = /** @class */ (function (_super) {
            __extends(DepartmentGrid, _super);
            function DepartmentGrid(container) {
                return _super.call(this, container) || this;
            }
            DepartmentGrid.prototype.getColumnsKey = function () { return 'Setup.Department'; };
            DepartmentGrid.prototype.getDialogType = function () { return Setup.DepartmentDialog; };
            DepartmentGrid.prototype.getIdProperty = function () { return Setup.DepartmentRow.idProperty; };
            DepartmentGrid.prototype.getInsertPermission = function () { return Setup.DepartmentRow.insertPermission; };
            DepartmentGrid.prototype.getLocalTextPrefix = function () { return Setup.DepartmentRow.localTextPrefix; };
            DepartmentGrid.prototype.getService = function () { return Setup.DepartmentService.baseUrl; };
            DepartmentGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DepartmentGrid);
            return DepartmentGrid;
        }(Serenity.EntityGrid));
        Setup.DepartmentGrid = DepartmentGrid;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var LocationDialog = /** @class */ (function (_super) {
            __extends(LocationDialog, _super);
            function LocationDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Setup.LocationForm(_this.idPrefix);
                return _this;
            }
            LocationDialog.prototype.getFormKey = function () { return Setup.LocationForm.formKey; };
            LocationDialog.prototype.getIdProperty = function () { return Setup.LocationRow.idProperty; };
            LocationDialog.prototype.getLocalTextPrefix = function () { return Setup.LocationRow.localTextPrefix; };
            LocationDialog.prototype.getNameProperty = function () { return Setup.LocationRow.nameProperty; };
            LocationDialog.prototype.getService = function () { return Setup.LocationService.baseUrl; };
            LocationDialog.prototype.getDeletePermission = function () { return Setup.LocationRow.deletePermission; };
            LocationDialog.prototype.getInsertPermission = function () { return Setup.LocationRow.insertPermission; };
            LocationDialog.prototype.getUpdatePermission = function () { return Setup.LocationRow.updatePermission; };
            LocationDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LocationDialog);
            return LocationDialog;
        }(Serenity.EntityDialog));
        Setup.LocationDialog = LocationDialog;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var LocationGrid = /** @class */ (function (_super) {
            __extends(LocationGrid, _super);
            function LocationGrid(container) {
                return _super.call(this, container) || this;
            }
            LocationGrid.prototype.getColumnsKey = function () { return 'Setup.Location'; };
            LocationGrid.prototype.getDialogType = function () { return Setup.LocationDialog; };
            LocationGrid.prototype.getIdProperty = function () { return Setup.LocationRow.idProperty; };
            LocationGrid.prototype.getInsertPermission = function () { return Setup.LocationRow.insertPermission; };
            LocationGrid.prototype.getLocalTextPrefix = function () { return Setup.LocationRow.localTextPrefix; };
            LocationGrid.prototype.getService = function () { return Setup.LocationService.baseUrl; };
            LocationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LocationGrid);
            return LocationGrid;
        }(Serenity.EntityGrid));
        Setup.LocationGrid = LocationGrid;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var MaintenanceStatusDialog = /** @class */ (function (_super) {
            __extends(MaintenanceStatusDialog, _super);
            function MaintenanceStatusDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Setup.MaintenanceStatusForm(_this.idPrefix);
                return _this;
            }
            MaintenanceStatusDialog.prototype.getFormKey = function () { return Setup.MaintenanceStatusForm.formKey; };
            MaintenanceStatusDialog.prototype.getIdProperty = function () { return Setup.MaintenanceStatusRow.idProperty; };
            MaintenanceStatusDialog.prototype.getLocalTextPrefix = function () { return Setup.MaintenanceStatusRow.localTextPrefix; };
            MaintenanceStatusDialog.prototype.getNameProperty = function () { return Setup.MaintenanceStatusRow.nameProperty; };
            MaintenanceStatusDialog.prototype.getService = function () { return Setup.MaintenanceStatusService.baseUrl; };
            MaintenanceStatusDialog.prototype.getDeletePermission = function () { return Setup.MaintenanceStatusRow.deletePermission; };
            MaintenanceStatusDialog.prototype.getInsertPermission = function () { return Setup.MaintenanceStatusRow.insertPermission; };
            MaintenanceStatusDialog.prototype.getUpdatePermission = function () { return Setup.MaintenanceStatusRow.updatePermission; };
            MaintenanceStatusDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MaintenanceStatusDialog);
            return MaintenanceStatusDialog;
        }(Serenity.EntityDialog));
        Setup.MaintenanceStatusDialog = MaintenanceStatusDialog;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var MaintenanceStatusGrid = /** @class */ (function (_super) {
            __extends(MaintenanceStatusGrid, _super);
            function MaintenanceStatusGrid(container) {
                return _super.call(this, container) || this;
            }
            MaintenanceStatusGrid.prototype.getColumnsKey = function () { return 'Setup.MaintenanceStatus'; };
            MaintenanceStatusGrid.prototype.getDialogType = function () { return Setup.MaintenanceStatusDialog; };
            MaintenanceStatusGrid.prototype.getIdProperty = function () { return Setup.MaintenanceStatusRow.idProperty; };
            MaintenanceStatusGrid.prototype.getInsertPermission = function () { return Setup.MaintenanceStatusRow.insertPermission; };
            MaintenanceStatusGrid.prototype.getLocalTextPrefix = function () { return Setup.MaintenanceStatusRow.localTextPrefix; };
            MaintenanceStatusGrid.prototype.getService = function () { return Setup.MaintenanceStatusService.baseUrl; };
            MaintenanceStatusGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MaintenanceStatusGrid);
            return MaintenanceStatusGrid;
        }(Serenity.EntityGrid));
        Setup.MaintenanceStatusGrid = MaintenanceStatusGrid;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var SiteDialog = /** @class */ (function (_super) {
            __extends(SiteDialog, _super);
            function SiteDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Setup.SiteForm(_this.idPrefix);
                return _this;
            }
            SiteDialog.prototype.getFormKey = function () { return Setup.SiteForm.formKey; };
            SiteDialog.prototype.getIdProperty = function () { return Setup.SiteRow.idProperty; };
            SiteDialog.prototype.getLocalTextPrefix = function () { return Setup.SiteRow.localTextPrefix; };
            SiteDialog.prototype.getNameProperty = function () { return Setup.SiteRow.nameProperty; };
            SiteDialog.prototype.getService = function () { return Setup.SiteService.baseUrl; };
            SiteDialog.prototype.getDeletePermission = function () { return Setup.SiteRow.deletePermission; };
            SiteDialog.prototype.getInsertPermission = function () { return Setup.SiteRow.insertPermission; };
            SiteDialog.prototype.getUpdatePermission = function () { return Setup.SiteRow.updatePermission; };
            SiteDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SiteDialog);
            return SiteDialog;
        }(Serenity.EntityDialog));
        Setup.SiteDialog = SiteDialog;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var SiteGrid = /** @class */ (function (_super) {
            __extends(SiteGrid, _super);
            function SiteGrid(container) {
                return _super.call(this, container) || this;
            }
            SiteGrid.prototype.getColumnsKey = function () { return 'Setup.Site'; };
            SiteGrid.prototype.getDialogType = function () { return Setup.SiteDialog; };
            SiteGrid.prototype.getIdProperty = function () { return Setup.SiteRow.idProperty; };
            SiteGrid.prototype.getInsertPermission = function () { return Setup.SiteRow.insertPermission; };
            SiteGrid.prototype.getLocalTextPrefix = function () { return Setup.SiteRow.localTextPrefix; };
            SiteGrid.prototype.getService = function () { return Setup.SiteService.baseUrl; };
            SiteGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SiteGrid);
            return SiteGrid;
        }(Serenity.EntityGrid));
        Setup.SiteGrid = SiteGrid;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var StateDialog = /** @class */ (function (_super) {
            __extends(StateDialog, _super);
            function StateDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Setup.StateForm(_this.idPrefix);
                return _this;
            }
            StateDialog.prototype.getFormKey = function () { return Setup.StateForm.formKey; };
            StateDialog.prototype.getIdProperty = function () { return Setup.StateRow.idProperty; };
            StateDialog.prototype.getLocalTextPrefix = function () { return Setup.StateRow.localTextPrefix; };
            StateDialog.prototype.getNameProperty = function () { return Setup.StateRow.nameProperty; };
            StateDialog.prototype.getService = function () { return Setup.StateService.baseUrl; };
            StateDialog.prototype.getDeletePermission = function () { return Setup.StateRow.deletePermission; };
            StateDialog.prototype.getInsertPermission = function () { return Setup.StateRow.insertPermission; };
            StateDialog.prototype.getUpdatePermission = function () { return Setup.StateRow.updatePermission; };
            StateDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], StateDialog);
            return StateDialog;
        }(Serenity.EntityDialog));
        Setup.StateDialog = StateDialog;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
var AssetManagement;
(function (AssetManagement) {
    var Setup;
    (function (Setup) {
        var StateGrid = /** @class */ (function (_super) {
            __extends(StateGrid, _super);
            function StateGrid(container) {
                return _super.call(this, container) || this;
            }
            StateGrid.prototype.getColumnsKey = function () { return 'Setup.State'; };
            StateGrid.prototype.getDialogType = function () { return Setup.StateDialog; };
            StateGrid.prototype.getIdProperty = function () { return Setup.StateRow.idProperty; };
            StateGrid.prototype.getInsertPermission = function () { return Setup.StateRow.insertPermission; };
            StateGrid.prototype.getLocalTextPrefix = function () { return Setup.StateRow.localTextPrefix; };
            StateGrid.prototype.getService = function () { return Setup.StateService.baseUrl; };
            StateGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], StateGrid);
            return StateGrid;
        }(Serenity.EntityGrid));
        Setup.StateGrid = StateGrid;
    })(Setup = AssetManagement.Setup || (AssetManagement.Setup = {}));
})(AssetManagement || (AssetManagement = {}));
//# sourceMappingURL=AssetManagement.Web.js.map