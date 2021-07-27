import React, {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import {update_logo} from "../../redux/state_slices/counter/counterSlice";
import {closeLoginPopup} from "../../redux/state_slices/admin/adminSlice";
import { useSelector, useDispatch } from 'react-redux';
export default function LogoEdit() {
    const getDefaultLogo = useSelector((state) => state.counter.value.data.logo.src);
    const dispatch = useDispatch();
    const {register, handleSubmit, formState: { errors } } = useForm();
    const [logoPreview, setLogoPreview] = useState('');
    const onSubmit = data => {
        //console.log(URL.createObjectURL(data.logo[0]));
        dispatch(update_logo(URL.createObjectURL(data.logo[0])));
        dispatch(closeLoginPopup());
        
    };
    const logoOnChange = (event)=>{
        let file = event.target.files[0];
        console.log(file);
        console.log(URL.createObjectURL(file));
        setLogoPreview(URL.createObjectURL(file))
        
    }
    useEffect(()=>{
        setLogoPreview(getDefaultLogo);
    },[getDefaultLogo])
    return (
        <div className="form-edit-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="update_fields">
                    
                    <div className="update_fields_preview mb-3">
                        <img src={logoPreview} alt="" style={{maxWidth:'100%'}}/>
                    </div>
                    <div className="update_field_container mb-3">
                        <div className="mb-3">
                        <label className="mb-2">Update Logo</label>
                        <input  type="file" className="form-control"  {...register('logo', { required: true })} onChange={logoOnChange}  />
                        {errors.logo && <span>This field is required</span>}
                        </div>
                        <button className="btn btn-primary btn-small">Background Size Cover</button>
                    </div>
                </div>
                <div className="form-fields mb-3">
                    <input type="submit" className="btn btn-secondary" value="Submit" />
                </div>
            </form>
        </div>
    )
}
