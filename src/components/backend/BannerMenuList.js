import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {delete_menu} from "../../redux/state_slices/counter/counterSlice";
import { addBannerItemPopup } from '../../redux/state_slices/admin/adminSlice';

export default function BannerMenuList() {
    const dispatch = useDispatch();
    const getBanners = useSelector((state) => state.counter.value.data.banner);
    const map_banner_lists = getBanners.map((item, index)=>{
        return (
            <li className={item.class} key={index}>
                    <div className="form-list-title banner-edit-lists">
                        <div className="graphic" style={{backgroundImage:'URL('+item.image+')'}}></div>
                        <div className="banner-conts">
                            <div className="banner_title">{item.title}</div>
                            <div className="banner_desc">{item.desc}</div>
                        </div>
                    </div>
                    <div className="option_buttons">
                        <span className="btn" onClick={()=>{alert("ok")}}>&#9998;</span>
                        <span className="btn">&#8679;</span>
                        <span className="btn">&#8681;</span>
                        <span className="btn" onClick={()=>{dispatch(delete_menu(index))}}>&#10005;</span>
                    </div>
            </li>
        )
    })
    return (
        <div className="form-edit-container">
            
            <div className="edit-form-controls">
                <span className="btn btn-primary" onClick={()=> dispatch(addBannerItemPopup())}>Add</span>
            </div>
            <ul className="form-list-display">
                {map_banner_lists}
                
            </ul>
            <div className="form-group mb-3 text-right">
                <input type="submit" className="btn btn-secondary" value="Save" />
            </div>
        </div>
    )
}
