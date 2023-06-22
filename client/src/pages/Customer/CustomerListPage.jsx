import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import CustomerList from "../../components/Customer/CustomerList";
import LazyLoader from "../../components/MasterLayout/LazyLoader";

const CustomerListPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <CustomerList/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default CustomerListPage;