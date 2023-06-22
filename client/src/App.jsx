import React, {Fragment} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/Users/LoginPage";
import FullscreenLoader from "./components/MasterLayout/FullScreenLoader";
import Registration from "./components/Users/Registration";
import SendOTPPage from "./pages/Users/SendOTPPage";
import VerifyOTPPage from "./pages/Users/VerifyOTPPage";
import CreatePassPage from "./pages/Users/CreatePassPage";
import Page404 from "./pages/NotFound/Page404";
import {getToken} from "./helper/SessionHelper";
import BrandCreateUpdatePage from "./pages/Brand/BrandCreateUpdatePage";
import BrandListPage from "./pages/Brand/BrandListPage";
import CategoryCreateUpdatePage from "./pages/Category/CategoryCreateUpdatePage";
import CategoryListPage from "./pages/Category/CategoryListPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import CustomerCreateUpdatePage from "./pages/Customer/CustomerCreateUpdatePage";
import CustomerListPage from "./pages/Customer/CustomerListPage";
import ExpenseCreateUpdatePage from "./pages/Expense/ExpenseCreateUpdatePage";
import ExpenseTypeListPage from "./pages/ExpenseType/ExpenseTypeListPage";
import ExpenseListPage from "./pages/Expense/ExpenseListPage";
import ProductCreateUpdatePage from "./pages/Product/ProductCreateUpdatePage";
import ProductListPage from "./pages/Product/ProductListPage";
import PurchaseCreateUpdatePage from "./pages/Purchase/PurchaseCreateUpdatePage";
import PurchaseListPage from "./pages/Purchase/PurchaseListPage";
import ReturnCreateUpdatePage from "./pages/Return/ReturnCreateUpdatePage";
import ReturnListPage from "./pages/Return/ReturnListPage";
import SalesCreateUpdatePage from "./pages/Sales/SalesCreateUpdatePage";
import SalesListPage from "./pages/Sales/SalesListPage";
import SupplierCreateUpdatePage from "./pages/Supplier/SupplierCreateUpdatePage";
import SupplierListPage from "./pages/Supplier/SupplierListPage";
import PurchaseReportPage from "./pages/Report/PurchaseReportPage";
import ReturnReportPage from "./pages/Report/ReturnReportPage";
import SaleReportPage from "./pages/Report/SaleReportPage";
import ExpenseReportPage from "./pages/Report/ExpenseReportPage";
import ProfilePage from "./pages/Users/ProfilePage";
import ExpenseTypeCreateUpdatePage from "./pages/ExpenseType/ExpenseTypeCreateUpdatePage";

const App = () => {
    if (getToken()){
        return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route path="/BrandCreateUpdatePage" element={<BrandCreateUpdatePage/>} />
                        <Route path="/BrandListPage" element={<BrandListPage/>} />

                        <Route path="/CategoryCreateUpdatePage" element={<CategoryCreateUpdatePage/>} />
                        <Route path="/CategoryListPage" element={<CategoryListPage/>} />

                        <Route path="/CustomerCreateUpdatePage" element={<CustomerCreateUpdatePage/>} />
                        <Route path="/CustomerListPage" element={<CustomerListPage/>} />

                        <Route path="/ExpenseTypeCreateUpdatePage" element={<ExpenseTypeCreateUpdatePage/>} />
                        <Route path="/ExpenseTypeListPage" element={<ExpenseTypeListPage/>} />

                        <Route path="/ExpenseCreateUpdatePage" element={<ExpenseCreateUpdatePage/>} />
                        <Route path="/ExpenseListPage" element={<ExpenseListPage/>} />

                        <Route path="/ProductCreateUpdatePage" element={<ProductCreateUpdatePage/>} />
                        <Route path="/ProductListPage" element={<ProductListPage/>} />

                        <Route path="/PurchaseCreateUpdatePage" element={<PurchaseCreateUpdatePage/>} />
                        <Route path="/PurchaseListPage" element={<PurchaseListPage/>} />

                        <Route path="/ReturnCreateUpdatePage" element={<ReturnCreateUpdatePage/>} />
                        <Route path="/ReturnListPage" element={<ReturnListPage/>} />

                        <Route path="/SalesCreateUpdatePage" element={<SalesCreateUpdatePage/>} />
                        <Route path="/SalesListPage" element={<SalesListPage/>} />

                        <Route path="/SupplierCreateUpdatePage" element={<SupplierCreateUpdatePage/>} />
                        <Route path="/SupplierListPage" element={<SupplierListPage/>} />

                        <Route path="/PurchaseReportPage" element={<PurchaseReportPage/>} />
                        <Route path="/ReturnReportPage" element={<ReturnReportPage/>} />
                        <Route path="/SaleReportPage" element={<SaleReportPage/>} />
                        <Route path="/ExpenseReportPage" element={<ExpenseReportPage/>} />

                        <Route path="/" element={<DashboardPage/>} />
                        <Route path="/Profile" element={<ProfilePage/>} />
                        <Route path="*" element={<Page404/>} />
                    </Routes>
                </BrowserRouter>
            </Fragment>
        )
    }else {
        return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navigate to="/login" replace />}/>
                        <Route path="/login" element={<LoginPage />}/>
                        <Route path="/registration" element={<Registration/>} />
                        <Route path="/SendOTP" element={<SendOTPPage />}/>
                        <Route path="/VerifyOTP" element={<VerifyOTPPage/>}/>
                        <Route path="/CreatePassword" element={<CreatePassPage />}/>
                        <Route path="*" element={<Page404/>} />
                    </Routes>
                </BrowserRouter>
                <FullscreenLoader/>
            </Fragment>
        );
    }

};

export default App;