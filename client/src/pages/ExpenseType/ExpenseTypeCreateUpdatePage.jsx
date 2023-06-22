import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import ExpenseTypeCreateUpdate from "../../components/ExpenseType/ExpenseTypeCreateUpdate";
import LazyLoader from "../../components/MasterLayout/LazyLoader";

const ExpenseTypeCreateUpdatePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <ExpenseTypeCreateUpdate/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default ExpenseTypeCreateUpdatePage;