import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const AllHeroesSlice = createSlice({
  name: "allHeroes",
  initialState: {
    allHeroesList: undefined,
    isLoading: false,
    toSearch: undefined,
    orderBy: "A-Z",
  },
  reducers: {
    setAllHeroesList: (state, action) => {
      state.allHeroesList = action.payload;
    },
    toogleIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setToSearch: (state, action) => {
      state.toSearch = action.payload;
    },
    setOrderBy: (state, action) => {
      state.orderBy = action.payload;
    },
  },
});

export const { setAllHeroesList, toogleIsLoading, setToSearch, setOrderBy } =
  AllHeroesSlice.actions;
export default AllHeroesSlice.reducer;

export const fetchAllHeroes = () => (dispatch) => {
  dispatch(toogleIsLoading(true));
  dispatch(setAllHeroesList(undefined));
  dispatch(setToSearch(undefined));
  axios
    .get(process.env.React_App_URL_API_ALL)
    .then((data) => {
      dispatch(setAllHeroesList(data.data));
    })
    .finally(dispatch(toogleIsLoading(false)));
};
