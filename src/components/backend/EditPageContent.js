import React from 'react'
import { useForm } from "react-hook-form";
import {update_page_content} from "../../redux/state_slices/counter/counterSlice";
import {closePagePopup} from "../../redux/state_slices/admin/adminSlice";
import { useSelector, useDispatch } from 'react-redux';
//import QuillEditor from './helper_components/text_editor/QuillEditor';

export default function EditPageContent() {
    const dispatch = useDispatch();
    const {register, handleSubmit, formState: { errors } } = useForm();
    const get_page_title = useSelector((state) => state.counter.value.data.content.title);
    const get_page_subtitle = useSelector((state) => state.counter.value.data.content.sub_title);
    const get_page_content = useSelector((state) => state.counter.value.data.content.content);
    const onSubmit = data =>{
        console.log("test", data);
        let page_data = {title:data.pagetitle, sub_title:data.pagesmalldesc, content:data.pagecontent}
        dispatch(update_page_content(page_data));
        dispatch(closePagePopup());
    }
    return (
        <div className="edit-form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-3">
                    <label className="form-label">Page Title</label>
                    <input type="text" className="form-control" {...register('pagetitle', {required:true, value:get_page_title})} />
                    {errors.pagetitle && <span className="error_txt">This field is required</span>}
                </div>

                <div className="form-group mb-3">
                    <label className="form-label">Page Samll Description</label>
                    <textarea type="text" className="form-control" {...register('pagesmalldesc', {required:true, value:get_page_subtitle})}></textarea>
                    {errors.pagesmalldesc && <span className="error_txt">This field is required</span>}
                </div>

                <div className="form-group mb-3">
                    <label className="form-label">Page Content</label>
                    <textarea className="form-control" {...register('pagecontent', {required:true, value:get_page_content})}></textarea>
                    {errors.pagecontent && <span className="error_txt">This field is required</span>}
                    {/*<QuillEditor />*/}
                </div>

                <div className="form-group mb-3">
                    <input type="submit" className="btn btn-primary" value="Save" />
                </div>
            </form>
        </div>

    )
}
