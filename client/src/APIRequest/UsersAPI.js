import axios from "axios";
import {getToken, setEmail, setToken, setUserDetails, setOTP} from "../helper/SessionHelper";
import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/settings-slice";
import {ErrorToast, SuccessToast} from "../helper/FromHelper";
import {BaseURL} from "../helper/config";
import {SetProfile} from "../redux/state-slice/profile-slice";

const AxiosHeader= {headers:{"token":getToken()}}

export async function LoginRequest(email,password){
    try {
        store.dispatch(ShowLoader());
        let URL = BaseURL+"/login";
        let PostBody = {"email":email, "password":password};
        let res = await axios.post(URL,PostBody);
        setToken(res.data['token']);
        setUserDetails(res.data['data']);
        SuccessToast("Login Success");
        store.dispatch(HideLoader());
        return true;
    }catch (e) {
        store.dispatch(HideLoader())
        ErrorToast("Invalid Email or Password")
        return false;
    }
}

export async function RegistrationRequest(email,firstName,lastName,mobile,password,photo){
    try {
        store.dispatch(ShowLoader());
        let URL = BaseURL + "/registration";
        let PostBody={email:email,firstName:firstName,lastName:lastName,mobile:mobile,password:password,photo:photo}
        let res = await axios.post(URL,PostBody)
        store.dispatch(HideLoader())
        if (res.status===200){
            if (res.data['status']==="fail"){
                if (res.data['data']['keyPattern']['email']===1){
                    ErrorToast("Email Already Exist");
                    return false;
                }else {
                    ErrorToast("Something Went Wrong")
                    return false;
                }
            }else {
                SuccessToast("Registration Success");
                return true;
            }
        }else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }catch (e) {
        store.dispatch(HideLoader());
        ErrorToast("Something Went Wrong");
        return false;
    }
}


export async function GetProfileDetails(){
    try {
        store.dispatch(ShowLoader());
        let URL = BaseURL+ "/profileDetails";
        let res = await axios.get(URL,AxiosHeader);
        store.dispatch(HideLoader());
        if (res.status === 200){
            store.dispatch(SetProfile(res.data['data'][0]));
            return true;
        }else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    }
}


export async function ProfileUpdateRequest(email,firstName,lastName,mobile,password,photo){
    try {
        store.dispatch(ShowLoader());
        let URL = BaseURL+"/profileUpdate";
        let PostBody = {email:email,firstName:firstName,lastName:lastName,mobile:mobile,password:password,photo:photo}
        let UserDetails = {email:email,firstName:firstName,lastName:lastName,mobile:mobile,photo:photo}
        let res = await axios.post(URL,PostBody,AxiosHeader);
        store.dispatch(HideLoader())
        if (res.status === 200){
            SuccessToast("Profile Update Successful");
            setUserDetails(UserDetails);
            return true;
        }else {
            ErrorToast("Something Went Wrong");
            return false;
        }
    }catch (e) {
        ErrorToast("Something Went Wrong");
        store.dispatch(HideLoader());
        return false;
    }
}


export async function RecoverVerifyEmailRequest(email){
    try {
        store.dispatch(ShowLoader());
        let URL = BaseURL+"/recoverVarifyEmail/"+email;
        let res = await axios.get(URL);
        store.dispatch(HideLoader());
        if (res.status === 200){
            if (res.data['status']==='fail'){
                ErrorToast("No User found");
                return false;
            }else {
                setEmail(email)
                SuccessToast("A 6 Digit verification code has been sent to your email address.");
                return true;
            }
        }else {
            ErrorToast("Something Went Wrong");
            return false;
        }
    }catch (e) {
        ErrorToast("Something Went Wrong");
        store.dispatch(HideLoader());
        return false;
    }
}


export async function RecoverVerifyOTPRequest(email,OTP){
    try {
        store.dispatch(ShowLoader());
        let URL = BaseURL + "/recoverVarifyOTP/" + email + "/" + OTP;
        let res = await axios.get(URL);
        store.dispatch(HideLoader());
        if (res.status === 200){
            if (res.data['status'] === 'fail'){
                ErrorToast("Code Verification Fail");
                return false;
            }else {
                setOTP(OTP);
                SuccessToast("Code Verification Success");
                return true;
            }
        }else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    }
}


export async function RecoverResetPassRequest(email,OTP,password){
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURL + "/resetPass";
        let PostBody = {email:email, OTP:OTP, password:password};
        let res = await axios.post(URL,PostBody);
        store.dispatch(HideLoader());
        if (res.status === 200){
            if (res.data['status'] === 'fail'){
                ErrorToast(res.data['data']);
                return false;
            }else {
                setOTP(OTP)
                SuccessToast("NEW PASSWORD CREATED");
                return true;
            }
        }else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    }
}