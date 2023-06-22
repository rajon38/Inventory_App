const express =require('express');
const AuthVerify = require('../middlewares/AuthVerify');
const {
    CreateBrand,
    UpdateBrand,
    BrandList,
    BrandDropDown,
    DeleteBrand,
    BrandDetailsByID
} = require('../controllers/brands/brands');

const router =express.Router();

router.post("/createBrand",AuthVerify,CreateBrand);
router.post("/updateBrand/:id",AuthVerify,UpdateBrand);
router.get("/brandList/:pageNo/:perPage/:searchKeyword",AuthVerify,BrandList);
router.get("/brandDropDown",AuthVerify,BrandDropDown);
router.get("/DeleteBrand/:id",AuthVerify,DeleteBrand);
router.get("/BrandDetailsByID/:id",AuthVerify,BrandDetailsByID);


module.exports=router;