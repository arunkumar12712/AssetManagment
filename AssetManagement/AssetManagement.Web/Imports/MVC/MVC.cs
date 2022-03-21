using System;

namespace MVC
{
    public static class Views
    {
        public static class AddAnAsset
        {
            public static class AssetDetails
            {
                public const string AssetDetailsIndex = "~/Modules/AddAnAsset/AssetDetails/AssetDetailsIndex.cshtml";
            }

            public static class AssetMaintenance
            {
                public const string AssetMaintenanceIndex = "~/Modules/AddAnAsset/AssetMaintenance/AssetMaintenanceIndex.cshtml";
            }

            public static class AssetWarranty
            {
                public const string AssetWarrantyIndex = "~/Modules/AddAnAsset/AssetWarranty/AssetWarrantyIndex.cshtml";
            }

            public static class Document
            {
                public const string DocumentIndex = "~/Modules/AddAnAsset/Document/DocumentIndex.cshtml";
            }

        }

        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

        }

        public static class Advanced
        {
            public static class Customers
            {
                public const string CustomersIndex = "~/Modules/Advanced/Customers/CustomersIndex.cshtml";
            }

            public static class Employee
            {
                public const string EmployeeIndex = "~/Modules/Advanced/Employee/EmployeeIndex.cshtml";
            }

            public static class Funding
            {
                public const string FundingIndex = "~/Modules/Advanced/Funding/FundingIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
            }

        }

        public static class Setup
        {
            public static class Brand
            {
                public const string BrandIndex = "~/Modules/Setup/Brand/BrandIndex.cshtml";
            }

            public static class Category
            {
                public const string CategoryIndex = "~/Modules/Setup/Category/CategoryIndex.cshtml";
            }

            public static class Company
            {
                public const string CompanyIndex = "~/Modules/Setup/Company/CompanyIndex.cshtml";
            }

            public static class Country
            {
                public const string CountryIndex = "~/Modules/Setup/Country/CountryIndex.cshtml";
            }

            public static class Currency
            {
                public const string CurrencyIndex = "~/Modules/Setup/Currency/CurrencyIndex.cshtml";
            }

            public static class Department
            {
                public const string DepartmentIndex = "~/Modules/Setup/Department/DepartmentIndex.cshtml";
            }

            public static class Location
            {
                public const string LocationIndex = "~/Modules/Setup/Location/LocationIndex.cshtml";
            }

            public static class MaintenanceStatus
            {
                public const string MaintenanceStatusIndex = "~/Modules/Setup/MaintenanceStatus/MaintenanceStatusIndex.cshtml";
            }

            public static class Site
            {
                public const string SiteIndex = "~/Modules/Setup/Site/SiteIndex.cshtml";
            }

            public static class State
            {
                public const string StateIndex = "~/Modules/Setup/State/StateIndex.cshtml";
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _LayoutSlim = "~/Views/Shared/_LayoutSlim.cshtml";
            public const string _LayoutSlimHead = "~/Views/Shared/_LayoutSlimHead.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }
    }
}

