import { createSlice } from "@reduxjs/toolkit";
import store, { RootState } from "../index";

export declare interface IUserInfo {
  id: string;
  name: string;
}

interface State {
  userInfo: IUserInfo | object;
}

const initialState: State = {
  userInfo: {},
};

export const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
});
export const { setUserInfo } = slice.actions;

export const reduxChangeUserInfo = (pageType: IUserInfo) => {
  store.dispatch(setUserInfo(pageType));
};

export const selectUserInfo = (state: RootState) => state.user.userInfo;

export default slice.reducer;
