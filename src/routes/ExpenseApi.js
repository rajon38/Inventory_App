const express =require('express');
const AuthVerify = require('../middlewares/AuthVerify');
const {
    CreateExpenseTypes,
    UpdateExpenseTypes,
    ExpenseTypesList,
    ExpenseTypesDropDown,
    ExpenseTypeDetailsByID,
    DeleteExpenseTypes

} = require('../controllers/Expenses/ExpenseTypes');

const {
    CreateExpenses,
    UpdateExpenses,
    ExpensesList,
    DeleteExpense,
    ExpenseDetailsByID
}=require('../controllers/Expenses/Expenses')
const router =express.Router();

//ExpenseTypes
router.post("/CreateExpenseTypes",AuthVerify,CreateExpenseTypes);
router.post("/UpdateExpenseTypes/:id",AuthVerify,UpdateExpenseTypes);
router.get("/ExpenseTypesList/:pageNo/:perPage/:searchKeyword",AuthVerify,ExpenseTypesList);
router.get("/ExpenseTypesDropDown",AuthVerify,ExpenseTypesDropDown);
router.get("/ExpenseTypeDetailsByID/:id",AuthVerify,ExpenseTypeDetailsByID);
router.get("/DeleteExpenseTypes/:id", AuthVerify,DeleteExpenseTypes);


//Expenses
router.post("/CreateExpenses",AuthVerify,CreateExpenses);
router.post("/UpdateExpenses/:id",AuthVerify,UpdateExpenses);
router.get("/ExpensesList/:pageNo/:perPage/:searchKeyword",AuthVerify,ExpensesList);
router.get("/DeleteExpense/:id",AuthVerify,DeleteExpense)
router.get("/ExpenseDetailsByID/:id",AuthVerify,ExpenseDetailsByID);

module.exports=router;