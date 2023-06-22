import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import PurchaseCreateUpdate from "../../components/Purchase/PurchaseCreateUpdate";
import LazyLoader from "../../components/MasterLayout/LazyLoader";

const PurchaseCreateUpdatePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <PurchaseCreateUpdate/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default PurchaseCreateUpdatePage;