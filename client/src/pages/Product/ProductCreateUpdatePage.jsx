import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import ProductCreateUpdate from "../../components/Product/ProductCreateUpdate";
import LazyLoader from "../../components/MasterLayout/LazyLoader";

const ProductCreateUpdatePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <ProductCreateUpdate/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default ProductCreateUpdatePage;