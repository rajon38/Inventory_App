const express =require('express');
const AuthVerify = require('../middlewares/AuthVerify');
const {
    Registration,
    LogIn,
    ProfileUpdate,
    ProfileDetails,
    RecoverVerifyEmail,
    RecoverVerifyOTP,
    RecoverPassword
} = require('../controllers/users/Users');

const router =express.Router();


router.post("/registration",Registration);
router.post("/login",LogIn);
router.post("/profileUpdate",AuthVerify,ProfileUpdate);
router.get("/profileDetails",AuthVerify,ProfileDetails);
router.get("/recoverVarifyEmail/:email",RecoverVerifyEmail);
router.get("/recoverVarifyOTP/:email/:otp",RecoverVerifyOTP);
router.post("/resetPass",RecoverPassword);

module.exports=router;