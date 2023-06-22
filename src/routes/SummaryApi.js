const express =require('express');
const AuthVerify = require('../middlewares/AuthVerify');
const {
    ExpensesSummary,
    PurchaseSummary,
    ReturnSummary,
    SalesSummary
} = require('../controllers/summary/Summary');

const router =express.Router();
router.get("/ExpensesSummary",AuthVerify,ExpensesSummary);
router.get("/PurchaseSummary",AuthVerify,PurchaseSummary);
router.get("/ReturnSummary",AuthVerify,ReturnSummary);
router.get("/SalesSummary",AuthVerify,SalesSummary);

module.exports =router;