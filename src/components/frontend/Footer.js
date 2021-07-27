import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { openFooterPopup } from '../../redux/state_slices/admin/adminSlice';

export default function Footer() {
    const dispatch = useDispatch();
    const isAdminLogin = useSelector((state) => state.admin.value.isAdmin);
    const footer_data = useSelector((state) => state.counter.value.data.footer.copyright);

    return (
        <footer className="site-footer">
            <div className="footer-copyright-text" dangerouslySetInnerHTML={{__html: footer_data}}></div>
            {isAdminLogin && <span className="btn rounded-edit-btn" onClick={()=> dispatch(openFooterPopup())}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg></span>}
        </footer>
    )
}
