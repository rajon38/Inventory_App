import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import PurchaseReport from "../../components/Report/PurchaseReport";
import LazyLoader from "../../components/MasterLayout/LazyLoader";

const PurchaseReportPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <PurchaseReport/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default PurchaseReportPage;