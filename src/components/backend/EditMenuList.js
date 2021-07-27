import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {delete_menu} from "../../redux/state_slices/counter/counterSlice";
import { openAddMenuPopup, openUpdateMenuPopup, closeMenuPopup } from '../../redux/state_slices/admin/adminSlice';

export default function EditMenuList() {
    const dispatch = useDispatch();
    const getMenus = useSelector((state) => state.counter.value.data.menu);
    const map_menu_lists = getMenus.map((item, index)=>{
        return (
            <li className={item.class} key={index}>
                    <div className="form-list-title">
                        {item.name}
                    </div>
                    <div className="option_buttons">
                        <span className="btn" onClick={()=>{dispatch(openUpdateMenuPopup(index))}}>&#9998;</span>
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
                <span className="btn btn-primary" onClick={()=>dispatch(openAddMenuPopup())}>Add</span>
            </div>
            <ul className="form-list-display">
                {map_menu_lists}
                
            </ul>
            <div className="form-group mb-3 text-right">
                <input type="submit" className="btn btn-secondary" value="Save" onClick={()=>dispatch(closeMenuPopup())} />
            </div>
        </div>
    )
}
