const express =require('express');
const AuthVerify = require('../middlewares/AuthVerify');
const {
    CreateCategories,
    UpdateCategories,
    CategoriesList,
    CategoriesDropDown,
    DeleteCategories,
    CategoriesDetailsByID
} = require('../controllers/categories/Categories');

const router =express.Router();

router.post("/CreateCategories",AuthVerify,CreateCategories);
router.post("/UpdateCategories/:id",AuthVerify,UpdateCategories);
router.get("/CategoriesList/:pageNo/:perPage/:searchKeyword",AuthVerify,CategoriesList);
router.get("/CategoriesDropDown",AuthVerify,CategoriesDropDown);
router.get("/DeleteCategories/:id",AuthVerify,DeleteCategories);
router.get("/CategoriesDetailsByID/:id",AuthVerify,CategoriesDetailsByID);

module.exports=router;