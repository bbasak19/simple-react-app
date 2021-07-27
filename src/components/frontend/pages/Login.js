import React from 'react';
import { useForm } from "react-hook-form";
import { Redirect } from 'react-router-dom';
import {onLoginSuccess} from "../../../redux/state_slices/admin/adminSlice";
import { useDispatch, useSelector } from 'react-redux';
export default function Login() {
    const isAdminLogin = useSelector((state) => state.admin.value.isAdmin);
    const dispatch = useDispatch();
    const {register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data);
        //let add_value = {"name":data.menuname, "url":data.menuurl, "class":data.menuclass};
        if(data.username === "admin" && data.password ==="admin123"){
            dispatch(onLoginSuccess());
            return <Redirect to='/' />
        }else{
            alert("Please enter your correct username and password");
        }
        
        //dispatch(closeAddMenuPopup());
    }

    if(isAdminLogin){
        return <Redirect to='/' />
    }
    return (
        <div className="login-form-wrap mt-3 mb-5">
            
            <form className="login-form-container" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-center">Signup</h2>
                <div className="form-group mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" {...register('username', {required: true})} />
                    {errors.username && <span className="error_txt">This field is required</span>}
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" {...register('password', {required: true})} />
                    {errors.password && <span className="error_txt">This field is required</span>}
                </div>
                <div className="form-group mb-3 text-center">
                    <input type="submit" value="Login" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}
