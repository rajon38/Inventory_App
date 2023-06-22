import React, {lazy,Suspense} from 'react';
import LazyLoader from "../../components/MasterLayout/LazyLoader";

const CreatePass = lazy(()=>import('../../components/Users/CreatePass'))
const CreatePassPage = () => {
    return (
        <Suspense fallback={<LazyLoader/>}>
            <CreatePass />
        </Suspense>
    );
};

export default CreatePassPage;