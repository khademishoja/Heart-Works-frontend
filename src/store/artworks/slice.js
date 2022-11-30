import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  artWorks: [],
  artWorkDetails: [],
};

export const artWorkSlice = createSlice({
  name: "artWork",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    setAllArtWorks: (state, action) => {
      state.artWorks = [...action.payload];
      state.loading = false;
    },
    setArtWorkeDetails: (state, action) => {
      state.artWorkDetails = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
// as we add cases to our reducer we will also export the corresponding actions
export const { startLoading, setAllArtWorks, setArtWorkeDetails } =
  artWorkSlice.actions;

export default artWorkSlice.reducer;
