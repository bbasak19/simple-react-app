import React from 'react'
import { useForm } from "react-hook-form";
import {update_footer_content} from "../../redux/state_slices/counter/counterSlice";
import {closeFooterPopup} from "../../redux/state_slices/admin/adminSlice";
import { useSelector, useDispatch } from 'react-redux';
export default function FooterContent() {
    const dispatch = useDispatch();
    const {register, handleSubmit, formState: { errors } } = useForm();
    const get_footer_copyright = useSelector((state) => state.counter.value.data.footer.copyright);
    const onSubmit = data =>{
        console.log(data);
        dispatch(update_footer_content(data.footer_content));
        dispatch(closeFooterPopup());
    }
    return (
        <div className="edit-form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-3">
                    <label className="form-label">Update Content</label>
                    <textarea type="text" className="form-control" {...register('footer_content', {required: true, value:get_footer_copyright})}></textarea>
                    {errors.footer_content && <span className="error_txt">This field is required</span>}
                </div>
                <div className="form-group mb-3">
                    <input type="submit" className="btn btn-secondary" value="Save" />
                </div>
            </form>
        </div>
    )
}
