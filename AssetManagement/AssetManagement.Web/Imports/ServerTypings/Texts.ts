namespace AssetManagement.Texts {

    declare namespace Db {

        namespace AddAnAsset {

            namespace AssetDetails {
                export const AssetId: string;
                export const AssetLife: string;
                export const AssetPhoto: string;
                export const AssetTagId: string;
                export const BrandBrandName: string;
                export const BrandId: string;
                export const Category: string;
                export const CategoryId: string;
                export const Color: string;
                export const Cost: string;
                export const Createdby: string;
                export const DateAcquired: string;
                export const Department: string;
                export const DepartmentId: string;
                export const DepreciableAsset: string;
                export const DepreciableCost: string;
                export const DepreciationMethod: string;
                export const Description: string;
                export const Location: string;
                export const LocationId: string;
                export const LocationSiteId: string;
                export const Model: string;
                export const OnCreated: string;
                export const PurchaseDate: string;
                export const Purchasedfrom: string;
                export const SalvageValue: string;
                export const SiteAddress: string;
                export const SiteCity: string;
                export const SiteDescription: string;
                export const SiteId: string;
                export const SiteSiteName: string;
                export const SiteStateId: string;
                export const SiteSuite: string;
                export const UserId: string;
            }

            namespace AssetMaintenance {
                export const AssetId: string;
                export const AssetMaintenanceId: string;
                export const DateCompleted: string;
                export const Details: string;
                export const DueDate: string;
                export const Id: string;
                export const MaintenanceBy: string;
                export const MaintenanceStatus: string;
                export const Title: string;
            }

            namespace AssetWarranty {
                export const AssetId: string;
                export const ExpirationDate: string;
                export const Id: string;
                export const Length: string;
                export const Notes: string;
            }

            namespace CheckIn {
                export const AssetAssetLife: string;
                export const AssetAssetPhoto: string;
                export const AssetAssetTagId: string;
                export const AssetBrandId: string;
                export const AssetCategoryId: string;
                export const AssetColor: string;
                export const AssetCost: string;
                export const AssetCreatedby: string;
                export const AssetDateAcquired: string;
                export const AssetDepartmentId: string;
                export const AssetDepreciableAsset: string;
                export const AssetDepreciableCost: string;
                export const AssetDepreciationMethod: string;
                export const AssetDescription: string;
                export const AssetId: string;
                export const AssetLocationId: string;
                export const AssetModel: string;
                export const AssetOnCreated: string;
                export const AssetPurchaseDate: string;
                export const AssetPurchasedfrom: string;
                export const AssetSalvageValue: string;
                export const AssetSiteId: string;
                export const AssetUserId: string;
                export const CheckId: string;
                export const Department: string;
                export const DepartmentId: string;
                export const DueDate: string;
                export const Email: string;
                export const Location: string;
                export const LocationId: string;
                export const LocationSiteId: string;
                export const Notes: string;
                export const ReturnDate: string;
                export const SendMail: string;
                export const SiteAddress: string;
                export const SiteCity: string;
                export const SiteDescription: string;
                export const SiteId: string;
                export const SiteSiteName: string;
                export const SiteStateId: string;
                export const SiteSuite: string;
            }

            namespace CheckOut {
                export const AssetAssetLife: string;
                export const AssetAssetPhoto: string;
                export const AssetAssetTagId: string;
                export const AssetBrandId: string;
                export const AssetCategoryId: string;
                export const AssetColor: string;
                export const AssetCost: string;
                export const AssetCreatedby: string;
                export const AssetDateAcquired: string;
                export const AssetDepartmentId: string;
                export const AssetDepreciableAsset: string;
                export const AssetDepreciableCost: string;
                export const AssetDepreciationMethod: string;
                export const AssetDescription: string;
                export const AssetId: string;
                export const AssetLocationId: string;
                export const AssetModel: string;
                export const AssetOnCreated: string;
                export const AssetPurchaseDate: string;
                export const AssetPurchasedfrom: string;
                export const AssetSalvageValue: string;
                export const AssetSiteId: string;
                export const AssetUserId: string;
                export const CheckOutDate: string;
                export const CheckOutId: string;
                export const CheckOutTo: string;
                export const Department: string;
                export const DepartmentId: string;
                export const DueDate: string;
                export const Email: string;
                export const EmployeeDepartmentId: string;
                export const EmployeeEmail: string;
                export const EmployeeEmployeeName: string;
                export const EmployeeId: string;
                export const EmployeeLocationId: string;
                export const EmployeeNote: string;
                export const EmployeePhone: string;
                export const EmployeeSiteId: string;
                export const EmployeeTitle: string;
                export const Location: string;
                export const LocationId: string;
                export const LocationSiteId: string;
                export const NoDueDate: string;
                export const Notes: string;
                export const SendMail: string;
                export const SiteAddress: string;
                export const SiteCity: string;
                export const SiteDescription: string;
                export const SiteId: string;
                export const SiteSiteName: string;
                export const SiteStateId: string;
                export const SiteSuite: string;
            }

            namespace Document {
                export const AssetId: string;
                export const Description: string;
                export const Document: string;
                export const Id: string;
            }
        }

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Advanced {

            namespace Customers {
                export const Address: string;
                export const City: string;
                export const Company: string;
                export const CountryCountryName: string;
                export const CountryId: string;
                export const CustomerId: string;
                export const CustomerName: string;
                export const Email: string;
                export const Notes: string;
                export const Phone: string;
                export const SiteStateId: string;
                export const StateId: string;
                export const StateName: string;
                export const Zip: string;
            }

            namespace Employee {
                export const Department: string;
                export const DepartmentId: string;
                export const Email: string;
                export const EmployeeId: string;
                export const EmployeeName: string;
                export const Location: string;
                export const LocationId: string;
                export const LocationSiteId: string;
                export const Note: string;
                export const Phone: string;
                export const SiteAddress: string;
                export const SiteCity: string;
                export const SiteDescription: string;
                export const SiteId: string;
                export const SiteSiteName: string;
                export const SiteStateId: string;
                export const SiteSuite: string;
                export const Title: string;
            }

            namespace Funding {
                export const Amount: string;
                export const Description: string;
                export const EndDate: string;
                export const FundingId: string;
                export const IsActive: string;
                export const Name: string;
                export const Notes: string;
                export const StartDate: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace Setup {

            namespace Brand {
                export const BrandId: string;
                export const BrandName: string;
            }

            namespace Category {
                export const Category: string;
                export const CategoryId: string;
            }

            namespace Company {
                export const Address: string;
                export const City: string;
                export const CompanyId: string;
                export const CompanyName: string;
                export const CountryCountryName: string;
                export const CountryId: string;
                export const PostalCode: string;
                export const StateId: string;
                export const StateStateName: string;
                export const Suite: string;
            }

            namespace Country {
                export const CountryId: string;
                export const CountryName: string;
            }

            namespace Currency {
                export const CurrencyId: string;
                export const CurrencyName: string;
            }

            namespace Department {
                export const Department: string;
                export const DepartmentId: string;
            }

            namespace Location {
                export const Location: string;
                export const LocationId: string;
                export const SiteAddress: string;
                export const SiteCity: string;
                export const SiteDescription: string;
                export const SiteId: string;
                export const SiteSiteName: string;
                export const SiteStateId: string;
                export const SiteSuite: string;
            }

            namespace MaintenanceStatus {
                export const Id: string;
                export const MaintenanceStatus: string;
            }

            namespace Site {
                export const Address: string;
                export const City: string;
                export const Description: string;
                export const SiteId: string;
                export const SiteName: string;
                export const StateId: string;
                export const StateStateName: string;
                export const Suite: string;
            }

            namespace State {
                export const StateId: string;
                export const StateName: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    AssetManagement['Texts'] = Q.proxyTexts(Texts, '', {Db:{AddAnAsset:{AssetDetails:{AssetId:1,AssetLife:1,AssetPhoto:1,AssetTagId:1,BrandBrandName:1,BrandId:1,Category:1,CategoryId:1,Color:1,Cost:1,Createdby:1,DateAcquired:1,Department:1,DepartmentId:1,DepreciableAsset:1,DepreciableCost:1,DepreciationMethod:1,Description:1,Location:1,LocationId:1,LocationSiteId:1,Model:1,OnCreated:1,PurchaseDate:1,Purchasedfrom:1,SalvageValue:1,SiteAddress:1,SiteCity:1,SiteDescription:1,SiteId:1,SiteSiteName:1,SiteStateId:1,SiteSuite:1,UserId:1},AssetMaintenance:{AssetId:1,AssetMaintenanceId:1,DateCompleted:1,Details:1,DueDate:1,Id:1,MaintenanceBy:1,MaintenanceStatus:1,Title:1},AssetWarranty:{AssetId:1,ExpirationDate:1,Id:1,Length:1,Notes:1},CheckIn:{AssetAssetLife:1,AssetAssetPhoto:1,AssetAssetTagId:1,AssetBrandId:1,AssetCategoryId:1,AssetColor:1,AssetCost:1,AssetCreatedby:1,AssetDateAcquired:1,AssetDepartmentId:1,AssetDepreciableAsset:1,AssetDepreciableCost:1,AssetDepreciationMethod:1,AssetDescription:1,AssetId:1,AssetLocationId:1,AssetModel:1,AssetOnCreated:1,AssetPurchaseDate:1,AssetPurchasedfrom:1,AssetSalvageValue:1,AssetSiteId:1,AssetUserId:1,CheckId:1,Department:1,DepartmentId:1,DueDate:1,Email:1,Location:1,LocationId:1,LocationSiteId:1,Notes:1,ReturnDate:1,SendMail:1,SiteAddress:1,SiteCity:1,SiteDescription:1,SiteId:1,SiteSiteName:1,SiteStateId:1,SiteSuite:1},CheckOut:{AssetAssetLife:1,AssetAssetPhoto:1,AssetAssetTagId:1,AssetBrandId:1,AssetCategoryId:1,AssetColor:1,AssetCost:1,AssetCreatedby:1,AssetDateAcquired:1,AssetDepartmentId:1,AssetDepreciableAsset:1,AssetDepreciableCost:1,AssetDepreciationMethod:1,AssetDescription:1,AssetId:1,AssetLocationId:1,AssetModel:1,AssetOnCreated:1,AssetPurchaseDate:1,AssetPurchasedfrom:1,AssetSalvageValue:1,AssetSiteId:1,AssetUserId:1,CheckOutDate:1,CheckOutId:1,CheckOutTo:1,Department:1,DepartmentId:1,DueDate:1,Email:1,EmployeeDepartmentId:1,EmployeeEmail:1,EmployeeEmployeeName:1,EmployeeId:1,EmployeeLocationId:1,EmployeeNote:1,EmployeePhone:1,EmployeeSiteId:1,EmployeeTitle:1,Location:1,LocationId:1,LocationSiteId:1,NoDueDate:1,Notes:1,SendMail:1,SiteAddress:1,SiteCity:1,SiteDescription:1,SiteId:1,SiteSiteName:1,SiteStateId:1,SiteSuite:1},Document:{AssetId:1,Description:1,Document:1,Id:1}},Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Advanced:{Customers:{Address:1,City:1,Company:1,CountryCountryName:1,CountryId:1,CustomerId:1,CustomerName:1,Email:1,Notes:1,Phone:1,SiteStateId:1,StateId:1,StateName:1,Zip:1},Employee:{Department:1,DepartmentId:1,Email:1,EmployeeId:1,EmployeeName:1,Location:1,LocationId:1,LocationSiteId:1,Note:1,Phone:1,SiteAddress:1,SiteCity:1,SiteDescription:1,SiteId:1,SiteSiteName:1,SiteStateId:1,SiteSuite:1,Title:1},Funding:{Amount:1,Description:1,EndDate:1,FundingId:1,IsActive:1,Name:1,Notes:1,StartDate:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},Setup:{Brand:{BrandId:1,BrandName:1},Category:{Category:1,CategoryId:1},Company:{Address:1,City:1,CompanyId:1,CompanyName:1,CountryCountryName:1,CountryId:1,PostalCode:1,StateId:1,StateStateName:1,Suite:1},Country:{CountryId:1,CountryName:1},Currency:{CurrencyId:1,CurrencyName:1},Department:{Department:1,DepartmentId:1},Location:{Location:1,LocationId:1,SiteAddress:1,SiteCity:1,SiteDescription:1,SiteId:1,SiteSiteName:1,SiteStateId:1,SiteSuite:1},MaintenanceStatus:{Id:1,MaintenanceStatus:1},Site:{Address:1,City:1,Description:1,SiteId:1,SiteName:1,StateId:1,StateStateName:1,Suite:1},State:{StateId:1,StateName:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}

