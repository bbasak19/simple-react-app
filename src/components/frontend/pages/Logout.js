import React from 'react'
import { useDispatch } from 'react-redux';
import { onLogout } from '../../../redux/state_slices/admin/adminSlice';
export default function Logout() {
    const dispatch = useDispatch();
    dispatch(onLogout());
    return (
        <div className="text-center main-cms-part">
            Successfully logout
        </div>
    )
}
