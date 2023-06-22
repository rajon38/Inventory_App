import cogoToast from "cogo-toast";
let EmailRegx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;;
let MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;

class FromHelper{
    IsEmpty(value){
        return value.length === 0;
    }
    IsMobile(value){
        return MobileRegx.test(value);
    }
    IsEmail(value){
        return !EmailRegx.test(value);
    }
    ErrorToast(msq){
        cogoToast.error(msq, {position: "bottom-center"});
    }
    SuccessToast(msg){
        cogoToast.success(msg,{position: "bottom-center"})
    }
    getBase64(file){
        return new Promise((resolve, reject)=>{
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error)
        })
    }
}

export const {IsEmpty,IsMobile,IsEmail,ErrorToast,SuccessToast,getBase64} = new FromHelper();