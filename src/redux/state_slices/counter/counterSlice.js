import { createSlice } from '@reduxjs/toolkit';
import default_data from "../../default_data.js";

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: {
        numbers: [],
        data: default_data
    },
  },
  reducers: {
    add_number: (state) => {
      state.value.numbers.push(state.value.numbers.length+1);
    },
    default_list: (state) => {
        state.value.numbers = [1, 2, 3, 4];
    },
    add_default_data: (state) => {
      state.value.data = default_data;
      
    },
    update_logo: (state, action) => {
      state.value.data.logo.src = action.payload;
      
    },
    add_menu: (state, action)=> {
      state.value.data.menu.push(action.payload);
    },
    update_menu: (state, action)=> {
      let index_num = action.payload.index;
      let data = action.payload.data;
      state.value.data.menu[index_num] = data;
    },
    delete_menu: (state, action)=>{
      state.value.data.menu.splice(action.payload, 1);
    },
    update_footer_content: (state, action)=>{
      state.value.data.footer.copyright = action.payload;
    },
    update_page_content: (state, action)=>{
      state.value.data.content.title = action.payload.title;
      state.value.data.content.sub_title = action.payload.sub_title;
      state.value.data.content.content = action.payload.content;
    }
  },
})

// Action creators are generated for each case reducer function
export const { add_number, default_list, add_default_data, 
  update_logo, add_menu, delete_menu, update_menu, update_footer_content, update_page_content } = counterSlice.actions

export default counterSlice.reducer