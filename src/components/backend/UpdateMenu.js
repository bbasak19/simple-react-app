import React from 'react'
import { useForm } from "react-hook-form";
import {update_menu} from "../../redux/state_slices/counter/counterSlice";
import {closeUpdateMenuPopup} from "../../redux/state_slices/admin/adminSlice";
import { useSelector, useDispatch } from 'react-redux';

export default function UpdateMenu() {
    const dispatch = useDispatch();
    const updateIndex = useSelector((state) => state.admin.value.updateMenuIndex);
    const updateObj = useSelector((state) => state.counter.value.data.menu[updateIndex]);
    const {register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
        let update_value = {index:updateIndex, data: {"name":data.menuname, "url":data.menuurl, "class":data.menuclass}};
        dispatch(update_menu(update_value));
        dispatch(closeUpdateMenuPopup());
    }
    return (
        <div className="edit-form-container">
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-3">
                    <label className="form-label">Manu Name</label>
                    <input type="text" className="form-control" {...register('menuname', {required: true, value:updateObj.name})} />
                    {errors.menuname && <span className="error_txt">This field is required</span>}
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Manu Url</label>
                    <input type="text" className="form-control" {...register('menuurl', {required: true, value:updateObj.url})} />
                    {errors.menuurl && <span className="error_txt">This field is required</span>}
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Manu Class</label>
                    <input type="text" className="form-control" {...register('menuclass', {value:updateObj.class})} />
                </div>

                <div className="form-group mb-3">
                    <input type="submit" className="btn btn-secondary" value="Save" />
                </div>
            </form>
        </div>
    )
}
