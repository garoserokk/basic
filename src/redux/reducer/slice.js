import { createSlice } from '@reduxjs/toolkit'
let initialState = {
  Keyword: "",
  contactList:[]
};

const slice = createSlice({
  name: "add",
  initialState,
  reducers: {
    ADD_CONTACT(state, action) {
      const items = action.payload;
      state.contactList.push({
        name: items.name,
        phone : items.phone
      })
    },
    SEARCH_BY_USERNAME(state, action) {
      state.Keyword = action.payload.Keyword
      
    }
  }
})

export const newactions = slice.actions
export default slice