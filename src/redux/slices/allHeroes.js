import { createSlice } from "@reduxjs/toolkit";

export const AllHeroesSlice = createSlice({
  name: "allHeroes",
  initialState: {
    allHeroesList: undefined,
    isLoading: false,
    toSearch: undefined,
    searchResult: undefined,
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
    setToSearchResult: (state, action) => {
      state.searchResult = action.payload;
    },
  },
});

export const {
  setAllHeroesList, toogleIsLoading, setToSearch, setToSearchResult
} = AllHeroesSlice.actions
export default AllHeroesSlice.reducer