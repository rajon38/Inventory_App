const express =require('express');
const AuthVerify = require('../middlewares/AuthVerify');
const {
    CreateSuppliers,
    UpdateSuppliers,
    SuppliersList,
    SuppliersDropDown,
    DeleteSupplier,
    SupplierDetailsByID
} = require('../controllers/suppliers/Suppliers');

const router =express.Router();

router.post("/CreateSuppliers",AuthVerify,CreateSuppliers);
router.post("/UpdateSuppliers/:id",AuthVerify,UpdateSuppliers);
router.get("/SuppliersList/:pageNo/:perPage/:searchKeyword",AuthVerify,SuppliersList);
router.get("/SuppliersDropDown",AuthVerify,SuppliersDropDown);
router.get("/DeleteSupplier/:id",AuthVerify,DeleteSupplier);
router.get("/SupplierDetailsByID/:id",AuthVerify,SupplierDetailsByID);

module.exports=router;