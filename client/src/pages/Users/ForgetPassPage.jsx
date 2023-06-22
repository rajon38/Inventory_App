import React, {Fragment, lazy,Suspense} from 'react';
import LazyLoader from "../../components/MasterLayout/LazyLoader";
const ForgetPass = lazy(()=> import('../../components/Users/SendOTP'))
const ForgetPassPage = () => {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader/>}>
                <ForgetPass />
            </Suspense>
        </Fragment>
    );
};

export default ForgetPassPage;