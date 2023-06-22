import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import ExpenseList from "../../components/Expense/ExpenseList";
import LazyLoader from "../../components/MasterLayout/LazyLoader";

const ExpenseListPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <ExpenseList/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default ExpenseListPage;