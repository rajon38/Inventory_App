const express =require('express');
const AuthVerify = require('../middlewares/AuthVerify');
const {
    CreateReturns,
    ReturnsList,
    ReturnDelete
} = require('../controllers/returns/Returns');

const router =express.Router();

router.post("/CreateReturns",AuthVerify,CreateReturns);
router.get("/ReturnsList/:pageNo/:perPage/:searchKeyword",AuthVerify,ReturnsList);
router.get("/ReturnDelete/:id",AuthVerify,ReturnDelete);

module.exports=router;