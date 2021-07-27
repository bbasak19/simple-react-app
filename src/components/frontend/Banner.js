import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
//import { useState, useEffect } from 'react';
import { openBannerPopup } from '../../redux/state_slices/admin/adminSlice';
export default function Banner() {
    const dispatch = useDispatch();
    const isAdminLogin = useSelector((state) => state.admin.value.isAdmin);
    const get_banner = useSelector((state)=>state.counter.value.data.banner);
    
    const banner_lists = get_banner.map((item, index)=>{
        return(
            
            
                    <div key={index+'_banner'} className={'carousel-item '+ (index === 0 ? 'active':'') }  style={{backgroundImage:'url('+item.image+')'}}>
                        <div className="banner-caption" >
                            <h1 className="banner-title">{item.title}</h1>
                            <div className="banner-desc">{item.desc}</div>
                        </div>
                    </div>
               
            
        )
    });

    return (
        <div className="home_banner_wrap">{isAdminLogin && <span className="btn rounded-edit-btn" onClick={()=> dispatch(openBannerPopup())}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
<path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg></span>}
            <div id="mainBanner" className="carousel slide home-banner-sec" data-bs-ride="carousel">
                
                <div className="carousel-inner">
                    {banner_lists}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#mainBanner" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#mainBanner" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
