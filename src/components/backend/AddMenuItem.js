import React from 'react'
import { useForm } from "react-hook-form";
import {add_menu} from "../../redux/state_slices/counter/counterSlice";
import {closeAddMenuPopup} from "../../redux/state_slices/admin/adminSlice";
import { useDispatch } from 'react-redux';

export default function AddMenuItem() {
    const dispatch = useDispatch();
    const {register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data);
        let add_value = {"name":data.menuname, "url":data.menuurl, "class":data.menuclass};
        dispatch(add_menu(add_value));
        dispatch(closeAddMenuPopup());
    }
    return (
        <div className="edit-form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-3">
                    <label className="form-label">Manu Name</label>
                    <input type="text" className="form-control" {...register('menuname', {required: true})} />
                    {errors.menuname && <span className="error_txt">This field is required</span>}
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Manu Url</label>
                    <input type="text" className="form-control" {...register('menuurl', {required: true})} />
                    {errors.menuurl && <span className="error_txt">This field is required</span>}
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Manu Class</label>
                    <input type="text" className="form-control" {...register('menuclass')} />
                </div>
                <div className="form-group mb-3">
                    <input type="submit" className="btn btn-secondary" value="Save" />
                </div>
            </form>
        </div>
    )
}
