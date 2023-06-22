const express =require('express');
const AuthVerify = require('../middlewares/AuthVerify');
const {
    CreatePurchases,
    PurchasesList,
    PurchasesDelete
} = require('../controllers/purchases/Purchases');
const {CreateSuppliers} = require("../controllers/suppliers/Suppliers");

const router =express.Router();

router.post("/CreatePurchases",AuthVerify,CreatePurchases);
router.get("/PurchasesList/:pageNo/:perPage/:searchKeyword",AuthVerify,PurchasesList);
router.get("/PurchasesDelete/:id",AuthVerify,PurchasesDelete);

module.exports = router;