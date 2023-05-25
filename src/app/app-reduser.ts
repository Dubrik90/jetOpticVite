import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"

const initialState: InitialStateStateType = {
  isOpenBurger: false,
  isOpenForm: false,
  isMenuOpen: false,
} as InitialStateStateType

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsOpenBurgerAC(state, action: PayloadAction<{ isOpen: boolean }>) {
      state.isOpenBurger = action.payload.isOpen
    },
    setIsOpenFormAC(state, action: PayloadAction<{ isOpen: boolean }>) {
      state.isOpenForm = action.payload.isOpen
    },
    setIsMenuOpenAC(state, action: PayloadAction<{ value: boolean }>) {
      return { ...state, isMenuOpen: action.payload.value }
    },
  },
})

type InitialStateStateType = {
  isMenuOpen: boolean
  isOpenBurger: boolean
  isOpenForm: boolean
}
export const selectOpenBurger = (state: any) => state.isOpenBurger
export type RequestStatusType = "idle" | "loading" | "error"
export const appReducer = slice.reducer
export const { setIsOpenBurgerAC, setIsOpenFormAC, setIsMenuOpenAC } =
  slice.actions
