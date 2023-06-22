const express =require('express');
const AuthVerify = require('../middlewares/AuthVerify');
const {
    ExpensesByDate,
    ReturnByDate,
    PurchaseByDate,
    SalesByDate
} = require('../controllers/Report/Report');


const router =express.Router();

router.post("/ExpensesByDate",AuthVerify,ExpensesByDate);
router.post("/ReturnByDate",AuthVerify,ReturnByDate);
router.post("/PurchaseByDate",AuthVerify,PurchaseByDate);
router.post("/SalesByDate",AuthVerify,SalesByDate);

module.exports=router;