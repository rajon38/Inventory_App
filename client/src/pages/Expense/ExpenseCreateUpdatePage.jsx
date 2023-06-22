import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import ExpenseCreateUpdate from "../../components/Expense/ExpenseCreateUpdate";
import LazyLoader from "../../components/MasterLayout/LazyLoader";

const ExpenseCreateUpdatePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <ExpenseCreateUpdate/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default ExpenseCreateUpdatePage;