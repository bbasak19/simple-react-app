import { createSlice } from '@reduxjs/toolkit';
export const adminSlice = createSlice({
    name: 'admin',
    initialState:{
        value:{
            isAdmin : false,
            isPopupLogin: false,
            isPopupMenu: false,
            isAddMenuPopup: false,
            isUpdateMenuPopup: false,
            isFooterPopup:false,
            isPagePopup:false,
            isBannerPopup:false,
            isBannerAddPopup:false,
            updateMenuIndex:null,
        }
    },
    reducers: {
        onLoginSuccess: (state)=>{
            state.value.isAdmin = true;
            localStorage.setItem('islogin', 'login');
        },
        onLogout: (state)=>{
            state.value.isAdmin = false;
            localStorage.setItem('islogin', '');
        },
        openLoginPopup: (state)=>{
            state.value.isPopupLogin = true;
        },
        closeLoginPopup: (state)=>{
            state.value.isPopupLogin = false;
        },
        openMenuPopup: (state)=>{
            state.value.isPopupMenu = true;
        },
        closeMenuPopup: (state)=>{
            state.value.isPopupMenu = false;
        },
        openAddMenuPopup: (state)=>{
            state.value.isAddMenuPopup = true;
        },
        closeAddMenuPopup: (state)=>{
            state.value.isAddMenuPopup = false;
        },
        openUpdateMenuPopup: (state, action)=>{
            
            state.value.updateMenuIndex = action.payload;
            if(state.value.updateMenuIndex > -1){
                state.value.isUpdateMenuPopup = true;
            }else{
                state.value.isUpdateMenuPopup = false;
            }
            
        },
        closeUpdateMenuPopup: (state)=>{
            state.value.isUpdateMenuPopup = false;
        },
        openFooterPopup: (state)=>{
            state.value.isFooterPopup = true;
        },
        closeFooterPopup: (state)=>{
            state.value.isFooterPopup = false;
        },
        openPagePopup: (state)=>{
            state.value.isPagePopup = true;
        },
        closePagePopup: (state)=>{
            state.value.isPagePopup = false;
        },
        openBannerPopup: (state)=>{
            state.value.isBannerPopup = true;
            
        },
        closeBannerPopup: (state)=>{
            state.value.isBannerPopup = false;
        },
        addBannerItemPopup: (state)=>{
            state.value.isBannerAddPopup = true;
            
        },
        closeAddBannerItemPopup: (state)=>{
            state.value.isBannerAddPopup = false;
        }
    }
});

export const {onLoginSuccess,onLogout, openLoginPopup, closeLoginPopup, openMenuPopup, closeMenuPopup, openAddMenuPopup, closeAddMenuPopup, 
    openUpdateMenuPopup, closeUpdateMenuPopup, openFooterPopup, 
    closeFooterPopup, openPagePopup, closePagePopup, openBannerPopup, closeBannerPopup, addBannerItemPopup, closeAddBannerItemPopup} = adminSlice.actions

export default adminSlice.reducer