import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeLoginPopup, closeMenuPopup, closeAddMenuPopup, 
    closeUpdateMenuPopup, closeFooterPopup, closePagePopup, closeBannerPopup, closeAddBannerItemPopup } from '../../redux/state_slices/admin/adminSlice';
import LogoEdit from './LogoEdit';
import EditMenuList from './EditMenuList';
import UpdateMenu from './UpdateMenu';
import EditPageContent from './EditPageContent';
import FooterContent from './FooterContent';
import Modal from '../Modal/Modal';
import AddMenuItem from './AddMenuItem';
import BannerMenuList from './BannerMenuList';
import BannerAddItem from './BannerAddItem';

export default function Admin() {
    const dispatch = useDispatch();
    const logoM = useSelector((state) => state.admin.value.isPopupLogin);
    const menuListModal = useSelector((state) => state.admin.value.isPopupMenu);
    const addMenuModal = useSelector((state) => state.admin.value.isAddMenuPopup);
    const updateMenuModal = useSelector((state) => state.admin.value.isUpdateMenuPopup);
    const footerEditModal = useSelector((state) => state.admin.value.isFooterPopup);
    const editPageModal = useSelector((state) => state.admin.value.isPagePopup);
    const bannerModal = useSelector((state) => state.admin.value.isBannerPopup);
    const bannerAddModal = useSelector((state) => state.admin.value.isBannerAddPopup);
    return (
        <div className="site-admin-sec">
            
            {/* Logo Modal*/}
            <Modal title="Logo Update" show={logoM} close={()=> dispatch(closeLoginPopup())}>
                <LogoEdit />
            </Modal>
        
            {/* banner Modal*/}
            <Modal title="Banner Lists" show={bannerModal} close={()=> dispatch(closeBannerPopup())}>
                <BannerMenuList />
            </Modal>

            {/* banner add Modal*/}
            <Modal title="Banner Add Item" show={bannerAddModal} close={()=> dispatch(closeAddBannerItemPopup())}>
                <BannerAddItem />
            </Modal>

            {/* Edit menu lists */}
            <Modal title="Edit Menu List" show={menuListModal} close={()=> dispatch(closeMenuPopup())}>
                <EditMenuList />
            </Modal>

            {/* Update menu */}
            <Modal title="Update Menu" show={updateMenuModal} close={()=> dispatch(closeUpdateMenuPopup())}>
                <UpdateMenu />
            </Modal>

            {/* add menu */}
            <Modal title="Add Menu" show={addMenuModal} close={()=> dispatch(closeAddMenuPopup())}>
                <AddMenuItem />
            </Modal>

            {/* page content modals */}
            <Modal title="Update Menu" show={editPageModal} close={()=> dispatch(closePagePopup())}>
                <EditPageContent />
            </Modal>

            {/* Footer modals */}
            <Modal title="Footer Content Edit" show={footerEditModal} close={()=>dispatch(closeFooterPopup())}>
                <FooterContent />
            </Modal>
            
        </div>
    )
}
