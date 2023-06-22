const express =require('express');
const AuthVerify = require('../middlewares/AuthVerify');
const {
    CreateProducts,
    UpdateProducts,
    ProductsList,
    DeleteProduct,
    ProductDetailsByID,
    ProductsDropDown
} = require('../controllers/products/Products');

const router =express.Router();

router.post("/CreateProducts",AuthVerify,CreateProducts);
router.post("/UpdateProducts/:id",AuthVerify,UpdateProducts);
router.get("/ProductsList/:pageNo/:perPage/:searchKeyword",AuthVerify,ProductsList)
router.get("/DeleteProduct/:id",AuthVerify,DeleteProduct);
router.get("/ProductDetailsByID/:id",AuthVerify,ProductDetailsByID);
router.get("/ProductsDropDown",AuthVerify,ProductsDropDown);


module.exports=router;