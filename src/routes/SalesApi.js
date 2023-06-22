const express =require('express');
const AuthVerify = require('../middlewares/AuthVerify');
const {
    CreateSales,
    SalesList,
    SaleDelete
} = require('../controllers/sales/Sales');

const router =express.Router();

router.post("/CreateSales",AuthVerify,CreateSales);
router.get("/SalesList/:pageNo/:perPage/:searchKeyword",AuthVerify,SalesList);
router.get("/SaleDelete/:id",AuthVerify,SaleDelete);


module.exports=router;