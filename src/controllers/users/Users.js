const DataModel = require('../../models/Users/UsersModel');
const OTPSModel = require('../../models/Users/OTPSModel');
const UserCreate = require('../../services/user/UserCreate');
const UserLogin = require('../../services/user/UserLogin');
const UserUpdate = require('../../services/user/UserUpdate');
const UserDetails = require('../../services/user/UserDetails');
const UserVerifyEmail = require('../../services/user/UserVerifyEmail');
const UserVerifyOTP = require('../../services/user/UserVerifyOTP');
const UserResetPass = require('../../services/user/UserResetPass');

exports.Registration = async (req,res)=>{
    let Result = await UserCreate(req,DataModel)
    res.status(200).json(Result)
}

exports.LogIn = async (req,res)=>{
    let Result = await UserLogin(req,DataModel)
    res.status(200).json(Result)
}

exports.ProfileUpdate = async (req,res)=>{
    let Result = await UserUpdate(req,DataModel)
    res.status(200).json(Result)
}

exports.ProfileDetails = async (req,res)=>{
    let Result = await UserDetails(req,DataModel)
    res.status(200).json(Result)
}

exports.RecoverVerifyEmail = async (req,res)=>{
    let Result = await UserVerifyEmail(req,DataModel)
    res.status(200).json(Result)
}

exports.RecoverVerifyOTP = async (req,res)=>{
    let Result = await UserVerifyOTP(req,OTPSModel)
    res.status(200).json(Result)
}

exports.RecoverPassword = async (req,res)=>{
    let Result = await UserResetPass(req,DataModel)
    res.status(200).json(Result)
}