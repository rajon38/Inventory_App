const express =require('express');
const AuthVerify = require('../middlewares/AuthVerify');
const {
    CreateCustomer,
    UpdateCustomer,
    CustomerList,
    CustomerDropDown,
    DeleteCustomer,
    CustomerDetailsByID
} = require('../controllers/customers/Customers');

const router =express.Router();

router.post("/CreateCustomers",AuthVerify,CreateCustomer);
router.post("/UpdateCustomers/:id",AuthVerify,UpdateCustomer);
router.get("/CustomersList/:pageNo/:perPage/:searchKeyword",AuthVerify,CustomerList);
router.get("/CustomersDropDown",AuthVerify,CustomerDropDown);
router.get("/DeleteCustomer/:id",AuthVerify,DeleteCustomer);
router.get("/CustomerDetailsByID/:id",AuthVerify,CustomerDetailsByID);

module.exports=router;