import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import PurchaseList from "../../components/Purchase/PurchaseList";
import LazyLoader from "../../components/MasterLayout/LazyLoader";

const PurchaseListPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <PurchaseList/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default PurchaseListPage;