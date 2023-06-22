import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import ExpenseReport from "../../components/Report/ExpenseReport";
import LazyLoader from "../../components/MasterLayout/LazyLoader";

const ExpenseReportPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <ExpenseReport/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default ExpenseReportPage;